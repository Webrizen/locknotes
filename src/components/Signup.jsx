"use client";
import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import signUp from "@/firebase/auth/Signup";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Signup() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      console.log(error);
    } else {
      setOpen(true);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" className="text-center">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-center">
        Enter your details to register.
      </Typography>
      {!open && (
        <form
          className="mt-8 mb-2 w-full max-w-screen-lg sm:w-full"
          onSubmit={handleForm}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              size="lg"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <Link
                  href="/legal"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth type="submit">
            Register
          </Button>
        </form>
      )}
      <Alert
        open={open}
        className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946] mt-3"
        icon={<Icon />}
        onClose={() => setOpen(false)}
      >
        <Typography variant="h5" color="white">
          Success
        </Typography>
        <Typography color="white" className="mt-2 mb-2 font-normal">
          {`Your account has been created successfully ${name}. You can now use the free
          custom lock note link feature to protect your notes with passwords and
          link them to other apps or websites. Have a nice day! If you ever want
          to delete your locknotes account, please send an email to our support
          team with ‘Account Delete Request’ as the subject line.`}
        </Typography>
        <Link href="/"><Button>Go Home</Button></Link>
      </Alert>
    </Card>
  );
}
