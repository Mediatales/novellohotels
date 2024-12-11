import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1B1833] text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Address</h3>
          <p>Bus Stand, Picture Palace Road, Near Kulri, Mussoorie, Uttarakhand, 248179</p>
          <p>thenovellobyhotelevergreen@gmail.com</p>
          <p>Hotel: +91 8445581177</p>
          <p>Hotel: +91 8266966987</p>
          <div className="flex gap-4 mt-4">
            <FaInstagram className="text-2xl cursor-pointer hover:text-red-500" />
            <FaFacebook className="text-2xl cursor-pointer hover:text-red-500" />
            <FaWhatsapp className="text-2xl cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/rooms">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-red-500">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/cancellation-policy" className="hover:text-red-500">
                Cancellation & Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-red-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Hours Section */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Hours</h3>
          <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
          <p>Sat - Sun: 8:00 AM to 4:00 PM</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>Copyright 2024 by Novello</p>
      </div>
    </footer>
  );
};

export default Footer;