import Image from "next/image";
import Link from "next/link";
import React from "react";
import jayandra from "@/assets/jayandra.webp";

export const metadata = {
  title: `About LockNotes - Learn More About Our Secure Note Sharing Platform`,
  description: `Discover the story behind LockNotes, a secure and user-friendly platform for sharing self-destructing notes. Learn how we prioritize your data security and confidentiality.`,
};

export default function Page() {
  return (
    <>
      <section className="py-12 min-h-screen flex flex-col justify-center items-center text-center ">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-lg">
              LockNotes is a secure and user-friendly web application designed
              to help you protect and share your sensitive information. Our
              mission is to provide a safe and convenient platform for creating
              and sending self-destructing notes with end-to-end encryption.
            </p>
            <p className="text-lg mt-4">
              Whether you need to share passwords, personal messages, or
              confidential information, LockNotes has you covered. We prioritize
              your privacy and security, ensuring that only you and your
              intended recipient can access the notes you send.
            </p>
            <p className="text-lg mt-4">
              Thank you for choosing LockNotes to safeguard your digital
              communications. If you have any questions or feedback, please
              don't hesitate to{" "}
              <Link href="/contact" className="text-blue-500">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <section class="body-font py-12 min-h-screen flex flex-col justify-center items-center">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 tracking-widest">
              OUR FOUNDERS
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our founders, Arshahdul Ahmed and Jayandra Babu, are the driving
              forces behind LockNotes. With a shared passion for technology and
              a relentless pursuit of innovation, they've crafted a secure and
              user-friendly platform that prioritizes your digital privacy. Get
              to know the wizards behind LockNotes and their remarkable journey
              of turning ideas into reality, one innovation at a time.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image
                  alt="team"
                  class="flex-shrink-0 rounded-3xl w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://cdn.truelancer.com/user-picture/2291453-64bde53e0a49b.jpg"
                  width={200}
                  height={200}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg ">
                    Arshahdul Ahmed
                  </h2>
                  <h3 class="text-gray-500 mb-3">CTO & Founder</h3>
                  <p class="mb-4">
                    Meet Arshahdul Ahmed, a 17-year-old web wizard with a
                    passion for technology. As an experienced Full Stack
                    Developer, Arshahdul has navigated diverse landscapes,
                    creating seamless experiences with Next.js, MERN Stack, and
                    the enchantment of Tailwind CSS. But his curiosity doesn't
                    stop there. Arshahdul explores AI & ML, adding an exciting
                    layer of intelligence to his creations. He's a versatile
                    developer, from crafting eye-catching designs to mastering
                    PHP, WordPress, and APIs. Arshahdul has conquered the wild
                    web with platforms like Sanity.io, Firebase, Supabase, and
                    AWS. Collaboration is where he thrives, turning lines of
                    code into collaborative masterpieces. Join him on a journey
                    of turning ideas into reality, one innovation at a time!
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image
                  alt="team"
                  class="flex-shrink-0 rounded-3xl w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={jayandra}
                  width={200}
                  height={200}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg">Jayandra Babu</h2>
                  <h3 class="text-gray-500 mb-3">CEO & Co-Founder</h3>
                  <p class="mb-4">
                    Introducing Jayandra Babu, Jayandra Babu Pilla is a highly
                    accomplished individual with a distinguished background in
                    the military. Having served in the Navy, he brings valuable
                    leadership skills, discipline, and strategic thinking to the
                    helm of Vijetha Softwares as its CEO. Alongside his military
                    career, he pursued his passion for nautical science, earning
                    a Bachelor's degree in the field. As the CEO, Jayandra's
                    experience in both the military and technology domains
                    enables him to make informed decisions, foster a culture of
                    excellence, and lead the team towards achieving the
                    company's goals with utmost dedication and resilience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
              Tech Stack - Special Thanks❤️
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
              LockNotes is powered by Next.js 13 and Firebase. We rely on some
              open-source libraries and premium technologies to provide a secure
              and efficient platform for our users.
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-600">
              Some of the open-source libraries we use include:
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-contain object-center bg-blue-gray-100"
                  src="/firebase.svg"
                  alt="Firebase"
                  width={0}
                  height={0}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Firebase
                  </h2>
                  <h1 className="title-font text-lg font-medium darK:text-gray-600 mb-3">
                    Cloud Database & Authentication
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Firebase provides the backbone for our cloud database,
                    enabling real-time data syncing and secure storage.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href="https://firebase.google.com"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-contain object-center bg-blue-gray-100 p-6"
                  src="/nextjs.svg"
                  alt="Next.js 13"
                  width={0}
                  height={0}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Next.js
                  </h2>
                  <h1 className="title-font text-lg font-medium darK:text-gray-600 mb-3">
                    Full Stack Production
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Next.js 13 powers our frontend & Backend, delivering
                    blazing-fast performance and a smooth user experience.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link
                      href="https://nextjs.org/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-contain object-center bg-blue-gray-100"
                  src="/tailwind.svg"
                  alt="Tailwind CSS"
                  width={0}
                  height={0}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Tailwind CSS
                  </h2>
                  <h1 className="title-font text-lg font-medium darK:text-gray-600 mb-3">
                    Design Framework
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Tailwind CSS facilitates our design process, ensuring
                    beautiful and responsive interfaces.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href="https://tailwindcss.com"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-contain object-center bg-blue-gray-100 p-6"
                  src="https://raw.githubusercontent.com/sweetalert2/sweetalert2/HEAD/assets/swal2-logo.png"
                  alt="SweetAlert2"
                  width={200}
                  height={200}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    SweetAlert2
                  </h2>
                  <h1 className="title-font text-lg font-medium darK:text-gray-600 mb-3">
                    User Notifications
                  </h1>
                  <p className="leading-relaxed mb-3">
                    SweetAlert2 adds delightful notifications and alerts to
                    enhance user interactions.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href="https://sweetalert2.github.io/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-contain object-center bg-blue-gray-100 p-6"
                  src="https://github.com/tailwindlabs/heroicons/raw/master/.github/logo-dark.svg"
                  alt="Heroicons"
                  width={200}
                  height={200}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Heroicons
                  </h2>
                  <h1 className="title-font text-lg font-medium darK:text-gray-600 mb-3">
                    Icon Library
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Heroicons provides a collection of high-quality icons to
                    enhance our application's visuals.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link
                      href="https://heroicons.com/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-contain object-center bg-blue-gray-100"
                  src="/vercel.svg"
                  alt="Vercel"
                  width={0}
                  height={0}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Vercel
                  </h2>
                  <h1 className="title-font text-lg font-medium darK:text-gray-600 mb-3">
                    Hosting Platform
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Vercel ensures a seamless and reliable hosting environment
                    for LockNotes.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href="https://vercel.com/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
