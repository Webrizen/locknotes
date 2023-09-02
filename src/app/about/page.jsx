import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      <section className="py-12 min-h-screen flex flex-col justify-center items-center text-center ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg shadow-2xl p-6 flex flex-col gap-2">
                <Image
                  src="https://cdn.truelancer.com/user-picture/2291453-64bde53e0a49b.jpg"
                  alt="Arshahdul Ahmed"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                  width={200}
                  height={200}
                />
                <h3 className="text-xl font-semibold">Arshahdul Ahmed</h3>
                <span className="text-gray-600">CTO & Founder</span>
                <p>
                  Meet Arshahdul Ahmed, a 17-year-old web wizard with a passion
                  for technology. As an experienced Full Stack Developer,
                  Arshahdul has navigated diverse landscapes, creating seamless
                  experiences with Next.js, MERN Stack, and the enchantment of
                  Tailwind CSS. But his curiosity doesn't stop there. Arshahdul
                  explores AI & ML, adding an exciting layer of intelligence to
                  his creations. He's a versatile developer, from crafting
                  eye-catching designs to mastering PHP, WordPress, and APIs.
                  Arshahdul has conquered the wild web with platforms like
                  Sanity.io, Firebase, Supabase, and AWS. Collaboration is where
                  he thrives, turning lines of code into collaborative
                  masterpieces. Join him on a journey of turning ideas into
                  reality, one innovation at a time!
                </p>
              </div>
              <div className="rounded-lg shadow-2xl p-6 flex flex-col gap-2">
                <Image
                  src="https://cdn.truelancer.com/user-picture/2281329-64ae8cd501d65.jpg"
                  alt="Harshit Jaiswal"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                  width={200}
                  height={200}
                />
                <h3 className="text-xl font-semibold">Harshit Jaiswal</h3>
                <span className="text-gray-600">CEO & Co-Founder</span>
                <p>
                  Introducing Harshit Jaiswal, a 21-year-old Website Developer
                  and App Developer. His passion lies in WordPress development,
                  aiming to understand clients' requirements precisely and
                  deliver extraordinary results. Karan specializes in designing
                  high-quality WordPress websites with mobile responsiveness.
                  His services include content upload, speed optimization,
                  SEO-friendly design, and even basic logo design if needed.
                  Karan guarantees 100% client satisfaction and quality, making
                  it his top priority. He's skilled in various niches, from
                  blogs and businesses to e-commerce, photography, health, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
              Tech Stack - Special Thanks❤️
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
              LockNotes is powered by Next.js 13 and Firebase. We rely on some
              open-source libraries and premium technologies to provide a secure and
              efficient platform for our users.
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
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Cloud Database & Authentication
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Firebase provides the backbone for our cloud database,
                    enabling real-time data syncing and secure storage.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="https://firebase.google.com" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Full Stack Production
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Next.js 13 powers our frontend & Backend, delivering blazing-fast
                    performance and a smooth user experience.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="https://nextjs.org/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Design Framework
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Tailwind CSS facilitates our design process, ensuring
                    beautiful and responsive interfaces.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="https://tailwindcss.com" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  User Notifications
                  </h1>
                  <p className="leading-relaxed mb-3">
                  SweetAlert2 adds delightful notifications and alerts to
                    enhance user interactions.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="https://sweetalert2.github.io/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Icon Library
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Heroicons provides a collection of high-quality icons to
                    enhance our application's visuals.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="https://heroicons.com/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Hosting Platform
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Vercel ensures a seamless and reliable hosting environment
                    for LockNotes.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="https://vercel.com/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
