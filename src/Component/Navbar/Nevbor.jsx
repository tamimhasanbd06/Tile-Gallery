"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, UserCircle2, LogOut, LayoutGrid } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Replace with real authentication state
  const user = null;
  // Example:
  // const user = {
  //   name: "Tamim Hasan",
  //   image: "/profile.jpg"
  // };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Tiles", path: "/all-tiles" },
    { name: "My Profile", path: "/my-profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/90 backdrop-blur-md border-b border-base-300 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* LEFT SIDE */}
        <div className="navbar-start">
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-ghost btn-circle" >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-extrabold text-primary tracking-wide"
          >
            <LayoutGrid className="w-8 h-8" />
            <span className="hidden sm:block">TilesGallery</span>
          </Link>
        </div>

        {/* CENTER MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="font-medium text-base hover:text-primary transition-all duration-300">
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
              className="btn btn-primary rounded-full px-6 text-white font-semibold hover:scale-105 transition-transform duration-300" >
              Login
            </Link>
          ) : (
            <>
              <Link
                href="/my-profile"
                className="flex items-center gap-2 btn btn-outline btn-primary rounded-full px-4">
                <UserCircle2 className="w-5 h-5" />
                Profile
              </Link>

              <button className="btn btn-error rounded-full text-white hover:scale-105 transition-transform duration-300">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-base-100 border-t border-base-300 shadow-lg">
          <ul className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {!user ? (
              <Link
                href="/login"
                className="btn btn-primary w-full rounded-full mt-2" >
                Login
              </Link>
            ) : (
              <>
                <Link
                  href="/my-profile"
                  className="btn btn-outline btn-primary w-full rounded-full">
                  My Profile
                </Link>

                <button className="btn btn-error w-full rounded-full text-white">
                  Logout
                </button>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;