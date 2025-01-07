"use client";
import React, { useState, useRef, useEffect } from "react";

const DateGuestRoomSelector = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date().toISOString().split("T")[0]);
  const [checkOutDate, setCheckOutDate] = useState("");
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleCheckInChange = (e) => {
    const selectedDate = e.target.value;
    setCheckInDate(selectedDate);
    
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCheckOutDate(nextDay.toISOString().split("T")[0]);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  return (
    <div className="w-full mt-3">
      <div className="space-y-4">
        {/* Date Inputs Container */}
        <div className="grid grid-cols-2 gap-3">
          {/* Check-in Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
            <div className="relative">
              <input
                type="date"
                value={checkInDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={handleCheckInChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#AB4459] focus:border-[#AB4459] text-sm"
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
            <div className="relative">
              <input
                type="date"
                value={checkOutDate}
                min={checkInDate ? new Date(new Date(checkInDate).setDate(new Date(checkInDate).getDate() + 1))
                  .toISOString().split("T")[0] : ""}
                onChange={handleCheckOutChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#AB4459] focus:border-[#AB4459] text-sm"
              />
            </div>
          </div>
        </div>

        {/* Guests & Rooms Dropdown */}
        <div className="relative" ref={dropdownRef}>
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
            <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-[9999]">
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
                      onClick={() => setAdults(Math.min(8, adults + 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
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
                      onClick={() => setChildren(Math.min(4, children + 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
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
                      onClick={() => setRooms(Math.min(4, rooms + 1))}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50"
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