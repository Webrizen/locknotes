"use client";
import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import signIn from "@/firebase/auth/Signin";
import { useRouter } from "next/navigation";

export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      alert("Sorry, it seems like there's some problem. please check browser console for more info!");
      console.log(error);
    }
    return router.push("/");
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" className="text-center">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-center">
        Enter your details to Login.
      </Typography>
      <form
        className="mt-8 mb-2 w-full max-w-screen-lg sm:w-full"
        onSubmit={handleForm}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            size="lg"
            label="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Keep me login in future
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Card>
  );
}
