"use client";
import React, { useState, useRef } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Textarea,
  Chip,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

export default function MainHome() {
  const firestore = getFirestore();
  const [open, setOpen] = React.useState(false);
  const [noteData, setNoteData] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const linkInputRef = useRef(null);
  const handleOpen = () => setOpen((cur) => !cur);
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

  return (
    <section
      className={`hero min-h-screen flex flex-col items-center justify-center text-center relative`}
    >
      <div className="grid grid-cols-4 absolute inset-0 -z-10 w-10/12 h-4/5 m-auto">
        {[...Array(16)].map((_, index) => (
          <div
            key={index}
            className="bg-transparent bg-opacity-25 opacity-5 border border-dashed border-gray-50"
          ></div>
        ))}
      </div>
      <div className="container flex flex-col justify-center items-center h-full mx-auto text-center py-20 px-4 relative z-10">
        <Chip
          variant="outlined"
          className="rounded-full mb-4 text-blue-500"
          value={<Link href="/accounts">Free custom URL feature.</Link>}
          icon={<Icon />}
        />
        <h1 className="font-bold text-7xl dark:bg-gradient-to-r dark:from-white dark:via-gray-300 dark:to-gray-600 dark:bg-clip-text dark:text-transparent">
          Encrypt and Self-Destruct Your Notes
        </h1>
        <p className="text-lg mb-8 mt-8">
          LockNotes is a web app that lets you create and share notes that are
          encrypted and self-destructing. You can use LockNotes to send
          sensitive information, such as passwords, bank details, or
          confidential messages, without worrying about anyone else accessing
          them. LockNotes uses end-to-end encryption to ensure that only you and
          the intended recipient can read the notes.
        </p>
        <div className="w-full flex flex-row justify-center gap-2 items-center whitespace-nowrap">
          <Button onClick={handleOpen}>Get Started</Button>
          <Button
            variant="text"
            className="dark:text-white border-1 border-gray-100"
          >
            Learn More
          </Button>
        </div>
      </div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none z-10"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Create Note.
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-2">
            <Textarea
              label="Type Your Secret Notes"
              size="lg"
              onChange={(e) => setNoteData(e.target.value)}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={async () => {
                try {
                  const docRef = await addDoc(collection(firestore, "notes"), {
                    message: noteData,
                  });
                  const noteId = docRef.id;
                  setGeneratedLink(
                    `https://locknotes.vercel.app/hidden/${noteId}`
                  );
                  showSuccessNotification("Note created successfully!");
                } catch (error) {
                  console.error("Error adding document: ", error);
                  showErrorNotification("Error creating note.");
                }
              }}
              fullWidth
            >
              Create
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              {generatedLink && (
                <>
                  <input
                    type="text"
                    value={generatedLink}
                    readOnly
                    className="w-full p-4 outline-none border-gray-100"
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
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </IconButton>
                </>
              )}
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </section>
  );
}
