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
import AllTiles from "@/app/allTiles/page"


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Replace with real authentication
  const user = null;
  // Example:
  // const user = {
  //   name: "Tamim Hasan",
  //   image: "/profile.jpg",
  // };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "AllTiles", path: "/allTiles" },
    { name: "My Profile", path: "/my-profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80px]">

        {/* LEFT SIDE */}
        <div className="navbar-start">

          {/* Mobile Toggle */}
          <div className="lg:hidden mr-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-blue-700" />
              ) : (
                <Menu className="w-6 h-6 text-blue-700" />
              )}
            </button>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="p-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
              <LayoutGrid className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                TilesGallery
              </span>
              <span className="hidden sm:block text-[11px] text-gray-500 font-medium">
                Premium Tile Collection
              </span>
            </div>
          </Link>
        </div>

        {/* CENTER MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="px-4 py-2 rounded-full text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end gap-3">

          {!user ? (
            <Link
              href="/login"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Login
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="flex items-center gap-3">

              {/* Profile */}
              <Link
                href="/my-profile"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
              >
                <UserCircle2 className="w-5 h-5 text-blue-700" />
                <span className="font-medium text-blue-700">
                  {user.name}
                </span>
              </Link>

              {/* Logout */}
              <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-blue-100 shadow-xl px-4 py-5">
          <ul className="flex flex-col gap-3">

            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-4 py-3 rounded-2xl text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <div className="pt-2 border-t border-gray-100">
              {!user ? (
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex justify-center items-center gap-2 w-full px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md"
                >
                  Login
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <div className="flex flex-col gap-3">

                  <Link
                    href="/my-profile"
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center items-center gap-2 w-full px-4 py-3 rounded-full border border-blue-200 text-blue-700 font-medium hover:bg-blue-50"
                  >
                    <UserCircle2 className="w-5 h-5" />
                    My Profile
                  </Link>

                  <button className="flex justify-center items-center gap-2 w-full px-4 py-3 rounded-full bg-red-500 text-white font-medium hover:bg-red-600">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;