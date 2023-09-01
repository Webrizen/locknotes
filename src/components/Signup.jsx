"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import firebase_app from "@/firebase/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export function Signup() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" className="text-center">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-center">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-full">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Register
        </Button>
      </form>
    </Card>
  );
}
