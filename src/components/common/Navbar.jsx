"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1B1833] w-full fixed z-10">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="./assets/Homepic/logo.png" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-8">
          <li>
            <Link href="/" className="text-gray-100 hover:text-blue-900">Home</Link>
          </li>
          <li>
            <Link href="/aboutus" className="text-gray-100 hover:text-blue-900">About</Link>
          </li>
          <li>
            <Link href="/gallery" className="text-gray-100 hover:text-blue-900">Gallery</Link>
          </li>
          <li>
            <Link href="/restaurant" className="text-gray-100 hover:text-blue-900">Restaurant</Link>
          </li>
          <li
            className="relative text-gray-100 hover:text-blue-900 cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
           <Link href="/rooms"> Rooms</Link>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 bg-[#1B1833] shadow-lg rounded-md py-2 mt-2">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/rooms/deluxe">Deluxe Room</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/rooms/suite">Suite</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/rooms/family">Family Room</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/packages" className="text-gray-100 hover:text-blue-900">Packages</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-100 hover:text-blue-900">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-100 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#1B1833] flex flex-col items-center py-4 shadow-lg z-20">
            <li className="py-2">
              <Link href="/" className="text-gray-100 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link href="/about" className="text-gray-100 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="py-2">
              <Link href="/gallery" className="text-gray-100 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li className="py-2">
              <Link href="/restaurant" className="text-gray-100 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
                Restaurant
              </Link>
            </li>
            <li className="py-2">
              <Link href="/rooms" className="text-gray-100 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
                Rooms
              </Link>
            </li>
            <li className="py-2">
              <Link href="/packages" className="text-gray-100 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
                Packages
              </Link>
            </li>
            <li className="py-2">
              <Link href="/contact" className="text-gray-100 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
