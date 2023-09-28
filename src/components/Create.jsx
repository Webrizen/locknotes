"use client";
import React, { useState, useRef } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { IconButton } from "@material-tailwind/react";
import { useAuthContext } from "@/context/AuthContext";

export default function Create() {
  const firestore = getFirestore();
  const [note, setNote] = useState("");
  const [noteLink, setNoteLink] = useState("");
  const [isNoteVisible, setIsNoteVisible] = useState(false);
  const BaseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [generatedLink, setGeneratedLink] = useState("");
  const linkInputRef = useRef(null);
  const { user } = useAuthContext();
  const [documentId, setDocumentId] = useState("");

  // Function to show a SweetAlert2 success notification
  const showSuccessNotification = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
  };

  // Function to show a SweetAlert2 error notification
  const showErrorNotification = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  };

  const handleCreateNote = async () => {
    try {
      // Generate the document ID conditionally based on user existence
      const docId = user ? documentId.replace(/[^a-zA-Z0-9-]/g, "") : "";

      const docRef = await addDoc(collection(firestore, "notes"), {
        message: note,
      });

      const noteId = docId || docRef.id; // Use custom or auto-generated document ID
      setGeneratedLink(`${BaseURL}/hidden/${noteId}`);
      showSuccessNotification("Note created successfully!");
      setIsNoteVisible(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      showErrorNotification("Error creating note.");
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div className="p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-1">Create a Secret Note</h1>
          <p className="text-gray-600 text-xs mb-4">For custom links, please ensure that the length of your page link exceeds 16 characters.</p>
          {user && (
            <div className="mb-4 flex md:flex-row flex-col gap-1 items-center justify-center">
              <input
                type="text"
                className="md:w-min w-full bg-transparent outline-none border-none py-2 px-4"
                placeholder="Enter The Page Name /my-page-name"
                value="locknotes.io/hidden/"
                readOnly
              />
              <input
                type="text"
                className="w-full bg-transparent backdrop-blur-md rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-500 dark:text-gray-200 py-2 px-4"
                placeholder="my-page-name"
                value={documentId}
                onChange={(e) => setDocumentId(e.target.value)}
              />
            </div>
          )}
          <textarea
            className="w-full bg-transparent backdrop-blur-md rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-500 dark:text-gray-200 py-2 px-4 resize-none mb-4"
            placeholder="Write your secret note here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows="6"
          ></textarea>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-200"
            onClick={handleCreateNote}
          >
            Create Note
          </button>
          {isNoteVisible && (
            <div className="mt-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Your secret note link:
              </p>
              <div className="flex flex-row gap-1 items-center justify-center w-full">
                <input
                  type="text"
                  className="w-full p-4 outline-none border-gray-100 bg-transparent"
                  readOnly
                  value={generatedLink}
                  ref={linkInputRef}
                />
                <IconButton
                  onClick={() => {
                    if (linkInputRef.current) {
                      linkInputRef.current.select();
                      document.execCommand("copy");
                      linkInputRef.current.setSelectionRange(0, 0);
                      showSuccessNotification("Link copied to clipboard!");
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
