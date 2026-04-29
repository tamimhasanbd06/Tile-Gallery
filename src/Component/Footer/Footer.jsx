import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-10">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-600 mb-3">
            Tiles Gallery
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Premium tiles collection for modern interiors. Elegant design,
            aesthetic look, and high-quality showcase.
          </p>
        </div>

        {/* PAGES */}
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-4">
            Pages
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link href="/" className="text-gray-500 hover:text-blue-600 cursor-pointer transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-500 hover:text-blue-600 cursor-pointer transition">
                All Tiles
              </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-500 hover:text-blue-600 cursor-pointer transition">
                My Profile
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-sm">

            <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 cursor-pointer transition">
              <Mail className="w-4 h-4 text-blue-500" />
              info@tilesgallery.com
            </Link>

            <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 cursor-pointer transition">
              <Phone className="w-4 h-4 text-blue-500" />
              +880 1234 567 890
            </Link>

            <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 cursor-pointer transition">
              <MapPin className="w-4 h-4 text-blue-500" />
              Dhaka, Bangladesh
            </Link>

            <Link href="#" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 cursor-pointer transition">
              <Globe className="w-4 h-4 text-blue-500" />
              www.tilesgallery.com
            </Link>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-base-300 text-center py-4 text-sm">
        <span className="text-blue-600 font-semibold">
          © {new Date().getFullYear()} Tiles Gallery
        </span>
        <span className="text-gray-500"> — All rights reserved</span>
      </div>

    </footer>
  );
};

export default Footer;