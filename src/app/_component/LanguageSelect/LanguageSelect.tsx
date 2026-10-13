"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";


export default function LanguageSelect() {

    const router = useRouter();
    const pathname = usePathname();
    const {locales} = routing;
    const locale =  useLocale();

    function changeLocale(value: string) {
        router.replace(
            {pathname},
            {locale: value}
        )
    }

  return (
    <>
      <select onChange={(e)=>changeLocale(e.target.value)} value={locale} className="bg-white dark:bg-gray-300 outline-2 dark:outline-emerald-800 p-2 rounded-full hover:cursor-pointer hover:bg-gray-400 transition-all duration-300 focus:bg-gray-400 font-medium hover:text-black focus:text-black">
        {locales.map((lang,index)=>{
            return (
                <option key={index} value={lang}>
                    {lang.toUpperCase()}
                </option>
            )
        })}
      </select>
    </>
  );
}
