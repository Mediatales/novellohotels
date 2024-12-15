import React from 'react';

const Page = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          src="./assets/packages/packageImg.png"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Your Dream Stay Starts Here
          </h1>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="py-10 px-6">
        <h2 className="text-center text-3xl font-bold mb-8">Special Offers</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Honeymoon Special */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="./assets/packages/roomImg.png"
              alt="Honeymoon Special"
              className="w-full  object-cover"
            />
            <div className="p-4">
              <h3 className="text-center text-xl font-medium">Honeymoon Special</h3>
            </div>
          </div>

          {/* Breakfast Special */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="./assets/packages/BreakfastImg.png"
              alt="Breakfast Special"
              className="w-full  object-cover"
            />
            <div className="p-4">
              <h3 className="text-center text-xl font-medium">Breakfast Special</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
