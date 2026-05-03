"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { FaUser, FaImage } from "react-icons/fa6";

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  /* ---------------- PROFILE STATE ---------------- */
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    image: "",
  });

  /* ---------------- FORM STATE (ONLY NAME + IMAGE) ---------------- */
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  /* ---------------- LOAD USER DATA ---------------- */
  useEffect(() => {
    if (user) {
      const data = {
        name: user?.name || "",
        email: user?.email || "",
        image: user?.image || user?.avatar || "",
      };

      setProfile(data);

      // ONLY editable fields
      setFormData({
        name: data.name,
        image: data.image,
      });
    }
  }, [user]);

  /* ---------------- INITIALS ---------------- */
  const initials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  };

  /* ---------------- INPUT CHANGE ---------------- */
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ---------------- SAVE + UPDATE (MONGODB via authClient) ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 👇 backend update call (authClient should handle DB/MongoDB update)
      await authClient.updateUser({
        name: formData.name,
        image: formData.image,
      });

      // update UI instantly
      setProfile((prev) => ({
        ...prev,
        name: formData.name,
        image: formData.image,
      }));

      // close modal
      document.getElementById("my_modal_6").checked = false;
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  /* ---------------- LOADING ---------------- */
  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <p className="text-gray-600 font-medium">Loading Profile...</p>
      </div>
    );
  }

  /* ---------------- NO USER ---------------- */
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-red-500 font-bold text-xl">User Not Found</h2>
          <p className="text-gray-600">Please login first</p>
        </div>
      </div>
    );
  }

  /* ---------------- UI ---------------- */
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-5">

      {/* CARD */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl border border-blue-100 rounded-3xl shadow-2xl p-6 text-center">

        {/* AVATAR */}
        <div className="flex justify-center mb-5">
          {profile.image ? (
            <div className="relative w-28 h-28">
              <Image
                src={profile.image}
                alt="avatar"
                fill
                className="rounded-full object-cover border-4 border-blue-200"
              />
            </div>
          ) : (
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-blue-600 text-white text-3xl font-bold">
              {initials(profile.name)}
            </div>
          )}
        </div>

        {/* NAME */}
        <h1 className="text-2xl font-bold text-gray-800">
          {profile.name || "Unknown"}
        </h1>

        {/* EMAIL (READ ONLY) */}
        <p className="text-gray-500 break-all">
          {profile.email}
        </p>

        <div className="my-5 h-[1px] bg-blue-100" />

        <p className="text-sm text-gray-400 mb-4">
          Welcome to your profile dashboard
        </p>

        {/* OPEN MODAL BUTTON */}
        <label
          htmlFor="my_modal_6"
          className="w-full block bg-blue-600 text-white py-3 rounded-xl cursor-pointer hover:bg-blue-700"
        >
          Edit Profile
        </label>
      </div>

      {/* MODAL */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />

      <div className="modal z-[9999]" role="dialog">
        <div className="modal-box max-w-lg bg-white rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-center">
            Update Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">

            {/* NAME */}
            <div>
              <label className="text-sm">Name</label>
              <div className="relative mt-1">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* IMAGE */}
            <div>
              <label className="text-sm">Image URL</label>
              <div className="relative mt-1">
                <FaImage className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full border p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 pt-3">

              <label
                htmlFor="my_modal_6"
                className="w-full text-center border py-3 rounded-xl cursor-pointer"
              >
                Cancel
              </label>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
              >
                Save
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default MyProfilePage;