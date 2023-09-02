"use client";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { AuthContextProvider } from "@/context/AuthContext";

export default function Appearance({ children }) {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {children}
        <Footer />
      </AuthContextProvider>
    </>
  );
}
