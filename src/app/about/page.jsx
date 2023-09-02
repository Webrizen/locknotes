import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <section className="py-12 min-h-screen flex flex-col justify-center items-center text-center ">
        <div className="container mx-auto px-4">
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
                  Introducing Harshit Jaiswal, a 21-year-old Website Developer and
                  App Developer. His passion lies in WordPress development,
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
    </>
  );
}
