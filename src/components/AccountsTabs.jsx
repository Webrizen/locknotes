"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Alert,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Signup } from "@/components/Signup";
import { Login } from "@/components/Login";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import firebase_app from "@/firebase/config";
import { getAuth, signOut } from "firebase/auth";

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

export function AccountsTabs() {
  const { user } = useAuthContext();
  const data = [
    {
      label: "Login",
      value: "login",
      desc: <Login />,
    },
    {
      label: "Signup",
      value: "signup",
      desc: <Signup />,
    },
  ];
  // Function to handle logout
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      alert("Error")
      console.error("Error signing out: ", error);
    }
  };
  if (!user) {
    return (
      <Tabs id="custom-animation" value="login">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  } else {
    return(
      <>
      <Alert
        className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946] mt-3"
        icon={<Icon />}
      >
        <Typography variant="h5">
          Success
        </Typography>
        <Typography className="mt-2 mb-2 font-normal">
          {`Your account has been created successfully. You can now use the free
          custom lock note link feature to protect your notes with passwords and
          link them to other apps or websites. Have a nice day! If you ever want
          to delete your locknotes account, please send an email to our support
          team with ‘Account Delete Request’ as the subject line.`}
        </Typography>
        <Button onClick={handleLogout}>Logout</Button>
      </Alert>
      </>
    )
  }
}
