"use client";
import React from "react";
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
} from "@material-tailwind/react";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
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
      <div className="container flex flex-col justify-center items-center h-full mx-auto text-center py-20 px-4 relative z-10">
        <Chip
          variant="outlined"
          className="rounded-full mb-4"
          value="custom URL feature available with free locknotes account"
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
        className="bg-transparent shadow-none"
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
            <Textarea label="Type Your Secret Notes" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Create
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Your Link Will Be Genrated After Note Creation*
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </section>
  );
}
