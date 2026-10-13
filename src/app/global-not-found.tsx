"use client";
import "./[locale]/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const supportedLocales = ["en", "de", "ar"];
const content = {
  en: {
    title: "Something's missing.",
    description:
      "Sorry, we can't find that page. You'll find lots to explore on the home page.",
    button: "Back to Homepage",
  },
  de: {
    title: "Etwas fehlt.",
    description:
      "Entschuldigung, wir können diese Seite nicht finden. Sie finden viele Dinge zum Entdecken auf der Startseite.",
    button: "Zurück zur Startseite",
  },
  ar: {
    title: "شيء مفقود",
    description:
      "عذراً، لا يمكننا إيجاد هذه الصفحة. ستجد الكثير للتصفح على الصفحة الرئيسية",
    button: "العودة إلى الصفحة الرئيسية",
  },
};

export default function GlobalNotFound() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();
  const pathnameLocale = pathname?.split("/")[1];
  const currentLocale = supportedLocales.includes(pathnameLocale)
    ? pathnameLocale
    : "en";

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
    }
  }, []);
  
  return (
    <html
      suppressHydrationWarning
      lang={currentLocale!}
      className={`${inter.className} ${theme === "dark" ? "dark" : ""} antialiased`}
    >
      <body suppressHydrationWarning>
        <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black">
          <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-emerald-500">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                {content[currentLocale as keyof typeof content].title}
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                {content[currentLocale as keyof typeof content].description}
              </p>
              <Link
                href={"/" + currentLocale}
                className="bg-emerald-500 mx-auto max-w-2xs dark:bg-emerald-800 dark:text-mist-200 dark:hover:text-white dark:hover:bg-emerald-500 rounded-full p-3.5 font-semibold  gap-1 hover:bg-emerald-800 text-white transition-all duration-300 cursor-pointer sm:flex sm:justify-center sm:items-center text-sm md:text-lg"
              >
                {content[currentLocale as keyof typeof content].button}
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
