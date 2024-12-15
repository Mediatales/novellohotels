"use client"
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    const whatsappMessage = `Hello, I am ${name}. My email is ${email}. Message: ${message}`;
    const phone = "918445581177";
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          src="./assets/contact/contact.png"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Your Dream Stay Starts Here
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 px-6 md:px-16 lg:px-32 bg-pink-100">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Details */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Feel Free to Connect, We’ll Be Happy to Assist You
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Address:</strong> Bus Stand, Picture Palace Road, Near
                Kulri, Mussoorie, Uttarakhand, 248179
              </p>
              <p>
                <strong>Email:</strong>{" "}
                thenovellobyhotelevergreen@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 8445581177, +91 8266966987
              </p>
              <p>
                <strong>Working Hours:</strong> Mon - Fri: 9:00AM to 6:00PM,
                Sat - Sun: 8:00AM to 4:00PM
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Your Details
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-pink-600 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-pink-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
