"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PhoneCall, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store";
import { createClient } from "@/lib/supabase";
import { toast } from "sonner";

export default function Navbar() {
  const router = useRouter();
  const { userState, updateUserState } = useStore((state) => state);

  // Handle auth
  const handleAuth = async () => {
    const supabase = await createClient();
    if (userState === "user") {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast(error?.message);
      } else {
        updateUserState("unavailable");
        router.refresh();
      }
    } else if (userState === "unavailable") {
      router.push("/login");
    } else {
      return;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow">
      <div className="w-full flex h-16 items-center justify-between mx-auto px-4 md:px-16">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/ff-logo.png"
              alt="Milestone Learning"
              width={150}
              height={32}
              className="h-8"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6 text-black">
          <Link href="#" className="text-sm font-medium hover:text-green-700">
            About Us
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-green-700">
            What We Do
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-green-700">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-green-700">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex !border-green-900 !text-green-900 rounded-full cursor-pointer"
          >
            <PhoneCall className="mr-2 h-4 w-4" />
            <span>XXX-XXX-XXXX</span>
          </Button>
          <Button
            className="bg-ff hover:bg-green-900 text-white !px-8 rounded-full cursor-pointer"
            onClick={handleAuth}
            disabled={userState === "loading"}
          >
            <User />
            {userState === "loading"
              ? "Loading..."
              : userState === "user"
              ? "Logout"
              : "Login"}
          </Button>
        </div>
      </div>
    </header>
  );
}
