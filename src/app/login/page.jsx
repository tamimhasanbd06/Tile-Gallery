"use client";

import React, { useState } from "react";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  


  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message || "Login failed");
        return;
      }

      if (data) {
        router.push("/");
      }
    } catch (err) {
      setErrorMsg(err?.message || "Something went wrong");
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
      setErrorMsg("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-6">
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

        

        {errorMsg && (
          <p className="text-red-500 text-sm text-center mt-3">
            {errorMsg}
          </p>
        )}

        
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-500 uppercase">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        
        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          
          
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


          <TextField name="password" isRequired>
            <Label className="text-xs uppercase tracking-widest text-gray-600">
              Password
            </Label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 h-11 w-full bg-white border border-gray-300 rounded-xl text-sm"
              />
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
          Don t have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-medium">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}