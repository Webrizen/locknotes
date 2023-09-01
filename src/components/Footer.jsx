"use client";
import React, { useState, useEffect } from "react";
import { Switch } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/locknotes.png";

const currentYear = new Date().getFullYear();

export function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Effect to set the theme based on user's preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  // Update CSS variables based on theme
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty("--foreground-rgb", "255, 255, 255");
      root.style.setProperty("--background-start-rgb", "0, 0, 0");
      root.style.setProperty("--background-end-rgb", "0, 0, 0");
    } else {
      root.style.setProperty("--foreground-rgb", "0, 0, 0");
      root.style.setProperty("--background-start-rgb", "214, 219, 220");
      root.style.setProperty("--background-end-rgb", "255, 255, 255");
    }
  }, [darkMode]);

  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-600">
          <Image src={Logo} alt="LockNotes" className="w-10 h-10" />
          <span className="ml-3 text-xl">LockNotes</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {currentYear} LockNotes —
          <a href="https://twitter.com/Arshahdul_Ahmed" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Arshahdul_Ahmed</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <span className="ml-3 text-gray-500">
            <Switch
              label="Switch Theme"
              ripple={true}
              checked={darkMode}
              onChange={toggleTheme}
            />
          </span>
        </span>
      </div>
    </footer>
  );
}