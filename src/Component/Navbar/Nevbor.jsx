"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  Menu,
  X,
  UserCircle2,
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

        {/* CENTER (DESKTOP MENU) */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="font-medium text-gray-700 hover:text-blue-700"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DESKTOP LOGIN */}
          <div className="hidden lg:block">
            {!user ? (
              <Link
                href="/login"
                className="px-5 py-2 rounded-full bg-blue-600 text-white"
              >
                Login
              </Link>
            ) : (
              <button className="px-4 py-2 rounded-full bg-red-500 text-white">
                Logout
              </button>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 border-t bg-white space-y-3">

          {/* NAV ITEMS */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700"
            >
              {item.name}
            </Link>
          ))}

          {/* LOGIN INSIDE DROPDOWN (IMPORTANT FIX) */}
          <div className="pt-3 border-t">
            {!user ? (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-xl"
              >
                Login <ChevronRight size={18} />
              </Link>
            ) : (
              <button className="w-full py-3 bg-red-500 text-white rounded-xl">
                Logout
              </button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;