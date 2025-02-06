"use client";
import React, { useState } from "react";
import Script from "next/script";
import { createBooking } from "@/lib/apis";

const BookingForm = ({ onClose, roomType, roomData }) => {
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
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [amount] = useState(roomData?.rate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const taxRate = 0.12;
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

      const paymentData = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: Math.round(totalAmount * 100),
        currency: "INR",
        order_id: data.id,
        name: roomData?.roomName || "Room",
        description: `Booking for ${roomData?.roomName || "Room"}`,
        handler: async function (response) {
          try {
            // Send booking email
            await fetch("/api/send-email", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: [formData.email, "novelloglobehotels@gmail.com"],
                roomName: roomData?.roomName || "Room",
                orderId: data.id,
                amount: Math.round(totalAmount * 100),
                name: formData.name,
                phone: formData.phone,
                checkInDate: JSON.parse(localStorage.getItem("bookingData"))?.checkIn,
                checkOutDate: JSON.parse(localStorage.getItem("bookingData"))?.checkOut,
                adult: JSON.parse(localStorage.getItem("bookingData"))?.adults,
                children: JSON.parse(localStorage.getItem("bookingData"))?.children,
                roomCount: JSON.parse(localStorage.getItem("bookingData"))?.rooms
              }),
            });

            // Create booking entry
            await createBooking({
              email: formData.email,
              roomName: roomData?.roomName || "Room",
              orderId: data.id,
              amount: Math.round(totalAmount * 100),
              name: formData.name,
              phone: formData.phone,
              checkInDate: JSON.parse(localStorage.getItem("bookingData"))?.checkIn,
              checkOutDate: JSON.parse(localStorage.getItem("bookingData"))?.checkOut,
              adult: JSON.parse(localStorage.getItem("bookingData"))?.adults,
              children: JSON.parse(localStorage.getItem("bookingData"))?.children,
              roomCount: JSON.parse(localStorage.getItem("bookingData"))?.rooms
            });

            setOrderId(data.id);
            setPaymentSuccess(true);
          } catch (error) {
            console.error("Error in payment handler:", error);
            alert("Payment successful but there was an error updating the booking. Please contact support.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#9A3D50",
        },
      };

      const payment = new window.Razorpay(paymentData);
      payment.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const closeSuccessModal = () => {
    setPaymentSuccess(false);
    setOrderId("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      
      {!paymentSuccess ? (
        <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          >
            ✖
          </button>
          <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
          <form onSubmit={handleSubmit}>
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
        </div>
      ) : (
        <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
            onClick={closeSuccessModal}
          >
            ✖
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
      )}
    </div>
  );
};

export default BookingForm;