import React from "react";
import Link from "next/link";

const RoomsPage = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src="./assets/Homepic/roompic.png"
              alt="Deluxe Room"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Deluxe Room</h3>
              <p className="text-sm text-gray-600 mb-2">
                Indulge in luxury at our Deluxe Rooms in the heart of Mussoorie.
              </p>
              <p className="text-lg font-semibold text-[#9A3D50] mb-4">
                ₹ 3,000 / Night
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <p>
                  Status: <span className="text-green-600">Available</span>
                </p>
                <p>Guests: 2</p>
                <p>Bed: 1</p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/rooms/deluxe"
                  className="bg-[#9A3D50] text-white py-2 px-4 rounded hover:bg-[#9A3D50]/80"
                >
                  Book Now
                </Link>
                <Link
                  href="/rooms/deluxe"
                  className="text-[#9A3D50] hover:underline"
                >
                  View more &gt;
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src="./assets/Homepic/roompic.png"
              alt="Executive Room with Balcony"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Executive Room with Balcony
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Indulge in luxury at our Deluxe Rooms in the heart of Mussoorie.
              </p>
              <p className="text-lg font-semibold text-[#9A3D50] mb-4">
                ₹ 4,000 / Night
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <p>
                  Status: <span className="text-green-600">Available</span>
                </p>
                <p>Guests: 3</p>
                <p>Bed: 1</p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/rooms/executivebalcony"
                  className="bg-[#9A3D50] text-white py-2 px-4 rounded hover:bg-[#9A3D50]/80"
                >
                  Book Now
                </Link>
                <Link
                  href="/rooms/executivebalcony"
                  className="text-[#9A3D50] hover:underline"
                >
                  View more &gt;
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src="./assets/Homepic/roompic.png"
              alt="Executive Room with Mountain View"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Executive Room with Mountain View
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Indulge in luxury at our Deluxe Rooms in the heart of Mussoorie.
              </p>
              <p className="text-lg font-semibold text-[#9A3D50] mb-4">
                ₹ 6,000 / Night
              </p>
              <div className="text-sm text-gray-600 mb-4">
                <p>
                  Status: <span className="text-green-600">Available</span>
                </p>
                <p>Guests: 2</p>
                <p>Bed: 1</p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/rooms/executivemountain"
                  className="bg-[#9A3D50] text-white py-2 px-4 rounded hover:bg-[#9A3D50]/80"
                >
                  Book Now
                </Link>
                <Link
                  href="/rooms/executivemountain"
                  className="text-[#9A3D50] hover:underline"
                >
                  View more &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RoomsPage;
