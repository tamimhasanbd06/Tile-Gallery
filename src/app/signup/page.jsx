"use client";

import React, { useState } from "react";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaLink,
  FaArrowRight,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const imageUrl = e.target.imageUrl.value.trim();

    // ✅ EXACT validation rules
    if (!name) {
      toast.error("Provide name");
      return;
    }

    if (!email) {
      toast.error("Provide email");
      return;
    }

    if (!password) {
      toast.error("Provide password");
      return;
    }

    if (!imageUrl) {
      toast.error("Provide image URL");
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
        const msg = error.message?.toLowerCase() || "";

        if (msg.includes("exist") || msg.includes("already")) {
          toast.error("This email already exists. Please go to login page.");
        } else {
          toast.error("Signup failed!");
        }
        return;
      }

      if (data) {
        toast.success("Account created successfully!");
        router.push("/");
      }
    } catch (err) {
      toast.error("Signup failed. Please try again!");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error("Google Sign-In Failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-2 sm:px-4 md:px-6 py-4">

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
        <h1 className="text-2xl xs:text-3xl font-extrabold text-gray-900 text-center">
          Sign Up
        </h1>

        <p className="text-gray-500 text-xs xs:text-sm text-center mt-2">
          Create your account to continue
        </p>

        <Button
          onClick={handleGoogleSignIn}
          type="button"
          className="w-full h-10 xs:h-11 sm:h-12 mt-6 sm:mt-8 bg-white border border-gray-300
           hover:bg-gray-50 text-gray-700 font-semibold rounded-xl flex items-center justify-center
            gap-2 sm:gap-3 shadow-sm transition-all duration-300 text-sm sm:text-base"
        >
          <FcGoogle className="text-xl sm:text-2xl" />
          Sign Up with Google
        </Button>

        <div className="flex items-center gap-2 sm:gap-3 my-4 sm:my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Form className="flex flex-col gap-4 sm:gap-5" onSubmit={onSubmit}>

          {/* NAME */}
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

          {/* EMAIL */}
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

          {/* PASSWORD (ONLY FUNCTIONALITY ADDED) */}
          <TextField name="password" isRequired>
            <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-600">
              Password
            </Label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm z-10" />

              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 h-10 xs:h-11 sm:h-12 w-full bg-white border border-gray-300 text-gray-900 rounded-xl text-sm"
              />

              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </div>
            </div>
          </TextField>

          {/* IMAGE URL */}
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

          <Button
            type="submit"
            className="w-full h-10 xs:h-11 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold
             rounded-xl flex items-center justify-center gap-2 mt-2 transition-all duration-300 text-sm sm:text-base"
          >
            Create Account
            <FaArrowRight className="text-sm" />
          </Button>
        </Form>

        <p className="text-center text-gray-500 text-[11px] sm:text-xs mt-4 sm:mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}