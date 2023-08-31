"use client";
import Image from 'next/image'
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <section className={`hero h-screen relative`}>
      <div className="grid grid-cols-4 absolute inset-0 -z-10 w-10/12 h-4/5 m-auto">
        {[...Array(16)].map((_, index) => (
          <div
            key={index}
            className="bg-transparent bg-opacity-25 opacity-5 border border-dashed border-gray-50"
          ></div>
        ))}
      </div>
      <div className="container flex flex-col justify-center items-center h-full mx-auto text-center py-20 relative z-10">
        <h1 className="font-bold text-7xl bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
          Encrypt and Self-Destruct Your Notes
        </h1>
        <p className="text-lg text-white mb-8 mt-8">
          LockNotes is a web app that lets you create and share notes that are encrypted and self-destructing. You can use LockNotes to send sensitive information, such as passwords, bank details, or confidential messages, without worrying about anyone else accessing them. LockNotes uses end-to-end encryption to ensure that only you and the intended recipient can read the notes.
        </p>
        <div className='w-full flex flex-row justify-center gap-2 items-center whitespace-nowrap'>
          <Button>
            Get Started
          </Button>
          <Button variant='text' className='text-white border-1 border-gray-100'>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}