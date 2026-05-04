import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-10 w-full overflow-hidden">

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-10 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-extrabold text-blue-600 mb-3">
            Tiles Gallery
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Premium tiles collection for modern interiors. Elegant design and high-quality showcase.
          </p>
        </div>

        {/* Pages */}
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-blue-600 mb-4">
            Pages
          </h3>

          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/allTiles" className="text-gray-500 hover:text-blue-600">
                All Tiles
              </Link>
            </li>
            <li>
              <Link href="/myprofile" className="text-gray-500 hover:text-blue-600">
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/signup" className="text-gray-500 hover:text-blue-600">
                Sign Up
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-gray-500 hover:text-blue-600">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-blue-600 mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-xs sm:text-sm break-words">
            <div className="flex items-center gap-2 text-gray-500">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="break-all">info@tilesgallery.com</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Phone className="w-4 h-4 text-blue-500 shrink-0" />
              <span>+880 1234 567 890</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Globe className="w-4 h-4 text-blue-500 shrink-0" />
              <span>tilesgallery.com</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-blue-600 mb-4">
            Follow Us
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: <FaFacebookF />, color: "text-blue-600", bg: "hover:bg-blue-600" },
              { icon: <FaInstagram />, color: "text-pink-500", bg: "hover:bg-pink-500" },
              { icon: <FaTwitter />, color: "text-sky-500", bg: "hover:bg-sky-500" },
              { icon: <FaLinkedinIn />, color: "text-blue-700", bg: "hover:bg-blue-700" },
              { icon: <FaYoutube />, color: "text-red-600", bg: "hover:bg-red-600" },
            ].map((item, i) => (
              <Link
                key={i}
                href="#"
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full
                   bg-white shadow ${item.color} ${item.bg} hover:text-white transition`}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-base-300 text-center py-3 text-xs sm:text-sm px-3">
        <span className="text-blue-600 font-semibold">
          © {new Date().getFullYear()} Tiles Gallery
        </span>
        <span className="text-gray-500"> — All rights reserved</span>
      </div>

    </footer>
  );
};

export default Footer;