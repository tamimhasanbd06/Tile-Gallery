"use client";

import React from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaLink,
  FaArrowRight,
} from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("Signup Data:", Object.fromEntries(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black px-4">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* CARD */}
      <Card className="w-full max-w-md p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

        <h1 className="text-3xl font-extrabold text-white text-center">
          Sign Up
        </h1>

        <p className="text-white/50 text-sm text-center mt-2">
          Create your account to continue
        </p>

        <Form className="flex flex-col gap-5 mt-8" onSubmit={onSubmit}>

          {/* NAME */}
          <TextField name="name" isRequired>
            <Label className="text-xs uppercase tracking-widest text-white/60">
              Name
            </Label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input
                placeholder="Your name"
                className="pl-10 h-12 w-full bg-white/5 border border-white/10 text-white rounded-xl"
              />
            </div>
          </TextField>

          {/* EMAIL */}
          <TextField name="email" isRequired>
            <Label className="text-xs uppercase tracking-widest text-white/60">
              Email
            </Label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input
                placeholder="you@example.com"
                className="pl-10 h-12 w-full bg-white/5 border border-white/10 text-white rounded-xl"
              />
            </div>
          </TextField>

          {/* PASSWORD */}
          <TextField name="password" type="password" isRequired>
            <Label className="text-xs uppercase tracking-widest text-white/60">
              Password
            </Label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input
                placeholder="••••••••"
                className="pl-10 h-12 w-full bg-white/5 border border-white/10 text-white rounded-xl"
              />
            </div>
          </TextField>

          {/* IMAGE URL */}
          <TextField name="imageUrl" isRequired>
            <Label className="text-xs uppercase tracking-widest text-white/60">
              Image URL
            </Label>
            <div className="relative">
              <FaLink className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input
                placeholder="https://image.com/photo.jpg"
                className="pl-10 h-12 w-full bg-white/5 border border-white/10 text-white rounded-xl"
              />
            </div>
          </TextField>

          {/* SUBMIT */}
          <Button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2"
          >
            Create Account <FaArrowRight className="text-sm" />
          </Button>
        </Form>

        {/* LOGIN LINK */}
        <p className="text-center text-white/50 text-xs mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 font-semibold hover:underline">
            Login
          </Link>
        </p>

      </Card>
    </div>
  );
}