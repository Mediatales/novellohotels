'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import Slider to ensure it's only loaded on the client side
const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] flex items-center justify-center">Loading...</div>
});

// Import CSS for slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Rooms = () => {
  // State to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  // Ensure we only render slider client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Responsive carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Room card component
  const RoomCard = ({ imageSrc, roomType, price }) => (
    <div className="border shadow-md p-4 mx-2 h-full bg-white rounded-lg">
      <img
        src={imageSrc}
        alt={roomType}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <p className="font-bold text-lg mb-2">{roomType}</p>
      <div className="flex justify-between items-center">
        <p className="text-[#555] text-sm font-medium">{price}/Night</p>
        <Link href="/rooms">
          <button className="bg-[#9A3D50] hover:bg-[#9A3D50]/80 text-white font-semibold py-2 px-4 rounded-lg">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );

  // Room data
  const rooms = [
    {
      imageSrc: "/assets/Homepic/roompic.png",
      roomType: "Deluxe Room",
      price: "₹ 5,000"
    },
    {
      imageSrc: "/assets/Homepic/roompic.png",
      roomType: "Executive Room",
      price: "₹ 7,500"
    },
    {
      imageSrc: "/assets/Homepic/roompic.png",
      roomType: "Suite Room",
      price: "₹ 10,000"
    },
    
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
        Rooms & Suites
      </h1>

      <div className="w-full max-w-6xl">
        {/* Static grid for larger screens */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              imageSrc={room.imageSrc}
              roomType={room.roomType}
              price={room.price}
            />
          ))}
        </div>

        {/* Carousel for smaller screens */}
        <div className="lg:hidden">
          {isMounted && (
            <Slider {...settings}>
              {rooms.map((room, index) => (
                <RoomCard
                  key={index}
                  imageSrc={room.imageSrc}
                  roomType={room.roomType}
                  price={room.price}
                />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
