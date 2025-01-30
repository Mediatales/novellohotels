"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchRooms } from "../../lib/apis";

const RoomsPage = () => {
  // const rooms = [
  //   {
  //     id: 1,
  //     name: "Deluxe Room",
  //     description: "Indulge in luxury at our Deluxe Rooms in the heart of Mussoorie.",
  //     price: 3000,
  //     status: "Available",
  //     guests: 2,
  //     bed: 1,
  //     image: "./assets/Homepic/room1.png",
  //     link: "/rooms/deluxe",
  //   },
  //   {
  //     id: 2,
  //     name: "Executive Room with Balcony",
  //     description: "Indulge in luxury at our Deluxe Rooms in the heart of Mussoorie.",
  //     price: 4000,
  //     status: "Available",
  //     guests: 3,
  //     bed: 1,
  //     image: "./assets/Homepic/room2.png",
  //     link: "/rooms/executive-balcony",
  //   },
  //   {
  //     id: 3,
  //     name: "Executive Room with Mountain View",
  //     description: "Indulge in luxury at our Deluxe Rooms in the heart of Mussoorie.",
  //     price: 6000,
  //     status: "Available",
  //     guests: 2,
  //     bed: 1,
  //     image: "./assets/Homepic/room3.png",
  //     link: "/rooms/executive-mountain",
  //   },
  // ];

  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const data = await fetchRooms();
        console.log("rooms data", data?.room)
        setAllRooms(data?.room);
      } catch (err) {
        setError("Failed to fetch users.");
      }
    };

    getRooms();
  }, []);


  return (
    <div>
      <div className="relative w-full">
        <img
          src="./assets/rooms/roomimg.png"
          alt="Rooms Designed for Your Comfort"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Rooms Designed for Your Comfort
          </h1>
        </div>
      </div>

      <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="border rounded-lg shadow-lg overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{room.description}</p>
                <p className="text-lg font-semibold text-[#9A3D50] mb-4">
                  ₹ {room.price} / Night
                </p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>
                    Status: <span className="text-green-600">{room.status}</span>
                  </p>
                  <p>Guests: {room.guests}</p>
                  <p>Bed: {room.bed}</p>
                </div>
                <div className="flex justify-between items-center">
                  <Link href={room.link}>
                    <button

                      className="bg-[#9A3D50] text-white py-2 px-4 rounded hover:bg-[#9A3D50]/80"
                    >
                      Book Now
                    </button>
                  </Link>
                  <Link href={room.link} className="text-[#9A3D50] hover:underline">
                    View more &gt;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allRooms.map((room) => (
            <div key={room.id} className="border rounded-lg shadow-lg overflow-hidden">
              <img
                src={room?.roomImage[0]}
                alt={room?.roomName}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{room?.roomName}</h3>
                <p className="text-sm text-gray-600 mb-2">{room?.description}</p>
                <p className="text-lg font-semibold text-[#9A3D50] mb-4">
                  ₹ {room?.rate} / Night
                </p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>
                    Status: <span className="text-green-600">{room?.roomStatus}</span>
                  </p>
                  <p>Guests: {room?.guestCount}</p>
                  <p>Bed: {room?.bedCount}</p>
                </div>
                <div className="flex justify-between items-center">
                  <Link href={`/rooms/${room?.slug}`}>
                    <button

                      className="bg-[#9A3D50] text-white py-2 px-4 rounded hover:bg-[#9A3D50]/80"
                    >
                      Book Now
                    </button>
                  </Link>
                  <Link href={`/rooms/${room?.slug}`} className="text-[#9A3D50] hover:underline">
                    View more &gt;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default RoomsPage;
