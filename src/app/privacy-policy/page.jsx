import React from 'react';

export default function page() {
   const NewDate = new Date().toLocaleDateString(); 
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-prose mx-auto">
      <h1 className="text-3xl font-semibold">
        Privacy Policy
      </h1>
      <p className="text-lg  mt-2">
        Effective Date: {NewDate}
      </p>
      <p className=" mt-4">
        Welcome to LockNotes. At LockNotes, we respect your privacy and are
        committed to protecting your personal information. This Privacy Policy
        is designed to help you understand how we collect, use, disclose, and
        safeguard your personal information. By accessing or using our
        services, you consent to the practices described in this Privacy
        Policy.
      </p>

      <h2 className="text-xl font-semibold text-gray-500 mt-6">
        Information We Collect
      </h2>
      <p className=" mt-2">
        LockNotes may collect the following types of information from and
        about you:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li className="">
          Personal Information: We may collect personal information such as
          your name, email address, postal address, phone number, and
          authentication credentials.
        </li>
        <li className="">
          Usage Information: We automatically collect information about how you
          use our services, including your interaction with our website and
          application, device information, IP address, and browser type.
        </li>
        <li className="">
          Location Information: With your consent, we may collect information
          about your precise or approximate location based on your device
          settings.
        </li>
        {/* Add more categories as needed... */}
      </ul>

      <h2 className="text-xl font-semibold text-gray-500 mt-6">
        How We Use Your Information
      </h2>
      <p className=" mt-2">
        We may use the information we collect for various purposes,
        including:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li className="">
          To provide, maintain, and improve our services.
        </li>
        <li className="">
          To personalize your experience and provide content and features that
          are most relevant to you.
        </li>
        <li className="">
          To respond to your requests, comments, or questions.
        </li>
        <li className="">
          To send you important information, such as updates, security alerts,
          and administrative messages.
        </li>
        {/* Continue with more purposes... */}
      </ul>

      <h2 className="text-xl font-semibold text-gray-500 mt-6">
        How We Share Your Information
      </h2>
      <p className=" mt-2">
        We may share your information with third parties in the following
        circumstances:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li className="">
          With your consent.
        </li>
        <li className="">
          To comply with legal obligations or protect our rights and interests.
        </li>
        <li className="">
          With service providers and business partners who assist us in
          delivering our services.
        </li>
        <li className="">
          In connection with a merger, acquisition, or sale of all or part of
          our company.
        </li>
      </ul>

      
      <h2 className="text-xl font-semibold text-gray-500 mt-6">
        Your Rights and Choices
      </h2>
      <p className=" mt-2">
        You have certain rights and choices regarding your personal
        information. These rights may include the right to access, correct,
        delete, or restrict the processing of your data. To exercise these
        rights, please contact us at <a href="mailto:vijethasoftwaresols@gmail.com">vijethasoftwaresols@gmail.com</a>.
      </p>

      <h2 className="text-xl font-semibold text-gray-500 mt-6">
        Contact Us
      </h2>
      <p className=" mt-2">
        If you have any questions about our Privacy Policy or how we handle
        your data, please contact us at <a href="mailto:vijethasoftwaresols@gmail.com">vijethasoftwaresols@gmail.com</a>.
      </p>
    </div>
  </div>
  );
}
