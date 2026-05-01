"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  Menu,
  X,
  LogOut,
  LayoutGrid,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = null;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "AllTiles", path: "/allTiles" },
    { name: "My Profile", path: "/my-profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex items-center justify-between">
        
        {/* LEFT - LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="p-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <LayoutGrid />
          </div>

          <div className="leading-tight">
            <span className="text-xl font-extrabold text-blue-700">
              TilesGallery
            </span>
          </div>
        </Link>

        {/* CENTER - DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="font-medium text-gray-700 hover:text-blue-700 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          
          {/* DESKTOP AUTH BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button className="px-5 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition">
                Logout
              </button>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE FLOATING DROPDOWN */}
      <div className="relative">
        <div
          className={`lg:hidden absolute right-4 top-2 bg-white border border-blue-100 rounded-2xl shadow-2xl transition-all duration-300 origin-top-right ${
            menuOpen
              ? "scale-100 opacity-100 visible"
              : "scale-95 opacity-0 invisible"
          }`}
        >
          <div className="p-5 min-w-[240px] space-y-3">
            
            {/* NAV ITEMS */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                {item.name}
              </Link>
            ))}

            {/* AUTH BUTTONS */}
            <div className="pt-3 border-t flex flex-col gap-3">
              {!user ? (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition"
                  >
                    Login <ChevronRight size={18} />
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                  >
                    Sign Up <ChevronRight size={18} />
                  </Link>
                </>
              ) : (
                <button className="w-full py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
                  Logout
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;