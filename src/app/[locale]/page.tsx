import { LuFileDown } from "react-icons/lu";
import { ProfileBackground } from "../_component/ProfileBackground/ProfileBackground";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import profileImage from "../../../public/profile.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import SocialIcon from "../_component/SocialIcon/SocialIcon";
import AnimatedSection from "../_component/AnimatedSection/AnimatedSection";

export default function Home() {
  const t = useTranslations("Home");
  const socialIcons = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/mohamed-badwy-96a34322a/",
    },
    {
      name: "GitHub",
      icon: <TbBrandGithubFilled />,
      href: "https://github.com/mohamedBadwy22",
    },
  ];

  return (
    <>
      <div className="container overflow-hidden min-h-screen flex flex-col md:flex-row justify-evenly items-center gap-4">
        {/* data section */}
        <AnimatedSection
        className={"h-screen md:h-max flex flex-col justify-center px-3 my-3 md:px-6 max-w-sm sm:max-w-md xl:max-w-xl"}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 , ease: "easeInOut" }} 
        >
          {/* profile name and title */}
          <h1 className="text-6xl lg:text-6xl xl:text-7xl font-black">
            {t("Name")}{" "}
            <span className="text-emerald-500 dark:text-emerald-800 inline-block align-top mt-4 mb-2.5 text-xl font-bold">
              {t("Title")}
            </span>
          </h1>

          {/* description text */}
          <p className="dark:text-mist-200">
            {t("Description1")} <strong>{t("Strong1")}</strong>
            {t("Comma")} <strong>{t("Strong2")}</strong>
            {t("Comma")} {t("And")}
            <strong> {t("Strong3")}</strong> {t("Description2")}
          </p>
          <Link
            href="/about"
            className="flex items-center mt-0.5 w-fit hover:underline hover:text-emerald-500 dark:hover:text-emerald-800 hover:transform hover:translate-x-3 rtl:hover:-translate-x-3 font-semibold transition-all duration-300"
          >
            {t("AboutAnchor")}
            <FaArrowRightLong className="inline-block mx-1 rtl:rotate-180" />
          </Link>

          {/* buttons and links */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="/mohamed_badwy_cv.pdf"
              download={"mohamed_badwy_cv.pdf"}
              className="bg-emerald-500 dark:bg-emerald-800 dark:text-mist-200 dark:hover:text-white dark:hover:bg-emerald-500 rounded-full p-3.5 font-semibold  gap-1 hover:bg-emerald-800 text-white transition-all duration-300 cursor-pointer sm:flex sm:justify-center sm:items-center text-sm md:text-lg"
            >
              {t("DownloadButton")} <LuFileDown className="inline-block" />
            </a>
            {socialIcons.map((icon, index) => {
              return (
                <SocialIcon key={index} name={icon.name} href={icon.href} icon={icon.icon} />
              );
            })}
          </div>

        </AnimatedSection>
        
        {/* profile image section */}
        <AnimatedSection
        className={"relative z-10 overflow-y-clip"}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 , ease: "easeInOut" }} 
        >
          <Image
            priority
            className="max-w-2xs"
            src={profileImage}
            alt="photo of mohamed badwy"
          />
          <ProfileBackground />
        </AnimatedSection>
      </div>
    </>
  );
}
