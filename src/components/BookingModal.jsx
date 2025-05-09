// "use client";
// import { React, useState } from "react";
// import Script from "next/script";

// const BookingModal = ({ room, onClose }) => {
//   const [amount, setAmount] = useState("");
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [orderId, setOrderId] = useState("");

//   const createOrder = async () => {
//     try {
//       const res = await fetch("/api/createOrder", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount: Number(amount) * 100 }),
//       });

//       const data = await res.json();

//       const paymentData = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: Number(amount) * 100, // Razorpay expects amount in paise
//         currency: "INR",
//         order_id: data.id,
//         name: "Room Booking",
//         description: `Booking for ${room?.name || "Room"}`,
//         handler: async function (response) {
//           console.log("Payment successful:", response);
//           // Generate a random order ID after successful payment
//           const randomOrderId = `N10${Math.floor(Math.random() * 100)}`;

//           setOrderId(randomOrderId);
//           setPaymentSuccess(true); // Trigger the success modal
//         },
//         prefill: {
//           name: "", // Add user name if available
//           email: "", // Add user email if available
//         },
//         theme: {
//           color: "#9A3D50",
//         },
//       };

//       const payment = new window.Razorpay(paymentData);
//       payment.open();
//     } catch (error) {
//       console.error("Error creating order:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   const closeSuccessModal = () => {
//     setPaymentSuccess(false);
//     setOrderId(""); // Reset the order ID
//     onClose(); // Close the booking modal
//   };

//   return (
//     <div>
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <Script
//           src="https://checkout.razorpay.com/v1/checkout.js"
//           strategy="lazyOnload"
//         />
//         <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 relative">
//           <button
//             className="absolute top-2 right-2 text-gray-500 hover:text-black"
//             onClick={onClose}
//           >
//             &times;
//           </button>
//           <div className="flex flex-col gap-4">
//             <input
//               type="number"
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring focus:ring-[#9A3D50]"
//             />
//             <button
//               onClick={createOrder}
//               className="bg-[#9A3D50] hover:bg-[#872D42] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Payment Success Modal */}
//       {paymentSuccess && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-black"
//               onClick={closeSuccessModal}
//             >
//               &times;
//             </button>
//             <div className="flex flex-col items-center">
//               <h2 className="text-2xl font-semibold text-center text-green-600">
//                 Your booking is confirmed!
//               </h2>
//               <p className="mt-4 text-lg">
//                 Your order ID is: <span className="font-semibold">{orderId}</span>
//               </p>
//               <button
//                 onClick={closeSuccessModal}
//                 className="bg-[#9A3D50] hover:bg-[#872D42] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md mt-6"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingModal;
