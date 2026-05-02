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

export default function Page() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imageUrl = e.target.imageUrl.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: imageUrl,
    });

    console.log(data, error);

    if (data && !error) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      <Card
        className="w-full max-w-md p-10 rounded-3xl shadow-2xl border border-gray-200"
        style={{ backgroundColor: "#F4F0F8" }}
      >
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          Sign Up
        </h1>

        <p className="text-gray-500 text-sm text-center mt-2">
          Create your account to continue
        </p>

        {/* Google Sign Up Button */}
        <Button
          type="button"
          className="w-full h-12 mt-8 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl flex items-center justify-center gap-3 shadow-sm transition-all duration-300"
        >
          <FcGoogle className="text-2xl" />
          Sign Up with Google
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          {/* Name */}
          <TextField name="name" isRequired>
            <Label className="text-xs uppercase tracking-widest text-gray-600">
              Name
            </Label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                name="name"
                placeholder="Your name"
                className="pl-10 h-12 w-full bg-white border border-gray-300 text-gray-900 rounded-xl"
              />
            </div>
          </TextField>

          {/* Email */}
          <TextField name="email" isRequired>
            <Label className="text-xs uppercase tracking-widest text-gray-600">
              Email
            </Label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                name="email"
                placeholder="you@example.com"
                className="pl-10 h-12 w-full bg-white border border-gray-300 text-gray-900 rounded-xl"
              />
            </div>
          </TextField>

          {/* Password */}
          <TextField name="password" isRequired>
            <Label className="text-xs uppercase tracking-widest text-gray-600">
              Password
            </Label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 h-12 w-full bg-white border border-gray-300 text-gray-900 rounded-xl"
              />
            </div>
          </TextField>

          {/* Image URL */}
          <TextField name="imageUrl" isRequired>
            <Label className="text-xs uppercase tracking-widest text-gray-600">
              Image URL
            </Label>
            <div className="relative">
              <FaLink className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                name="imageUrl"
                placeholder="https://image.com/photo.jpg"
                className="pl-10 h-12 w-full bg-white border border-gray-300 text-gray-900 rounded-xl"
              />
            </div>
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 mt-2 transition-all duration-300"
          >
            Create Account <FaArrowRight className="text-sm" />
          </Button>
        </Form>

        <p className="text-center text-gray-500 text-xs mt-6">
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