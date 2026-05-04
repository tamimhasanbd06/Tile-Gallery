"use client";

import React, { useState } from "react";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    // Empty validation
    if (!email) {
      toast.error("Provide email");
      setLoading(false);
      return;
    }

    if (!password) {
      toast.error("Provide password");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error || !data) {
        // 🔥 Custom mapping (as per your rule)
        const msg = error?.message?.toLowerCase() || "";

        const emailWrong = msg.includes("email");
        const passwordWrong = msg.includes("password");

        if (emailWrong && passwordWrong) {
          toast.error("Provide correct email and password");
        } else if (emailWrong) {
          toast.error("Provide correct email");
        } else if (passwordWrong) {
          toast.error("Provide correct password");
        } else {
          toast.error("Provide correct email and password");
        }
        return;
      }

      toast.success("Login successful!");
      router.push("/");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-6">

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />

      <Card
        className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200"
        style={{ backgroundColor: "#F4F0F8" }}
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Login
        </h1>

        <p className="text-center text-gray-500 text-sm mt-2">
          Welcome back! Please login to continue
        </p>

        <Button
          onClick={handleGoogle}
          type="button"
          className="w-full mt-6 h-11 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </Button>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-500 uppercase">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          {/* EMAIL */}
          <TextField name="email" isRequired>
            <Label className="text-xs uppercase tracking-widest text-gray-600">
              Email
            </Label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10 h-11 w-full bg-white border border-gray-300 rounded-xl text-sm"
              />
            </div>
          </TextField>

          {/* PASSWORD WITH TOGGLE */}
          <TextField name="password" isRequired>
            <Label className="text-xs uppercase tracking-widest text-gray-600">
              Password
            </Label>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10 h-11 w-full bg-white border border-gray-300 rounded-xl text-sm"
              />

              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </div>
            </div>
          </TextField>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2"
          >
            {loading ? "Logging in..." : "Login"}
            <FaArrowRight />
          </Button>
        </Form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-medium">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}