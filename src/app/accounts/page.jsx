import { AccountsTabs } from '@/components/AccountsTabs';
import React from 'react';

export const metadata = {
  title: `Accounts | LockNotes - Manage Your Accounts`,
  description: `Manage your LockNotes account settings. Update your profile, change your password, and customize your LockNotes experience with ease.`,
}

export default function page() {
  return (
    <>
     <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 bg-gradient-to-r from-blue-800 via-blue-300 to-cyan-100 bg-clip-text text-transparent">Accounts</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">One Account, Endless Security with LockNotes.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <AccountsTabs />
    </div>
  </div>
</section> 
    </>
  )
}
