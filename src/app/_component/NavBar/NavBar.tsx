"use client";

import Logo from "../MyLogo/Logo";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import Separator from "../Separator/Separator";
import DropdownMenuBtn from "../DropdownMenuBtn/DropdownMenuBtn";
import NavDropdownMenu from "../NavDropdownMenu/NavDropdownMenu";

export default function NavBar() {
  const linksArr = [
    { href: "/", label: "Links.Home" },
    { href: "/about", label: "Links.About" },
    { href: "/contact", label: "Links.Contact" },
    { href: "/projects", label: "Links.Projects" },
  ];

  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("NavBar");

  useEffect(() => {
    function displayWindowSize() {
      const width = window.innerWidth;
      if (width > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", displayWindowSize);
    return () => window.removeEventListener("resize", displayWindowSize);
  }, [isOpen]);

  return (
    <>
      <nav className="sticky md:relative inset-0 select-none text-emerald-500 dark:text-black z-50">
        <div className="container">
          <div className="relative dark:bg-emerald-800 bg-emerald-500 shadow-2xl border border-black md:border-0  px-4 py-2.5 rounded-full my-3 w-10/12 mx-auto flex justify-between items-center">
            {/* Logo On The Right*/}
            <Link
              onClick={() => {
                if (isOpen) {
                  setIsOpen(false);
                }
              }}
              className="ps-2"
              href="/"
            >
              <Logo />
            </Link>

            {/* Links In Center */}
            <div className="hidden gap-3.5 md:flex md:justify-center md:items-center">
              {linksArr.map((link) => {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`${path === link.href ? "text-emerald-900 p-3 font-black text-2xl dark:text-emerald-500 cursor-default" : "p-3 dark:bg-gray-300 dark:hover:bg-gray-400 dark:hover:text-black outline-2 dark:outline-0 rounded-full bg-white font-medium hover:bg-gray-400 hover:text-black transition-all duration-300"}`}
                  >
                    {t(link.label)}
                  </Link>
                );
              })}
            </div>

            {/* Icons On The Left */}
            <div className="flex gap-2 dark:text-black">
              <DropdownMenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />

              <div className="hidden md:flex gap-2 ">
                <ThemeToggle />
                <LanguageSelect />
              </div>
            </div>

            {/* Dropdown Menu */}
            {isOpen ? (
              <NavDropdownMenu linksArr={linksArr} setIsOpen={setIsOpen} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>

      {isOpen ? <Separator /> : <></>}
    </>
  );
}
