import React from "react";

const RoomsPage = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="./assets/rooms-photos/Rooms_page_img.png"
        alt="Rooms Designed for Your Comfort"
        className="w-full h-[80vh] object-cover"
      />
      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Rooms Designed for Your Comfort
        </h1>
      </div>
    </div>
  );
};

export default RoomsPage;