"use client";

import Image from "next/image";
import login from "@/public/login.png";
import { Button } from "@/components/ui/button";
import google from "@/public/logo-google.svg";
import apple from "@/public/logo-apple.svg";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useStore } from "@/store";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { updateUserState } = useStore((state) => state);

  // Handle Signup
  const handleSignup = async () => {
    // Return if email & password are empty
    if (!email || !password) return;

    setLoading(true);
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    // Reset fields if success
    if (data) {
      updateUserState("user");
      setEmail("");
      setPassword("");
    }

    // Toast
    if (error) {
      toast(error.message);
    } else {
      toast("Sign Up Successful!");
      router.push("/");
    }
    setLoading(false);
  };

  // Handle Signup
  const handleLogin = async () => {
    // Return if email & password are empty
    if (!email || !password) return;

    setLoading(true);
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    // Reset fields if success
    if (data) {
      updateUserState("user");
      setEmail("");
      setPassword("");
    }

    // Toast
    if (error) {
      toast(error.message);
    } else {
      toast("Login Successful!");
      router.push("/");
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-[90vh] bg-white text-black grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <Image
        src={login}
        alt="login"
        className="hidden lg:block h-full"
        objectFit="cover"
      />
      <div className="flex flex-col w-full max-w-md mx-auto p-4 md:p-16">
        <h1 className="text-2xl font-bold text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <Button
          variant="outline"
          className="w-full mt-8 !border !border-black hover:text-gray-800 cursor-not-allowed"
        >
          <Image src={google} alt="google" width={24} height={24} /> Sign in
          with Google
        </Button>
        <Button
          variant="outline"
          className="w-full mt-4 !border !border-black hover:text-gray-800 cursor-not-allowed"
        >
          <Image src={apple} alt="google" width={24} height={24} /> Sign in with
          Apple
        </Button>
        <div className="w-full flex flex-nowrap gap-2 my-4 items-center">
          <div className="w-full h-[2px] bg-gray-200"></div>
          <p className="text-sm">or</p>
          <div className="w-full h-[2px] bg-gray-200"></div>
        </div>
        {/* Email */}
        <Input
          type="email"
          placeholder="Email"
          className="border border-gray-400 mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        {/* Password */}
        <Input
          type="password"
          placeholder="Password"
          className="border border-gray-400 mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        {/* Forgot password */}
        <p className="text-xs font-light">
          Forgot password?
          <Link href="/login" className="font-bold">
            {" "}
            Reset
          </Link>
        </p>
        {/* Remember me */}
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="terms" className="border border-black" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        {/* Login */}
        <Button
          className="bg-ff rounded-full my-4 text-white cursor-pointer"
          onClick={isLogin ? handleLogin : handleSignup}
          disabled={loading}
        >
          {isLogin
            ? `${loading ? "Logging in..." : "Log In"}`
            : `${loading ? "Signing Up..." : "Sign Up"}`}
        </Button>
        {/* Sign up password */}
        <p className="text-xs font-light">
          {isLogin ? "Don't have account?" : "Already have account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-bold cursor-pointer"
          >
            {" "}
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
}
