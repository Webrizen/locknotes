"use client";
import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export default function ReadSecretNote({ params }) {
  const firestore = getFirestore();
  const [note, setNote] = useState("Reading...");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const noteDocRef = doc(firestore, "notes", params.id);
        const noteDocSnapshot = await getDoc(noteDocRef);

        if (noteDocSnapshot.exists()) {
          const noteData = noteDocSnapshot.data();
          setNote(noteData.message);

          // Delete the note immediately after reading it
          await deleteDoc(noteDocRef);
        } else {
          console.error("Note not found.");
          Swal.fire({
            icon: "error",
            title: "Note not found",
            text: "The requested note does not exist.",
          });
        }
      } catch (error) {
        console.error("Error fetching or deleting note: ", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error fetching or deleting note.",
        });
      }
    };

    fetchNote();
  }, [firestore, params.id]);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div className="p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">Read a Secret Note</h1>
          <textarea
            className="w-full bg-transparent backdrop-blur-md rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-500 dark:text-gray-200 py-2 px-4 resize-none mb-4"
            placeholder="Read your secret note here..."
            rows="6"
            value={note}
            readOnly
          ></textarea>
        </div>
      </section>
    </>
  );
}
