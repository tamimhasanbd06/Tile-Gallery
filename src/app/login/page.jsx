"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";

export default function Page() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    console.log("Signup Data:", { name, email, password });

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
      });

      console.log("Response:", { data, error });

      if (error) {
        setErrorMsg(error.message || "Signup failed");
        return;
      }

      if (data) {
        router.push("/");
      }
    } catch (err) {
      console.error("Signup Catch Error:", err);
      setErrorMsg(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch (err) {
      console.error(err);
      setErrorMsg("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Login
        </h1>

        <p className="text-center text-gray-500 text-sm mt-2">
          Login to get started
        </p>

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogle}
          className="w-full mt-6 flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* ERROR */}
        {errorMsg && (
          <p className="text-red-500 text-sm text-center mt-3">
            {errorMsg}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <div className="relative mt-1">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                name="name"
                placeholder="Your name"
                className="w-full border p-2 pl-10 rounded-lg"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="relative mt-1">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                name="email"
                placeholder="you@gmail.com"
                className="w-full border p-2 pl-10 rounded-lg"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full border p-2 pl-10 rounded-lg"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Creating..." : "Login Account"}
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-medium">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}