"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Aos from "aos";
import "aos/dist/aos.css";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // Inititate AOS
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
