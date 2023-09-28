import React from "react";
import MainHome from "@/components/MainHome";
import Hero from "@/assets/hero.png";
import blogImage1 from "@/assets/1.png";
import blogImage2 from "@/assets/2.png";
import blogImage3 from "@/assets/3.png";
import Image from "next/image";

export const metadata = {
  title: 'LockNotes | A Secure and Easy Way to Share Self-Destructing Notes',
  description: "LockNotes is your secure platform for sharing self-destructing notes. Protect your information with our easy-to-use service."
}

export default function Home() {
  return (
    <>
      <MainHome />
      <section className="mb-32">
        <div
          className="block container mx-auto rounded-lg sm:bg-[rgba(225,225,225,0.2)] md:bg-[rgba(225,225,225,0.2)] bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="flex flex-wrap items-center">
            <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <Image src={Hero} alt="Locknotes Helps You Redirect Clients"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12 sm:text-left md:text-left text-center">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-4 sm:text-5xl md:text-4xl text-3xl font-bold">
                  Tired of Paying High Commissions on Freelancing Platforms?
                </h2>
                <p className="mb-6 flex items-center md:justify-normal sm:justify-normal justify-center font-bold uppercase text-yellow-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-2 h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                  Safely Redirect Your Clients.
                </p>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  Are you feeling overwhelmed by the high fees and commissions charged by freelancing platforms? LockNotes offers you a solution to keep more of your hard-earned money while maintaining confidentiality with your clients.
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Our platform allows you to securely communicate and share project details with your clients while avoiding excessive fees. Say goodbye to the middleman and regain control of your freelance business. With LockNotes, you can focus on what you do best while ensuring your clients' privacy and security.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="mb-32">
        <div className="container mx-auto p-3">
          <h2 className="mb-16 text-center text-5xl font-bold">Latest Articles</h2>

          <div className="mb-16 flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <Image src={blogImage1} className="w-full" alt="Louvre" />
                <span>
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </span>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold">Unlocking Freelancer Freedom!</h3>
              <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" className="mr-2 h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
                freelancing
              </div>
              <p className="mb-6 text-sm text-gray-500">
                Published <u>14.07.2023</u> by
                <span> Arshahdul Ahmed</span>
              </p>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                Are you tired of giving away a significant chunk of your earnings to freelancing platforms? The constant deductions from your hard-earned income can be exhausting. We understand your frustration, and that's why LockNotes is here to help.
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                LockNotes empowers freelancers to confidentially redirect their clients and keep more of their earnings. With our secure platform, you can communicate directly with your clients while avoiding hefty commissions. Say goodbye to middlemen and hello to financial freedom. Your journey to freelancer independence starts here.
              </p>
            </div>
          </div>

          <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <Image src={blogImage2} className="w-full" alt="Louvre" />
                <span>
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </span>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
              <h3 className="mb-4 text-2xl font-bold">What's New with LockNotes?</h3>
              <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" className="mr-2 h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
                Features
              </div>
              <p className="mb-6 text-sm text-gray-500">
                Published <u>20.09.2023</u> by
                <span> Arshahdul Ahmed</span>
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                We are excited to share some groundbreaking updates and features that have recently been introduced to LockNotes, making your experience even more secure and convenient. At LockNotes, we take your security seriously. That's why we've implemented advanced security measures to ensure that your confidential notes are protected like never before. Our end-to-end encryption and multi-layered security protocols provide you with peace of mind when sharing sensitive information. We believe that user experience is paramount, and we've made significant improvements to our platform to enhance your journey with LockNotes. The user interface has been streamlined, making it easier than ever to create, share, and manage self-destructing notes. Stay in the loop with our real-time notification feature.
              </p>

            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <Image src={blogImage3} className="w-full" alt="Louvre" />
                <span>
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </span>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold">LockNotes V1.0 Is Now Live!</h3>
              <div className="mb-4 flex items-center text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" className="mr-2 h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                Launching
              </div>
              <p className="mb-6 text-sm text-gray-500">
                Published <u>10.08.2023</u> by
                <span> Arshahdul Ahmed</span>
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                We are thrilled to announce a significant milestone in our journey: LockNotes V1.0 is officially live and ready to empower you with secure and easy self-destructing note sharing!
                <br /><br />
                At LockNotes, we've been working tirelessly to create a platform that ensures the utmost security for your sensitive information while maintaining a user-friendly experience. With the launch of LockNotes V1.0, we've achieved just that. LockNotes is the solution you've been waiting for to protect your information without the hassle of complex encryption tools. Whether you need to share confidential business details, personal messages, or important documents, LockNotes ensures that your data remains secure and private.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}