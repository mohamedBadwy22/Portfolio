"use client";

import { useSyncExternalStore } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const { setTheme, resolvedTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="bg-white size-10 flex justify-center items-center text-xl dark:bg-gray-300 dark:outline-emerald-800 p-2 outline-2 rounded-full hover:text-black font-medium hover:cursor-pointer hover:bg-gray-400 transition-all duration-300"
    >
      {resolvedTheme === "light" ? <LuMoon /> : <LuSun />}
    </button>
  );
}
