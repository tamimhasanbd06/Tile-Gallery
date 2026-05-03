"use client";

import Link from "next/link";
import React, { useState } from "react";
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
        <div className="relative w-10 h-10 sm:w-11 sm:h-11">
          <Image
            src={img}
            alt="user"
            fill
            className="rounded-full object-cover border border-blue-200"
          />
        </div>
      );
    }

    return (
      <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm">
        {initials(user?.name)}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 h-[70px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <LayoutGrid size={20} />
          </div>
          <span className="text-base sm:text-xl font-bold text-blue-700 truncate">
            TilesGallery
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition ${isActive(
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
        <div className="flex items-center gap-2 sm:gap-3">

          {/* DESKTOP AUTH */}
          <div className="hidden lg:flex items-center gap-2">
            {isPending ? (
              <p className="text-sm text-gray-500">Loading...</p>
            ) : !user ? (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-1 px-3 py-2 rounded-full border border-blue-500 text-blue-600 text-sm hover:bg-blue-50"
                >
                  <LogIn size={14} /> Login
                </Link>

                <Link
                  href="/signup"
                  className="flex items-center gap-1 px-3 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700"
                >
                  <UserPlus size={14} /> Sign Up
                </Link>
              </>
            ) : (
              <>
                <Avatar />
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 px-3 py-2 rounded-full bg-red-500 text-white text-sm hover:bg-red-600"
                >
                  <LogOut size={14} /> Logout
                </button>
              </>
            )}
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl active:scale-95 bg-blue-50"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (BOTTOM SHEET STYLE) */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 space-y-3">

            {/* USER INFO */}
            {user && (
              <div className="flex items-center gap-3 pb-3 border-b">
                <Avatar />
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {user?.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email}
                  </p>
                </div>
              </div>
            )}

            {/* NAV */}
            <div className="grid gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-sm ${isActive(
                      item.path
                    )}`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* AUTH BUTTONS */}
            <div className="pt-3 border-t space-y-2">

              {!user ? (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center py-3 rounded-xl border border-blue-500 text-blue-600"
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center py-3 rounded-xl bg-blue-600 text-white"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full py-3 rounded-xl bg-red-500 text-white"
                >
                  Logout
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;