"use client";
import { Switch } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/locknotes.png";
 
const currentYear = new Date().getFullYear();
 
export function Footer() {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-600">
      <Image src={Logo} alt="LockNotes" className="w-10 h-10 mix-blend-screen" />
      <span className="ml-3 text-xl">LockNotes</span>
    </Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {currentYear} LockNotes —
      <a href="https://twitter.com/Arshahdul_Ahmed" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Arshahdul_Ahmed</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <span className="ml-3 text-gray-500">
        <Switch label="Switch Theme" ripple={true} />
      </span>
    </span>
  </div>
</footer>
  );
}