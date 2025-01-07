"use client";
import React, { useState } from "react";
import BookingModal from "./BookingModal";

const BookingForm = ({ onClose, roomType }) => {
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
            <form onSubmit={handleProceed}>
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
