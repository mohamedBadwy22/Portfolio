"use client";

import { ThemeProvider } from "next-themes";

export default function Provider({ children }: { children: React.ReactNode }) {

  const scriptProps = typeof window === "undefined" 
    ? undefined 
    : ({ type: "application/json" } as const);

  return (
    <ThemeProvider scriptProps={scriptProps} attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}