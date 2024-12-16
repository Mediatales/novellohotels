"use client";
import React, { useState } from "react";
import About from "@/components/About";
import Link from "next/link";
import Rooms from "@/components/Rooms";
import TestimonialCard from "@/components/TestimonalCard";
import Contact from "@/components/Contact";

const Page = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  return (
    <div>
      <div>
        <img src="./assets/Homepic/bghome.png" alt="" className="w-full" />
      </div>
      {/* checkavailaibility  before div*/}

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-gray-100">
      {/* Date Input - Start Date */}
      <div className="w-full md:w-1/4">
        <label className="block mb-1 font-semibold">Check-in</label>
        <input
          type="date"
          defaultValue="2024-12-25"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Date Input - End Date */}
      <div className="w-full md:w-1/4">
        <label className="block mb-1 font-semibold">Check-out</label>
        <input
          type="date"
          defaultValue="2025-01-02"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Dropdown Input */}
      <div className="relative w-full md:w-1/4">
        <label className="block mb-1 font-semibold">Guests & Rooms</label>
        <button
          onClick={toggleDropdown}
          className="w-full px-3 py-2 border rounded flex items-center justify-between"
        >
          {adults} Adults - {children} Children - {rooms} Room
          <span className="ml-2">&#9660;</span>
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 bg-white border mt-1 p-3 w-full rounded shadow-md">
            {/* Adults */}
            <div className="flex justify-between items-center mb-2">
              <span>Adults</span>
              <div className="flex items-center">
                <button
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="px-2 text-lg text-gray-500"
                >
                  -
                </button>
                <span className="px-3">{adults}</span>
                <button
                  onClick={() => setAdults(adults + 1)}
                  className="px-2 text-lg text-gray-500"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center mb-2">
              <span>Children</span>
              <div className="flex items-center">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="px-2 text-lg text-gray-500"
                >
                  -
                </button>
                <span className="px-3">{children}</span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="px-2 text-lg text-gray-500"
                >
                  +
                </button>
              </div>
            </div>

            {/* Rooms */}
            <div className="flex justify-between items-center">
              <span>Rooms</span>
              <div className="flex items-center">
                <button
                  onClick={() => setRooms(Math.max(1, rooms - 1))}
                  className="px-2 text-lg text-gray-500"
                >
                  -
                </button>
                <span className="px-3">{rooms}</span>
                <button
                  onClick={() => setRooms(rooms + 1)}
                  className="px-2 text-lg text-gray-500"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Check Availability Button */}
      <div className="w-full md:w-1/4 mt-7">
        <Link href="/rooms">
        <button className="w-full bg-[#AB4459] text-white font-semibold px-4 py-2 rounded hover:bg-red-700">
          Check Availability
        </button>
        </Link>
      </div>
    </div>

      {/* Courtesies */}
      <div className="py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          Our <span className="text-[#9A3D50]">Courtesies</span>
        </h1>
        <div className="flex flex-col md:flex-row mx-auto items-center justify-evenly mt-10 space-y-6 md:space-y-0">
          <div className="relative">
            <img
              src="./assets/Homepic/pic1.png"
              alt="Wifi and Internet"
              className="rounded-lg shadow-lg w-80 md:w-96"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-lg font-semibold px-4 py-2 rounded">
              Wifi and Internet
            </div>
          </div>
          <div className="relative">
            <img
              src="./assets/Homepic/pic2.png"
              alt="Private Balcony"
              className="rounded-lg shadow-lg w-80 md:w-96"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-lg font-semibold px-4 py-2 rounded">
              Private Balcony
            </div>
          </div>
          <div className="relative">
            <img
              src="./assets/Homepic/pic3.png"
              alt="Comfortable Rooms"
              className="rounded-lg shadow-lg w-80 md:w-96"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-lg font-semibold px-4 py-2 rounded text-center">
              Comfortable Rooms
            </div>
          </div>
        </div>
      </div>

      {/* about */}

      <About />

      {/* travel destinations*/}

      <div className="flex flex-col items-center justify-center mt-6 md:mt-6">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          Beautiful Travel Destination
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {/* Card 1 */}
          <div className="border shadow-lg border-gray-300 rounded-lg w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-12px)]">
            <img
              src="./assets/Homepic/place1.png"
              alt="img"
              className="w-full h-auto rounded-t-lg"
            />
            <p className="font-[open_sans] text-center py-2">
              Top Tibba Trek - Mussoorie
            </p>
          </div>

          {/* Card 2 */}
          <div className="border shadow-lg border-gray-300 rounded-lg w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-12px)]">
            <img
              src="./assets/Homepic/place2.png"
              alt="img"
              className="w-full h-auto rounded-t-lg"
            />
            <p className="font-[open_sans] text-center py-2">
              Top Tibba Trek - Mussoorie
            </p>
          </div>

          {/* Card 3 */}
          <div className="border shadow-lg border-gray-300 rounded-lg w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-12px)]">
            <img
              src="./assets/Homepic/place3.png"
              alt="img"
              className="w-full h-auto rounded-t-lg"
            />
            <p className="font-[open_sans] text-center py-2">
              Top Tibba Trek - Mussoorie
            </p>
          </div>

          {/* Card 4 */}
          <div className="border shadow-lg border-gray-300 rounded-lg w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-12px)]">
            <img
              src="./assets/Homepic/place4.png"
              alt="img"
              className="w-full h-auto rounded-t-lg"
            />
            <p className="font-[open_sans] text-center py-2">
              Top Tibba Trek - Mussoorie
            </p>
          </div>
        </div>
      </div>

      {/* rooms */}
      <Rooms />

      {/* Amenities */}

      <div className="mt-10 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
          Our Best <span className="text-[#9A3D50]">Amenities</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-9 place-items-center">
          <img src="./assets/Amenities/Ameniteies1.png" alt="Amenity 1" />
          <img src="./assets/Amenities/Ameniteies2.png" alt="Amenity 2" />
          <img src="./assets/Amenities/Ameniteies3.png" alt="Amenity 3" />
          <img src="./assets/Amenities/Ameniteies4.png" alt="Amenity 4" />
          <img src="./assets/Amenities/Ameniteies5.png" alt="Amenity 5" />
          <img src="./assets/Amenities/Ameniteies6.png" alt="Amenity 6" />
        </div>
      </div>

      {/* Testimonals */}
      <TestimonialCard />

      {/* contact */}
      <Contact />
    </div>
  );
};

export default Page;
