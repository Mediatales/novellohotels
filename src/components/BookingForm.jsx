"use client";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Script from "next/script";
import { createBooking } from "@/lib/apis";

const BookingForm = ({ onClose, roomType, roomData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      valid = false;
    }

    // Validate phone
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleProceed = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsFormVisible(false);  // Hide the form
      setIsModalOpen(true);     // Show the modal
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsFormVisible(true);  // Show the form again if needed
  };

  const [amount, setAmount] = useState(roomData?.rate);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const createOrder = async (e) => {
    e.preventDefault();
    try {

      const taxRate = 0.18;
      const baseAmount = Number(amount);
      const taxAmount = baseAmount * taxRate;
      const totalAmount = baseAmount + taxAmount; 

      const res = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: Math.round(totalAmount * 100) }),
      });

      const data = await res.json();

      console.log("data creating Orders", data)

      

      const paymentData = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: Math.round(totalAmount * 100),
        currency: "INR",
        order_id: data.id,
        name: roomData?.roomName || "Room",
        description: `Booking for ${roomData?.roomName || "Room"}`,
        handler: async function (response) {
          console.log("Payment successful:", response);

          await sendBookingEmail({
            email: formData.email,
            roomName: roomData?.roomName || "Room",
            orderId: data.id,
            amount: Math.round(totalAmount * 100),
            name : formData.name,
            phone : formData.phone

          });

          await createBookingEntry({
            email: formData.email,
            roomName: roomData?.roomName || "Room",
            orderId: data.id,
            amount: Math.round(totalAmount * 100),
            name : formData.name,
            phone : formData.phone,
            checkInDate: JSON.parse(localStorage.getItem("bookingData")).checkIn,
            checkOutDate: JSON.parse(localStorage.getItem("bookingData")).checkOut,
            adult : JSON.parse(localStorage.getItem("bookingData")).adults,
            children : JSON.parse(localStorage.getItem("bookingData")).children,
            roomCount : JSON.parse(localStorage.getItem("bookingData")).rooms
          });

          setOrderId(data.id);
          setPaymentSuccess(true); // Trigger the success modal
        },
        prefill: {
          name: "", // Add user name if available
          email: "", // Add user email if available
        },
        theme: {
          color: "#9A3D50",
        },
      };

      console.log("paymentData", paymentData)

      const payment = new window.Razorpay(paymentData);
      payment.open();

      // Function to send booking email
      async function sendBookingEmail({ email, roomName, orderId, amount , name , phone }) {
        try {
          const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email : [email,"novelloglobehotels@gmail.com"],
              roomName,
              orderId,
              amount,
              name,
              phone
            }),
          });

          // Check if the response is OK (status code 200-299)
          if (!response.ok) {
            const errorResponse = await response.text(); // Read the response as text
            throw new Error(`API Error: ${response.status} - ${errorResponse}`);
          }

          const result = await response.json(); // Parse the JSON response
          console.log("Email sent:", result);
        } catch (error) {
          console.error("Error sending email:", error);
        }
      }

      async function createBookingEntry({ email, roomName, orderId, amount , name , phone , checkInDate , checkOutDate , adult , children , roomCount }) {
        try {
          const response = await createBooking({ email, roomName, orderId, amount , name , phone , checkInDate , checkOutDate , adult , children , roomCount });
          const result = await response.json(); // Parse the JSON response
          console.log("Booking entry created:", result);
        } catch (error) {
          console.error("Error creating booking entry:", error);
        }
      }

    } catch (error) {
      console.error("Error creating order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const closeSuccessModal = () => {
    setPaymentSuccess(false);
    setOrderId(""); // Reset the order ID
    onClose(); // Close the booking modal
  };

  return (
    <div>
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md relative">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
            <form onSubmit={createOrder}>
              <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="lazyOnload"
              />
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                  placeholder="Enter your name"
                  required
                />
                {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                  placeholder="Enter your phone number"
                  required
                />
                {errors.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-[#AB4459] text-white py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Proceed to Pay
              </button>
            </form>

            {/* <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="lazyOnload"
              />
              <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 relative">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-black"
                  onClick={onClose}
                >
                  &times;
                </button>
                <div className="flex flex-col gap-4">
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring focus:ring-[#9A3D50]"
                  />
                  <button
                    onClick={createOrder}
                    className="bg-[#9A3D50] hover:bg-[#872D42] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div> */}

            {paymentSuccess && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 relative">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                    onClick={closeSuccessModal}
                  >
                    &times;
                  </button>
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-center text-green-600">
                      Your booking is confirmed!
                    </h2>
                    <p className="mt-4 text-lg">
                      Your order ID is: <span className="font-semibold">{orderId}</span>
                    </p>
                    <button
                      onClick={closeSuccessModal}
                      className="bg-[#9A3D50] hover:bg-[#872D42] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md mt-6"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}


          </div>
        </div>
      )}

      {isModalOpen && (
        <BookingModal room={{ name: roomType }} onClose={closeModal} />
      )}
    </div>
  );
};

export default BookingForm;
