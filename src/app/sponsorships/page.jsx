import React from 'react';

export const metadata = {
  title: `Unlock Opportunities: Sponsor LockNotes | Secure Note-Sharing Platform`,
  description: `Become a sponsor and unlock opportunities with LockNotes. Join us in supporting a secure note-sharing platform that values your privacy. Partner with us today.`,
}

export default function page() {
  return (
    <>
      <section className="min-h-screen">
      <div className="bg-indigo-500 text-white py-16 pt-24">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">Become a LockNotes Sponsor</h1>
          <p className="mt-2">Join us in creating amazing experiences for our users.</p>
        </div>
      </div>

      <main className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className=" dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Sponsor LockNotes?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              LockNotes is committed to delivering top-notch note-taking experiences to our users. By sponsoring LockNotes, you'll be supporting the development of innovative features and helping us grow. Here's why you should consider becoming a sponsor:
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Reach a large and engaged user base.</li>
              <li>Showcase your brand to tech enthusiasts.</li>
              <li>Collaborate with us on exclusive features.</li>
              <li>Support ongoing improvements to LockNotes.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
            Please be aware that our sponsors will have visibility within our hidden routes. This strategic decision is aimed at maximizing their exposure to a targeted audience. Redirecting traffic to these hidden routes allows sponsors to enjoy increased reach and engagement.
            <br /> <br />
It's important to note that we do not feature sponsors on our homepage. This approach is intentional to maintain optimal website performance and ensure fast loading times.
            </p>
          </section>

          <section className=" dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Sponsorship Tiers</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We offer different sponsorship tiers to suit your needs. Choose the tier that aligns with your goals and budget.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-indigo-500">
                <h3 className="text-lg font-semibold">Bronze Sponsor</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Basic sponsorship with logo placement.</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Price: $500/month</p>
              </div>
              <div className="p-4 rounded-lg border border-indigo-500">
                <h3 className="text-lg font-semibold">Silver Sponsor</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Enhanced sponsorship with featured logo placement.</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Price: $1,000/month</p>
              </div>
              <div className="p-4 rounded-lg border border-indigo-500">
                <h3 className="text-lg font-semibold">Gold Sponsor</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Premium sponsorship with exclusive benefits.</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Price: $2,000/month</p>
              </div>
              <div className="p-4 rounded-lg border border-indigo-500">
                <h3 className="text-lg font-semibold">Platinum Sponsor</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Our highest sponsorship tier with maximum exposure.</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Price: Custom</p>
              </div>
            </div>
          </section>
        </div>

        <section className=" dark:bg-gray-800 p-8 mt-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Interested in sponsoring LockNotes or have questions about our sponsorship opportunities? Please reach out to our team, and we'll be happy to assist you.
          </p>
          <div className="mt-6">
            <a href="mailto:sponsorship@locknotes.in" className="text-indigo-500 hover:underline">
              sponsorship@locknotes.in
            </a>
          </div>
        </section>
      </main>
    </section>
    </>
  )
}
