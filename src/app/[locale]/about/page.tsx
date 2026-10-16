import AboutCard from "@/app/_component/AboutCard/AboutCard";
import MyJourney from "@/app/_component/MyJourney/MyJourney";
import MySkills from "@/app/_component/MySkills/MySkills";
import Image from "next/image";
import inGreen from "../../../../public/inGreen.png";
import { ImLocation2, ImLoop } from "react-icons/im";
import { RiGraduationCapFill, RiTeamFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { LuFileDown } from "react-icons/lu";
import { BiSolidBrain } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { useLocale, useTranslations } from "next-intl";
import { IoMail } from "react-icons/io5";
import SocialIcon from "@/app/_component/SocialIcon/SocialIcon";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "@/app/_data/projects";
import AnimatedSection from "@/app/_component/AnimatedSection/AnimatedSection";


export async function generateMetadata(
  { params }: { params: Promise<{ locale : Locale }> },
): Promise<Metadata> {

  // read route params
  const { locale } = await params
  
  switch (locale) {
    case "en":
      return {
        title: "About Me | Mohamed Badwy",
        description: "Learn more about Mohamed Badwy, a passionate software engineer and full stack developer, his journey, skills, and projects in the world of software engineering from the beginning to the present.",
        alternates: {
          canonical: "https://mohamedbadwy.me/en/about",
          languages:{
            en : "https://mohamedbadwy.me/en/about",
            ar : "https://mohamedbadwy.me/ar/about",
            de : "https://mohamedbadwy.me/de/about",
          }
        }
      };
    case "ar":
      return {
        title: "عنّي | محمد بدوي",
        description: "تعرف على محمد بدوي، مهندس برمجيات متحمس ومبرمج كامل الأطراف، رحلته، مهاراته، ومشاريعه في عالم هندسة البرمجيات من البداية حتى الآن.",
        alternates: {
          canonical: "https://mohamedbadwy.me/ar/about",
          languages:{
            en : "https://mohamedbadwy.me/en/about",
            ar : "https://mohamedbadwy.me/ar/about",
            de : "https://mohamedbadwy.me/de/about",
          }
        }
      };
    case "de":
      return {
        title: "Über mich | Mohamed Badwy",
        description: "Erfahren Sie mehr über Mohamed Badwy, einen leidenschaftlichen Softwareingenieur und Full-Stack-Entwickler, seine Reise, Fähigkeiten und Projekte in der Welt der Softwareentwicklung von Anfang an bis heute.",
        alternates: {
          canonical: "https://mohamedbadwy.me/de/about",
          languages:{
            en : "https://mohamedbadwy.me/en/about",
            ar : "https://mohamedbadwy.me/ar/about",
            de : "https://mohamedbadwy.me/de/about",
          }
        }
      };

    default:
      return notFound();
  }
}

export default function About() {
  const t = useTranslations("About");
  const aboutCards = [
    {
      iconComponent: <BiSolidBrain />,
      title: t("Details.CharacteristicsCards.Card1.title"),
      description: t("Details.CharacteristicsCards.Card1.description"),
    },
    {
      iconComponent: <AiFillThunderbolt />,
      title: t("Details.CharacteristicsCards.Card2.title"),
      description: t("Details.CharacteristicsCards.Card2.description"),
    },
    {
      iconComponent: <RiTeamFill />,
      title: t("Details.CharacteristicsCards.Card3.title"),
      description: t("Details.CharacteristicsCards.Card3.description"),
    },
    {
      iconComponent: <ImLoop />,
      title: t("Details.CharacteristicsCards.Card4.title"),
      description: t("Details.CharacteristicsCards.Card4.description"),
    },
  ];
  const socialIcons = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="text-xl" />,
      href: "https://www.linkedin.com/in/mohamed-badwy-96a34322a/",
    },
    {
      name: "GitHub",
      icon: <TbBrandGithubFilled className="text-xl" />,
      href: "https://github.com/mohamedBadwy22",
    },
    {
      name: "Email",
      icon: <IoMail className="text-xl" />,
      href: "mailto:mohamed.badwy.dev@gmail.com",
    }
  ];
  const locale = useLocale();

  return (
    <div className="min-h-screen m-4 xl:m-8">
      <div className="container relative flex flex-col items-center md:flex-row md:justify-evenly md:items-start gap-2.5 lg:gap-4">
        {/* Profile Card Section */}
        <AnimatedSection
        className={'md:sticky md:top-0 md:left-0 md:right-0 w-full sm:w-10/12 md:w-5/12 lg:w-4/12 2xl:w-3/12'}
        initial={locale === "ar" ? { opacity: 0, x: 60 } : { opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 , ease: "easeInOut" }} 
        >
          <div className="bg-emerald-500/10 dark:bg-emerald-800/10 shadow-lg flex flex-col gap-4 p-4 rounded-2xl">
            {/* Photo of mohamed badwy */}
            <Image
              priority
              className="sm:max-w-xs max-w-2xs md:max-w-3xs lg:max-w-2xs xl:max-w-xs self-center bg-emerald-500 dark:bg-emerald-800 p-3 rounded-[60%_40%_40%_60%/60%_60%_40%_40%]"
              src={inGreen}
              alt="photo of mohamed badwy"
            />

            {/* name and title */}
            <div className="md:ms-3.5 after:content[''] after:block after:w-full after:h-px after:bg-gray-300 dark:after:bg-gray-600 after:mt-2.5">
              <h2 className="text-2xl xl:text-3xl font-black mb-4 text-center md:text-start">
                {t("Profile.Name")}
                <span className="text-emerald-500 block text-xl font-bold">
                  {t("Profile.Title")}
                </span>
              </h2>
            </div>

            {/* social media links and cv */}
            <div className="flex flex-col items-center gap-4 mt-4">
              <a
                href="/mohamed_badwy_cv.pdf"
                download={"mohamed_badwy_cv.pdf"}
                className="w-10/12 text-center bg-emerald-500 dark:bg-emerald-500 dark:text-white dark:hover:bg-gray-300 dark:hover:text-black dark:hover:outline-2 dark:outline-black rounded-full p-3.5 font-semibold  gap-1 hover:bg-emerald-800 text-white transition-all duration-300 cursor-pointer sm:flex sm:justify-center sm:items-center "
              >
                {t("Profile.DownloadButton")}{" "}
                <LuFileDown className="inline-block" />
              </a>

              <div className="flex items-center gap-4">
                {socialIcons.map((icon, index) => {
                  return (
                    <SocialIcon key={index} name={icon.name} href={icon.href} icon={icon.icon} />
                  );
                })}
              </div>
            </div>

            {/* List : location, education, and skills */}
            <ul className="flex flex-col gap-2.5 my-3.5">
              <li className="my-1 flex items-center gap-2">
                <ImLocation2 className="text-emerald-500 rounded-full text-3xl" />{" "}
                <span className="text-lg">
                  {t("Profile.ProfileList.Location.Title")}
                </span>
              </li>

              <li className="mt-1 mb-3 relative flex items-center gap-2">
                <RiGraduationCapFill className="text-emerald-500 rounded-full text-3xl" />{" "}
                <span className="text-lg">
                  {t("Profile.ProfileList.Education.Title")}
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400 absolute top-full inset-s-8">
                  {t("Profile.ProfileList.Education.Description")}
                </p>
              </li>

              <li className="mt-1 mb-3 relative flex items-center gap-2">
                <FaCode className="text-emerald-500 rounded-full text-3xl" />{" "}
                <span className="text-lg">
                  {t("Profile.ProfileList.JobTitle.Title")}
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400 absolute top-full inset-s-8">
                  {t("Profile.ProfileList.JobTitle.Description")}
                </p>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* About & Details Section */}
        <AnimatedSection
          className={"mt-6 md:m-0 md:p-3 flex flex-col gap-3.5 w-full md:w-7/12 lg:w-8/12"}
          initial={locale === "ar" ? { opacity: 0, x: -60 } : { opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 , ease: "easeInOut" }} 
        >
          {/* Text and Paragraphs */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl dark:text-gray-300 font-black mb-2">
              <span className="block text-emerald-500 text-3xl font-black ">
                {t("Details.TextAndParagraphs.Heading")}
              </span>
              {t("Details.TextAndParagraphs.Title")}
            </h1>
            <p>{t("Details.TextAndParagraphs.TechnicalParagraph")}</p>
            <p>{t("Details.TextAndParagraphs.PersonalParagraph")}</p>
          </div>

          {/* Cards */}
          <div
            className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 relative after:content[''] after:absolute after:block after:w-full after:h-px after:top-[105%] after:bg-gray-300 dark:after:bg-gray-600 after:mt-2.5 after:mx-auto"
          >
            {aboutCards.map((card, index) => {
              return <AboutCard key={index} card={card} index={index} />;
            })}
          </div>

          {/* Timeline */}
          <div className="mb-4 relative after:absolute after:content[''] after:block after:w-full after:h-px after:bg-gray-300 dark:after:bg-gray-600 after:mt-2.5 after:mx-auto">
            <div className="my-3.5">
              <div className="flex flex-col gap-1 mb-4">
                <h2 className="font-bold text-3xl text-emerald-500">
                  {t("Details.Timeline.Heading")}
                </h2>
                <p className="text-black dark:text-white ms-3.5 text-xl">
                  {t("Details.Timeline.Title")}
                </p>
              </div>
              <MyJourney />
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-1 mb-4">
            <h2 className="font-bold text-3xl text-emerald-500">
              {t("Details.Skills.Heading")}
            </h2>
            <p className="text-black dark:text-white ms-3.5 text-xl">
              {t("Details.Skills.Title")}
            </p>
          </div>
          <MySkills />
        </AnimatedSection>
      </div>
    </div>
  );
}
