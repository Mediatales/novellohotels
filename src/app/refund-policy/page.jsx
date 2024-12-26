import React from "react";
import { FaCalendarTimes, FaMoneyBillWave } from "react-icons/fa";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="flex flex-col justify-center items-center w-[90%] mx-auto py-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 mt-24">Refund Policy</h1>

        <p className="text-center text-lg text-gray-700 mb-10">
          At Novello Hotels, we aim to provide clarity and transparency regarding cancellations and refunds. Below is our policy regarding booking cancellations and associated charges.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaCalendarTimes className="text-blue-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Cancellation Between 15 Days to 7 Days</h2>
            </div>
            <p className="text-gray-600">
              If you cancel your booking between 15 days and 7 days before your check-in date, 50% of the total billing amount will be charged.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FaMoneyBillWave className="text-red-500 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">Cancellation in Less Than 7 Days</h2>
            </div>
            <p className="text-gray-600">
              If you cancel your booking less than 7 days before your check-in date, the total booking amount will be charged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
