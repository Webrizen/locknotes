"use client";
import React from "react";
import {
  Button,
  Chip,
} from "@material-tailwind/react";
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
        <h1 className="font-bold md:text-7xl text-5xl dark:bg-gradient-to-r dark:from-white dark:via-gray-300 dark:to-gray-600 dark:bg-clip-text dark:text-transparent">
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
          <Link href="/create"><Button>Get Started</Button></Link>
          <Link href="/about">
          <Button
            variant="text"
            className="dark:text-white border-1 border-gray-100"
          >
            Learn More
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
