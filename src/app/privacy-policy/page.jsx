import React from "react";
import { FaUserShield, FaInfoCircle, FaUserAlt, FaShareAlt, FaUserCheck, FaEdit } from "react-icons/fa";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="flex flex-col justify-center items-center w-[90%] mx-auto py-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 mt-24">Privacy Policy</h1>

        <p className="text-center text-lg text-gray-700 mb-10">
          At Novello Hotels, we are committed to safeguarding your personal information and respecting your privacy. This Privacy Policy explains
          how we collect, use, and protect your personal data when you use our website. By accessing and using our website, you agree to the terms
          of this Privacy Policy.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaUserAlt className="text-blue-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Collection of Personal Information</h2>
            </div>
            <p className="text-gray-600">
              We may collect personal information from you when you make a reservation, sign up for our loyalty program, subscribe to our newsletter,
              or otherwise interact with our website. This information may include your name, email address, phone number, postal address, credit
              card information, and other details relevant to your stay or the services you request.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaInfoCircle className="text-green-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Use of Personal Information</h2>
            </div>
            <p className="text-gray-600">
              We use your personal information to provide you with the services you request, such as making a reservation or responding to your
              inquiries. We may also use your information to personalize your experience, send you promotional materials, improve our website and
              services, and for other legitimate business purposes.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaShareAlt className="text-purple-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Sharing of Personal Information</h2>
            </div>
            <p className="text-gray-600">
              We may share your personal information with third-party service providers who help us provide our services, such as payment processors,
              marketing agencies, and IT support companies. We may also share your information with government authorities or law enforcement
              agencies as required by law.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaUserCheck className="text-teal-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Your Rights</h2>
            </div>
            <p className="text-gray-600">
              You have the right to access, correct, or delete the personal information that we hold. You may also have the right to object to or
              restrict our use of your information or to request that we provide your information to you or to a third party in a structured,
              machine-readable format. To exercise these rights, please contact us using the contact information provided below.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaEdit className="text-orange-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Changes to this Privacy Policy</h2>
            </div>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time by posting a revised version on our website. Your continued use of our website after
              any changes to this Privacy Policy will constitute your acceptance of the changes.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaUserShield className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy or our use of your personal information, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
