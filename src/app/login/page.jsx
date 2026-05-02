// ========================= LOGIN PAGE =========================
"use client";

import React from "react";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Login = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (data && !error) {
      router.push("/");
    } else {
      router.push("/signup");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-2 sm:px-4 md:px-6 py-4">
      <Card
        className="w-full max-w-md p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200"
        style={{ backgroundColor: "#F4F0F8" }}
      >
        <h1 className="text-2xl xs:text-3xl font-extrabold text-gray-900 text-center">
          Login
        </h1>

        <p className="text-gray-500 text-xs xs:text-sm text-center mt-2">
          Access your account to continue
        </p>

        {/* Google Login */}
        <Button
          type="button"
          className="w-full h-10 xs:h-11 sm:h-12 mt-6 sm:mt-8 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl flex items-center justify-center gap-2 sm:gap-3 shadow-sm transition-all duration-300 text-sm sm:text-base"
        >
          <FcGoogle className="text-xl sm:text-2xl" />
          Login with Google
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-2 sm:gap-3 my-4 sm:my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Form className="flex flex-col gap-4 sm:gap-5" onSubmit={onSubmit}>
          {/* Email */}
          <TextField name="email" isRequired>
            <Label className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-600">
              Email
            </Label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <Input
                name="email"
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
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 h-10 xs:h-11 sm:h-12 w-full bg-white border border-gray-300 text-gray-900 rounded-xl text-sm"
              />
            </div>
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-10 xs:h-11 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 mt-2 transition-all duration-300 text-sm sm:text-base"
          >
            Login <FaArrowRight className="text-sm" />
          </Button>
        </Form>

        <p className="text-center text-gray-500 text-[11px] sm:text-xs mt-4 sm:mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Login;