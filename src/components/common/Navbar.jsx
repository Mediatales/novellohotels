import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#1B1833]">
      <div className="w-[90%] mx-auto flex justify-between items-center py-4">
        <img src="./assets/logo.png" alt="logo" className="ml-14" />
        <ul className="flex justify-center items-center gap-8">
          <li className="text-gray-100 hover:text-blue-900 cursor-pointer">Home</li>
          <li className="text-gray-100 hover:hover:text-blue-900 cursor-pointer">About</li>
          <li className="text-gray-100 hover:hover:text-blue-900 cursor-pointer">Gallery</li>
          <li className="text-gray-100 hover:hover:text-blue-900 cursor-pointer">Restaurant</li>
          <li className="text-gray-100 hover:hover:text-blue-900 cursor-pointer">Rooms</li>
          <li className="text-gray-100 hover:hover:text-blue-900 cursor-pointer">Packages</li>
          <li className="text-gray-100 hover:hover:text-blue-900 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
