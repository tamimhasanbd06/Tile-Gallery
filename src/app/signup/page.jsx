"use client";

import React from "react";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaLink,
  FaArrowRight,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

// React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpPage() {
  const router = useRouter();

  // ================= SIGN UP FORM SUBMIT =================
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const imageUrl = e.target.imageUrl.value.trim();

    // ================= REQUIRED FIELD VALIDATION =================
    if (!name) {
      toast.error("Name is required!");
      return;
    }

    if (!email) {
      toast.error("Email is required!");
      return;
    }

    if (!password) {
      toast.error("Password is required!");
      return;
    }

    if (!imageUrl) {
      toast.error("Image URL is required!");
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: imageUrl,
      });

      if (error) {
        toast.error(error.message || "Signup failed!");
        console.error("Signup Error:", error);
        return;
      }

      if (data) {
        toast.success("Account created successfully!");
        router.push("/");
      }
    } catch (err) {
      toast.error("Signup failed. Please try again!");
      console.error("Signup Failed:", err);
    }
  };

  // ================= GOOGLE SIGN IN =================
  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error("Google Sign-In Failed!");
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-2 sm:px-4 md:px-6 py-4">
      {/* ================= TOAST CONTAINER ================= */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      <Card
        className="w-full max-w-md p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200"
        style={{ backgroundColor: "#F4F0F8" }}
      >
        {/* Heading */}
        <h1 className="text-2xl xs:text-3xl font-extrabold text-gray-900 text-center">
          Sign Up
        </h1>

        <p className="text-gray-500 text-xs xs:text-sm text-center mt-2">
          Create your account to continue
        </p>

        {/* ================= GOOGLE BUTTON ================= */}
        <Button
          onClick={handleGoogleSignIn}
          type="button"
          className="w-full h-10 xs:h-11 sm:h-12 mt-6 sm:mt-8 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl flex items-center justify-center gap-2 sm:gap-3 shadow-sm transition-all duration-300 text-sm sm:text-base"
        >
          <FcGoogle className="text-xl sm:text-2xl" />
          Sign Up with Google
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-2 sm:gap-3 my-4 sm:my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* ================= SIGN UP FORM ================= */}
        <Form className="flex flex-col gap-4 sm:gap-5" onSubmit={onSubmit}>
          {/* Name */}
          <TextField name="name" isRequired>
            <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-600">
              Name
            </Label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm z-10" />
              <Input
                name="name"
                placeholder="Your name"
                className="pl-10 h-10 xs:h-11 sm:h-12 w-full bg-white border border-gray-300 text-gray-900 rounded-xl text-sm"
              />
            </div>
          </TextField>

          {/* Email */}
          <TextField name="email" isRequired>
            <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-600">
              Email
            </Label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm z-10" />
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10 h-10 xs:h-11 sm:h-12 w-full bg-white border border-gray-300 text-gray-900 rounded-xl text-sm"
              />
            </div>
          </TextField>

          {/* Password */}
          <TextField name="password" isRequired>
            <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-600">
              Password
            </Label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm z-10" />
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 h-10 xs:h-11 sm:h-12 w-full bg-white border border-gray-300 text-gray-900 rounded-xl text-sm"
              />
            </div>
          </TextField>

          {/* Image URL */}
          <TextField name="imageUrl" isRequired>
            <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-600">
              Image URL
            </Label>
            <div className="relative">
              <FaLink className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm z-10" />
              <Input
                name="imageUrl"
                type="url"
                placeholder="https://image.com/photo.jpg"
                className="pl-10 h-10 xs:h-11 sm:h-12 w-full bg-white border border-gray-300 text-gray-900 rounded-xl text-sm"
              />
            </div>
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-10 xs:h-11 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 mt-2 transition-all duration-300 text-sm sm:text-base"
          >
            Create Account
            <FaArrowRight className="text-sm" />
          </Button>
        </Form>

        {/* Login Redirect */}
        <p className="text-center text-gray-500 text-[11px] sm:text-xs mt-4 sm:mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}