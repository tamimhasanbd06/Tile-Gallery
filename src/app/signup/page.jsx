"use client";

import React from "react";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import { FaEnvelope, FaLock, FaUser, FaLink, FaArrowRight } from "react-icons/fa6";
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black px-4">

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      <Card className="w-full max-w-md p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

        <h1 className="text-3xl font-extrabold text-white text-center">
          Sign Up
        </h1>

        <p className="text-white/50 text-sm text-center mt-2">
          Create your account to continue
        </p>

        <Form className="flex flex-col gap-5 mt-8" onSubmit={onSubmit}>

          <TextField name="name" isRequired>
            <Label className="text-xs uppercase tracking-widest text-white/60">
              Name
            </Label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input name="name" placeholder="Your name" className="pl-10 h-12 w-full bg-white/5 border border-white/10 text-white rounded-xl" />
            </div>
          </TextField>

          <TextField name="email" isRequired>
            <Label className="text-xs uppercase tracking-widest text-white/60">
              Email
            </Label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input name="email" placeholder="you@example.com" className="pl-10 h-12 w-full bg-white/5 border border-white/10 text-white rounded-xl" />
            </div>
          </TextField>

          <TextField name="password" isRequired>
            <Label className="text-xs uppercase tracking-widest text-white/60">
              Password
            </Label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input name="password" type="password" placeholder="••••••••" className="pl-10 h-12 w-full bg-white/5 border border-white/10 text-white rounded-xl" />
            </div>
          </TextField>

          <TextField name="imageUrl" isRequired>
            <Label className="text-xs uppercase tracking-widest text-white/60">
              Image URL
            </Label>
            <div className="relative">
              <FaLink className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input name="imageUrl" placeholder="https://image.com/photo.jpg" className="pl-10 h-12 w-full bg-white/5 border border-white/10 text-white rounded-xl" />
            </div>
          </TextField>

          <Button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2"
          >
            Create Account <FaArrowRight className="text-sm" />
          </Button>

        </Form>

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