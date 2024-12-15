"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuState, setMenuState] = useState({
    isMobileMenuOpen: false,
    isDropdownOpen: false,
    isMobileRoomsDropdownOpen: false,
  });

  const toggleState = (key) => {
    setMenuState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Close mobile menu on screen resize to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuState.isMobileMenuOpen) {
        setMenuState((prev) => ({ ...prev, isMobileMenuOpen: false }));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuState.isMobileMenuOpen]);

  return (
    <nav className="bg-[#1B1833] w-full fixed z-10">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="https://res.cloudinary.com/derv1v0oi/image/upload/v1734285272/logo_ijp4ko.png"
            alt="Novello Hotels Logo"
            onError={(e) => (e.target.src = "/fallback-logo.png")}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-8">
          <li>
            <Link href="/" className="text-gray-100 hover:text-blue-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className="text-gray-100 hover:text-blue-900">
              About
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="text-gray-100 hover:text-blue-900">
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/restaurant"
              className="text-gray-100 hover:text-blue-900"
            >
              Restaurant
            </Link>
          </li>
          <li
            className="relative text-gray-100 hover:text-blue-900 cursor-pointer group"
            onMouseEnter={() => toggleState("isDropdownOpen")}
            onMouseLeave={() => toggleState("isDropdownOpen")}
          >
            <div className="flex items-center">
              <Link href="/rooms" className="mr-1">
                Rooms
              </Link>
              <FaChevronDown className="text-xs" />
            </div>
            {menuState.isDropdownOpen && (
              <ul className="absolute top-full left-0 bg-[#dedde5] shadow-lg rounded-md py-2 mt-2 min-w-[150px]">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link
                    href="/rooms/deluxe"
                    className="text-black hover:text-white"
                  >
                    Deluxe Room
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link
                    href="/rooms/suite"
                    className="text-black hover:text-white"
                  >
                    Suite
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link
                    href="/rooms/family"
                    className="text-black hover:text-white"
                  >
                    Family Room
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/packages"
              className="text-gray-100 hover:text-blue-900"
            >
              Packages
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-100 hover:text-blue-900">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-100 text-2xl"
          onClick={() => toggleState("isMobileMenuOpen")}
          aria-expanded={menuState.isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {menuState.isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {menuState.isMobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#1B1833] flex flex-col items-center py-4 shadow-lg z-20 transition-transform duration-300 ease-in-out">
            <li className="py-2">
              <Link
                href="/"
                className="text-gray-100 hover:text-blue-900"
                onClick={() => toggleState("isMobileMenuOpen")}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/about"
                className="text-gray-100 hover:text-blue-900"
                onClick={() => toggleState("isMobileMenuOpen")}
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/gallery"
                className="text-gray-100 hover:text-blue-900"
                onClick={() => toggleState("isMobileMenuOpen")}
              >
                Gallery
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/restaurant"
                className="text-gray-100 hover:text-blue-900"
                onClick={() => toggleState("isMobileMenuOpen")}
              >
                Restaurant
              </Link>
            </li>
            <li className="py-2 w-full">
              <div
                className="flex justify-center items-center text-gray-100 hover:text-blue-900"
                onClick={() => toggleState("isMobileRoomsDropdownOpen")}
                aria-expanded={menuState.isMobileRoomsDropdownOpen}
              >
                <Link href="/rooms" className="mr-2">
                  Rooms
                </Link>
                <FaChevronDown
                  className={`transition-transform ${
                    menuState.isMobileRoomsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {menuState.isMobileRoomsDropdownOpen && (
                <ul className="bg-[#1B1833] mt-2">
                  <li className="py-2 text-center">
                    <Link
                      href="/rooms/deluxe"
                      className="text-gray-100 hover:text-blue-900"
                      onClick={() => toggleState("isMobileMenuOpen")}
                    >
                      Deluxe Room
                    </Link>
                  </li>
                  <li className="py-2 text-center">
                    <Link
                      href="/rooms/suite"
                      className="text-gray-100 hover:text-blue-900"
                      onClick={() => toggleState("isMobileMenuOpen")}
                    >
                      Suite
                    </Link>
                  </li>
                  <li className="py-2 text-center">
                    <Link
                      href="/rooms/family"
                      className="text-gray-100 hover:text-blue-900"
                      onClick={() => toggleState("isMobileMenuOpen")}
                    >
                      Family Room
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="py-2">
              <Link
                href="/packages"
                className="text-gray-100 hover:text-blue-900"
                onClick={() => toggleState("isMobileMenuOpen")}
              >
                Packages
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/contact"
                className="text-gray-100 hover:text-blue-900"
                onClick={() => toggleState("isMobileMenuOpen")}
              >
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
