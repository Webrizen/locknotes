"use client";
import React from "react";
import { Button, Chip } from "@material-tailwind/react";
import Link from "next/link";

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
  return (
    <section
      className={`hero flex flex-col items-center justify-center text-center relative`}
    >
      <div className="grid grid-cols-4 absolute inset-0 -z-10 w-10/12 h-4/5 m-auto">
        {[...Array(16)].map((_, index) => (
          <div
            key={index}
            className="bg-transparent bg-opacity-25 opacity-5 border border-dashed border-gray-50"
          ></div>
        ))}
      </div>
      <div className="container flex flex-col justify-center items-center h-full mx-auto text-center sm:py-36 md:py-36 sm:px-4 md:px-4 py-36 relative z-10">
        <Chip
          variant="outlined"
          className="rounded-full mb-4 text-blue-500"
          value={<Link href="/accounts">Free custom URL feature.</Link>}
          icon={<Icon />}
        />
        <h1 className="font-bold md:text-7xl text-5xl dark:bg-gradient-to-r dark:from-white dark:via-gray-300 dark:to-gray-600 dark:bg-clip-text dark:text-transparent">
          Encrypt and Self-Destruct Your Notes
        </h1>
        <p className="text-lg mb-7 mt-8 sm:w-3/4 md:w-3/4">
          LockNotes: Encrypt, Share, Forget. Send sensitive info securely with
          self-destructing notes. Only you and the recipient can read, thanks to
          end-to-end encryption.
        </p>
        <div className="w-full flex flex-row justify-center gap-2 items-center whitespace-nowrap">
          <Link href="/create">
            <Button>Create Note</Button>
          </Link>
          <Link href="/about">
            <Button
              variant="text"
              className="dark:text-white border-1 border-gray-100 text-gray-500"
            >
              About
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
