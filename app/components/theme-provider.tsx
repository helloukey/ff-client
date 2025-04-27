"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Aos from "aos";
import "aos/dist/aos.css";
import { createClient } from "@/lib/supabase";
import { useStore } from "@/store";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { updateUserState } = useStore((state) => state);

  // Inititate AOS
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
    const getUser = async () => {
      const supabase = await createClient();
      const { error } = await supabase.auth.getUser();
      if (error) {
        updateUserState("unavailable");
        return;
      } else {
        updateUserState("user");
      }
    };

    getUser();
  }, [updateUserState]);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
