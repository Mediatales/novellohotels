"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuState, setMenuState] = useState({
    isMobileMenuOpen: false,
    isDropdownOpen: false,
    isMobileRoomsDropdownOpen: false,
  });

  const dropdownRef = useRef(null);

  const toggleState = useCallback((key) => {
    setMenuState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const closeAllMenus = useCallback(() => {
    setMenuState({
      isMobileMenuOpen: false,
      isDropdownOpen: false,
      isMobileRoomsDropdownOpen: false,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeAllMenus();
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuState(prev => ({
          ...prev,
          isDropdownOpen: false
        }));
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeAllMenus]);

  const handleLinkClick = useCallback(() => {
    closeAllMenus();
  }, [closeAllMenus]);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/restaurant", label: "Restaurant" },
    { href: "/packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ];

  const roomLinks = [
    { href: "/rooms/deluxe", label: "Deluxe Room" },
    { href: "/rooms/executive-mountain", label: "Executive Room with View" },
    { href: "/rooms/executive-balcony", label: "Executive Room with Balcony" },
  ];

  return (
    <nav className="bg-[#1B1833] w-full fixed z-50">
      <div className="w-[90%] mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link href="/">
          <img
            src="https://res.cloudinary.com/derv1v0oi/image/upload/v1734285272/logo_ijp4ko.png"
            alt="Novello Hotels Logo"
            onError={(e) => (e.target.src = "/fallback-logo.png")}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link, index) => {
            if (link.label === "Packages") return null;
            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-gray-100 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          {/* Desktop Rooms Dropdown */}
          <li
            ref={dropdownRef}
            className="relative"
          >
            <Link href="/rooms">
            <button 
              className="flex items-center text-gray-100 hover:text-blue-400 transition-colors duration-200"
              onClick={() => toggleState("isDropdownOpen")}
            >
              Rooms
              <FaChevronDown className={`ml-2 mt-1 items-center text-xs transition-transform duration-200 ${
                menuState.isDropdownOpen ? "rotate-180" : ""
              }`} />
            </button>
            </Link>
            
            {menuState.isDropdownOpen && (
              <ul className="absolute top-full left-0 bg-white rounded-lg shadow-lg py-2 mt-2 min-w-[200px] z-50">
                {roomLinks.map((room, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100">
                    <Link
                      href={room.href}
                      className="block text-gray-800 hover:text-blue-600 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLinkClick();
                      }}
                    >
                      {room.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {navigationLinks.slice(-2).map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-gray-100 hover:text-blue-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-100 p-2 hover:text-blue-400 transition-colors duration-200"
          onClick={() => toggleState("isMobileMenuOpen")}
          aria-label="Toggle mobile menu"
        >
          {menuState.isMobileMenuOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#1B1833] shadow-lg transition-all duration-300 ease-in-out ${
            menuState.isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="py-4">
            {navigationLinks.map((link, index) => {
              if (link.label === "Packages") return null;
              return (
                <li key={index} className="px-6 py-2">
                  <Link
                    href={link.href}
                    className="block text-gray-100 hover:text-blue-400 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Rooms Dropdown */}
            <li className="px-6 py-2">
              <button
                className="flex items-center w-full text-gray-100 hover:text-blue-400 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleState("isMobileRoomsDropdownOpen");
                }}
              >
                Rooms
                <FaChevronDown className={`ml-2 transition-transform duration-200 ${
                  menuState.isMobileRoomsDropdownOpen ? "rotate-180" : ""
                }`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                menuState.isMobileRoomsDropdownOpen ? "max-h-48" : "max-h-0"
              }`}>
                <ul className="pl-4 py-2">
                  {roomLinks.map((room, index) => (
                    <li key={index} className="py-2">
                      <Link
                        href={room.href}
                        className="block text-gray-100 hover:text-blue-400 transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLinkClick();
                        }}
                      >
                        {room.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {navigationLinks.slice(-2).map((link, index) => (
              <li key={index} className="px-6 py-2">
                <Link
                  href={link.href}
                  className="block text-gray-100 hover:text-blue-400 transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;