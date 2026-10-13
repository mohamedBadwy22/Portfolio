import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

export default function NavDropdownMenu({
  linksArr,
  setIsOpen,
}: {
  linksArr: { href: string; label: string }[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useTranslations("NavBar");

  return (
    <>
      <div className="absolute left-0 right-0 top-full flex flex-col justify-center items-center gap-2 py-5 px-2 rounded-4xl bg-white dark:bg-gray-200">
        <div className="flex gap-2 justify-around items-center w-full">
          <ThemeToggle />
          <LanguageSelect />
        </div>
        {linksArr.map((link) => {
          return (
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              key={link.label}
              href={link.href}
              className="hover:bg-emerald-500/60 hover:rounded-full hover:text-white w-full cursor-pointer my-1.5 p-2 text-2xl font-bold text-center transition-all duration-300 dark:hover:bg-gray-400 "
            >
              {t(link.label)}
            </Link>
          );
        })}
      </div>
    </>
  );
}
