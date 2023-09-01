"use client";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { Signup } from "@/components/Signup";
import { Login } from "@/components/Login";
   
  export function AccountsTabs() {
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
  }