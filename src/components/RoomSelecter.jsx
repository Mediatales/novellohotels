// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const DateGuestRoomSelector = ({ roomData }) => {
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [rooms, setRooms] = useState(1);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [checkInDate, setCheckInDate] = useState(new Date());
//   const [checkOutDate, setCheckOutDate] = useState(null);

//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleCheckInChange = (date) => {
//     setCheckInDate(date);
//     // Set the check-out date to be the next day of check-in date
//     const nextDay = new Date(date);
//     nextDay.setDate(nextDay.getDate() + 1);
//     setCheckOutDate(nextDay);
//   };

//   const handleCheckOutChange = (date) => {
//     setCheckOutDate(date);
//   };

//   const disableDates = (date) => {
//     const roomCheckInDate = roomData?.currentCheckIn ? new Date(roomData.currentCheckIn) : null;
//     const roomCheckOutDate = roomData?.currentCheckOut ? new Date(roomData.currentCheckOut) : null;

//     // Disable the check-in and check-out dates of the room
//     if (roomCheckInDate && date.toDateString() === roomCheckInDate.toDateString()) {
//       return true;
//     }
//     if (roomCheckOutDate && date.toDateString() === roomCheckOutDate.toDateString()) {
//       return true;
//     }

//     return false;
//   };

//   return (
//     <div className="w-full mt-3">
//       <div className="space-y-4">
//         {/* Date Inputs Container */}
//         <div className="grid grid-cols-2 gap-3">
//           {/* Check-in Date */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
//             <div className="relative">
//               <DatePicker
//                 selected={checkInDate}
//                 onChange={handleCheckInChange}
//                 minDate={new Date()}
//                 filterDate={(date) => !disableDates(date)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#AB4459] focus:border-[#AB4459] text-sm"
//                 placeholderText="Select check-in date"
//               />
//             </div>
//           </div>

//           {/* Check-out Date */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
//             <div className="relative">
//               <DatePicker
//                 selected={checkOutDate}
//                 onChange={handleCheckOutChange}
//                 minDate={checkInDate ? new Date(checkInDate).setDate(checkInDate.getDate() + 1) : ""}
//                 filterDate={(date) => !disableDates(date)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#AB4459] focus:border-[#AB4459] text-sm"
//                 placeholderText="Select check-out date"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Guests & Rooms Dropdown */}
//         <div className="relative " ref={dropdownRef}>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Guests & Rooms</label>
//           <button
//             onClick={toggleDropdown}
//             className={`w-full px-3 py-2 bg-white border rounded-md text-left flex items-center justify-between text-sm
//               ${dropdownOpen ? 'border-[#AB4459] ring-1 ring-[#AB4459]' : 'border-gray-300 hover:border-gray-400'}`}
//           >
//             <span>{adults} {adults === 1 ? 'Adult' : 'Adults'} - {children} {children === 1 ? 'Child' : 'Children'} - {rooms} {rooms === 1 ? 'Room' : 'Rooms'}</span>
//             <svg
//               className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>

//           {dropdownOpen && (
//             <div className="left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg sm:w-auto">
//               <div className="p-3 space-y-4">
//                 {/* Adults */}
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm font-medium">Adults</span>
//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => setAdults(Math.max(1, adults - 1))}
//                       className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
//                       disabled={adults <= 1}
//                     >
//                       -
//                     </button>
//                     <span className="w-5 text-center text-sm">{adults}</span>
//                     <button
//                       onClick={() => setAdults(Math.min(8, adults + 1))}
//                       className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 {/* Children */}
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm font-medium">Children</span>
//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => setChildren(Math.max(0, children - 1))}
//                       className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
//                       disabled={children <= 0}
//                     >
//                       -
//                     </button>
//                     <span className="w-5 text-center text-sm">{children}</span>
//                     <button
//                       onClick={() => setChildren(Math.min(4, children + 1))}
//                       className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 {/* Room */}
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm font-medium">Room</span>
//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => setRooms(Math.max(1, rooms - 1))}
//                       className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
//                       disabled={rooms <= 1}
//                     >
//                       -
//                     </button>
//                     <span className="w-5 text-center text-sm">{rooms}</span>
//                     <button
//                       onClick={() => setRooms(Math.min(4, rooms + 1))}
//                       className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DateGuestRoomSelector;



"use client";
import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateGuestRoomSelector = ({ roomData }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Set default check-in and check-out dates on mount based on roomData
  useEffect(() => {
    const today = new Date();
    const roomCheckInDate = roomData?.currentCheckIn ? new Date(roomData.currentCheckIn) : null;

    // If today's date is already a check-in date, select the next available date
    if (roomCheckInDate && roomCheckInDate.toDateString() === today.toDateString()) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + 1);  // Set the next day as default
      setCheckInDate(nextDay);
    } else {
      setCheckInDate(today);
    }

    // Calculate the default check-out date
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    setCheckOutDate(nextDay);

  }, [roomData]);

  // Calculate maximum guests and beds based on selected rooms
  const maxGuestsPerRoom = roomData?.guestCount || 2; // Default to 2 guests per room
  const maxBedsPerRoom = roomData?.bedCount || 1; // Default to 1 bed per room
  const maxRooms = 4; // Maximum number of rooms allowed

  const totalMaxGuests = maxGuestsPerRoom * rooms;
  const totalMaxBeds = maxBedsPerRoom * rooms;

  // Ensure adults + children do not exceed totalMaxGuests
  useEffect(() => {
    const totalGuests = adults + children;
    if (totalGuests > totalMaxGuests) {
      const remainingCapacity = totalMaxGuests - adults;
      setChildren(Math.max(0, remainingCapacity));
    }
  }, [rooms, adults, children, totalMaxGuests]);



  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setCheckOutDate(nextDay);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  const disableDates = (date) => {
    const roomCheckInDate = roomData?.currentCheckIn ? new Date(roomData.currentCheckIn) : null;
    const roomCheckOutDate = roomData?.currentCheckOut ? new Date(roomData.currentCheckOut) : null;
    const today = new Date();

    // Disable the check-in and check-out dates of the room
    if (roomCheckInDate && date.toDateString() === roomCheckInDate.toDateString()) {
      return true;
    }
    if (roomCheckOutDate && date.toDateString() === roomCheckOutDate.toDateString()) {
      return true;
    }

    // Disable today's date if it's a check-in date
    if (today.toDateString() === date.toDateString() && roomCheckInDate && today.getTime() === roomCheckInDate.getTime()) {
      return true;
    }

    return false;
  };

  // Add this useEffect to store data in localStorage
  useEffect(() => {
    const bookingData = {
      checkIn: checkInDate,
      checkOut: checkOutDate,
      adults,
      children,
      rooms,
    };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [checkInDate, checkOutDate, adults, children, rooms]);

  return (
    <div className="w-full mt-3">
      <div className="space-y-4">
        {/* Date Inputs Container */}
        <div className="grid grid-cols-2 gap-3">
          {/* Check-in Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
            <div className="relative">
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInChange}
                minDate={new Date()}
                filterDate={(date) => !disableDates(date)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#AB4459] focus:border-[#AB4459] text-sm"
                placeholderText="Select check-in date"
                 dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
            <div className="relative">
              <DatePicker
                selected={checkOutDate}
                onChange={handleCheckOutChange}
                minDate={checkInDate ? new Date(checkInDate).setDate(checkInDate.getDate() + 1) : ""}
                filterDate={(date) => !disableDates(date)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#AB4459] focus:border-[#AB4459] text-sm"
                placeholderText="Select check-out date"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
        </div>

        {/* Guests & Rooms Dropdown */}
        <div className="relative " ref={dropdownRef}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Guests & Rooms</label>
          <button
            onClick={toggleDropdown}
            className={`w-full px-3 py-2 bg-white border rounded-md text-left flex items-center justify-between text-sm
              ${dropdownOpen ? 'border-[#AB4459] ring-1 ring-[#AB4459]' : 'border-gray-300 hover:border-gray-400'}`}
          >
            <span>{adults} {adults === 1 ? 'Adult' : 'Adults'} - {children} {children === 1 ? 'Child' : 'Children'} - {rooms} {rooms === 1 ? 'Room' : 'Rooms'}</span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg sm:w-auto">
              <div className="p-3 space-y-4">
                {/* Adults */}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Adults</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
                      disabled={adults <= 1}
                    >
                      -
                    </button>
                    <span className="w-5 text-center text-sm">{adults}</span>
                    <button
                      onClick={() => setAdults(Math.min(totalMaxGuests - children, adults + 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
                      disabled={adults + children >= totalMaxGuests}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Children</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
                      disabled={children <= 0}
                    >
                      -
                    </button>
                    <span className="w-5 text-center text-sm">{children}</span>
                    <button
                      onClick={() => setChildren(Math.min(totalMaxGuests - adults, children + 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
                      disabled={adults + children >= totalMaxGuests}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Room */}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Room</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
                      disabled={rooms <= 1}
                    >
                      -
                    </button>
                    <span className="w-5 text-center text-sm">{rooms}</span>
                    <button
                      onClick={() => setRooms(Math.min(maxRooms, rooms + 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
                      disabled={rooms >= maxRooms}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateGuestRoomSelector;





