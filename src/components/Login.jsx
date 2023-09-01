"use client";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function Login() {
    return (
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-center">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Enter your details to Login.
        </Typography>
        <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-full">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" required />
            <Input type="password" size="lg" label="Password" required />
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
          <Button className="mt-6" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    );
  }