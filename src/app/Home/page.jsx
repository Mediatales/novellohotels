import React from "react";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import TestimonialCard from "@/components/TestimonalCard";
import Contact from "@/components/Contact";


const page = () => {
  return (
    <div>
      <div >
        <img src="./assets/Homepic/bghome.png" alt="" className="w-full" />
      </div>
      {/* checkavailaibility  before div*/}

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

      <About/>

      {/* travel destinations*/}

      <div className="flex flex-col items-center justify-center mt-6  md:mt-6 md:block " >
      <h1 className="text-4xl md:text-5xl font-bold text-black text-center">Beautiful travel destination</h1>

      <div className="flex justify-evenly gap-6 mt-6 " >
        <div className="border shadow-lg border-gray-300 rounded-lg ">
        <img src="./assets/Homepic/place1.png" alt="img"  />
        <p  className="font-[open_sans] " >Top Tibba Trek - Mussoorie</p>
        </div>

        <div  className="border shadow-lg border-gray-300 rounded-lg " >
        <img src="./assets/Homepic/place2.png" alt="img" />
        <p className="font-[open_sans] " >Top Tibba Trek - Mussoorie</p>
        </div>

        <div  className="border shadow-lg border-gray-300 rounded-lg ">
        <img src="./assets/Homepic/place3.png" alt="img" />
        <p  className="font-[open_sans] ">Top Tibba Trek - Mussoorie</p>
        </div>

        <div className="border shadow-lg border-gray-300 rounded-lg ">
        <img src="./assets/Homepic/place4.png" alt="img" />
        <p  className="font-[open_sans]" >Top Tibba Trek - Mussoorie</p>
        </div>
      </div>

      </div>

      {/* rooms */}
      <Rooms/>

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
      <TestimonialCard/>

      {/* contact */}
      <Contact/>
    </div>
  );
};

export default page;
