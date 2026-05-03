"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  LogOut,
  LayoutGrid,
  Home,
  User,
  LogIn,
  UserPlus,
  ImageIcon,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "All Tiles", path: "/allTiles", icon: ImageIcon },
    { name: "Profile", path: "/my-profile", icon: User },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  const isActive = (path) =>
    pathname === path
      ? "bg-blue-50 text-blue-600"
      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600";

  const initials = (name) => {
    if (!name) return "U";
    const p = name.split(" ");
    return p.length === 1
      ? p[0][0].toUpperCase()
      : `${p[0][0]}${p[1][0]}`.toUpperCase();
  };

  const Avatar = () => {
    const img = user?.image || user?.avatar;

    if (img) {
      return (
        <div className="relative w-10 h-10 min-w-[40px] min-h-[40px]">
          <Image
            src={img}
            alt="user"
            fill
            className="rounded-full object-cover border-2 border-blue-200"
          />
        </div>
      );
    }

    return (
      <div className="w-10 h-10 min-w-[40px] flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm">
        {initials(user?.name)}
      </div>
    );
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[9999] backdrop-blur-xl bg-white/80 border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 h-[70px] flex items-center justify-between min-w-[310px] relative">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <LayoutGrid size={20} />
          </div>
          <span className="text-sm sm:text-xl font-bold text-blue-700 truncate">
            TilesGallery
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive(
                    item.path
                  )}`}
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2">

          {/* MOBILE/TABLET AVATAR */}
          {user && (
            <div className="lg:hidden">
              <Avatar />
            </div>
          )}

          {/* DESKTOP AUTH */}
          <div className="hidden lg:flex items-center gap-2">
            {isPending ? (
              <p className="text-sm text-gray-500">Loading...</p>
            ) : !user ? (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500 text-blue-600 text-sm hover:bg-blue-50 transition"
                >
                  <LogIn size={15} />
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                >
                  <UserPlus size={15} />
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Avatar />
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white text-sm hover:bg-red-600 transition"
                >
                  <LogOut size={15} />
                  Logout
                </button>
              </>
            )}
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl active:scale-95 bg-blue-50 hover:bg-blue-100 transition"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* FLOATING DROPDOWN */}
          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute top-14 right-0 w-[250px] max-w-[90vw] bg-white border border-blue-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-4 space-y-3 z-[9999] animate-in fade-in zoom-in-95 duration-200"
            >
              {/* NAVIGATION */}
              <div className="grid gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition ${isActive(
                        item.path
                      )}`}
                    >
                      <Icon size={18} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* AUTH */}
              <div className="pt-3 border-t space-y-2">
                {!user ? (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-blue-500 text-blue-600 hover:bg-blue-50 transition"
                    >
                      <LogIn size={16} />
                      Login
                    </Link>

                    <Link
                      href="/signup"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      <UserPlus size={16} />
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;