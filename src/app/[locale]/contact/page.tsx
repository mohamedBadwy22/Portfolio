import ContactForm from "@/app/_component/ContactForm/ContactForm";
import { FaLink } from "react-icons/fa";
import { FaLinkedinIn, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail, MdOutlineMyLocation } from "react-icons/md";
import { BsCalendar2CheckFill } from "react-icons/bs";
import ContactCard from "@/app/_component/ContactCard/ContactCard";
import { ContactDetails } from "@/types/contact";
import { IoMail } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import { RiWhatsappFill } from "react-icons/ri";
import SocialIcon from "@/app/_component/SocialIcon/SocialIcon";
import { useLocale, useTranslations } from "next-intl";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import AnimatedSection from "@/app/_component/AnimatedSection/AnimatedSection";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
): Promise<Metadata> {
  const { locale } = await params;

  switch (locale) {
    case "en":
      return {
        title: "Contact Me | Mohamed Badwy",
        description:
          "Have a project in mind or want to discuss an opportunity? Get in touch with Mohamed Badwy, a software engineer and full-stack developer.",
        alternates: {
          canonical: "https://mohamedbadwy.me/en/contact",
          languages: {
            en: "https://mohamedbadwy.me/en/contact",
            ar: "https://mohamedbadwy.me/ar/contact",
            de: "https://mohamedbadwy.me/de/contact",
          },
        },
      };
    case "ar":
      return {
        title: "تواصل معي | محمد بدوي",
        description:
          "هل لديك مشروع أو ترغب في مناقشة فرصة عمل؟ تواصل مع محمد بدوي، مهندس برمجيات ومطور Full-Stack.",
        alternates: {
          canonical: "https://mohamedbadwy.me/ar/contact",
          languages: {
            en: "https://mohamedbadwy.me/en/contact",
            ar: "https://mohamedbadwy.me/ar/contact",
            de: "https://mohamedbadwy.me/de/contact",
          },
        },
      };
    case "de":
      return {
        title: "Kontakt | Mohamed Badwy",
        description:
          "Sie haben ein Projekt oder möchten eine berufliche Möglichkeit besprechen? Kontaktieren Sie Mohamed Badwy, Softwareingenieur und Full-Stack-Entwickler.",
        alternates: {
          canonical: "https://mohamedbadwy.me/de/contact",
          languages: {
            en: "https://mohamedbadwy.me/en/contact",
            ar: "https://mohamedbadwy.me/ar/contact",
            de: "https://mohamedbadwy.me/de/contact",
          },
        },
      };
    default:
      return notFound();
  }
}

export default function Contact() {
  const t = useTranslations("Contact");
  const contactDetails: ContactDetails[] = [
    {
      icon: <MdEmail className="sm:text-2xl" />,
      title: t("Details.Email"),
      value: "mohamed.badwy.dev@gmail.com",
    },
    {
      icon: <FaPhoneFlip className="sm:text-2xl" />,
      title: t("Details.Phone"),
      value: "+20 12-7314-6719",
      forceLtr: true,
    },
    {
      icon: <MdOutlineMyLocation className="sm:text-2xl" />,
      title: t("Details.Location.Title"),
      value: t("Details.Location.Description"),
    },
    {
      icon: <BsCalendar2CheckFill className="sm:text-2xl" />,
      title: t("Details.Availability.Title"),
      value: t("Details.Availability.Description"),
    },
  ];
  const socialIcons = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="text-3xl" />,
      href: "https://www.linkedin.com/in/mohamed-badwy-96a34322a/",
    },
    {
      name: "Whatsapp",
      icon: <RiWhatsappFill className="text-3xl" />,
      href: "https://wa.me/1273146719",
    },
    {
      name: "GitHub",
      icon: <TbBrandGithubFilled className="text-3xl" />,
      href: "https://github.com/mohamedBadwy22",
    },
    {
      name: "Email",
      icon: <IoMail className="text-3xl" />,
      href: "mailto:mohamed.badwy.dev@gmail.com",
    },
  ];
  const locale = useLocale();

  return (
    <div className="container my-5">
      <div className="flex flex-col gap-4 mb-6">
        {/* Heading and Title */}
        <div className="w-10/12 my-3.5 flex self-center justify-center items-center">
          {/* Text */}
          <div className="flex flex-col justify-center gap-2 max-w-2xl">
            <h1 className="md:text-5xl md:justify-center text-4xl text-emerald-500 font-black flex items-center gap-2">
              {t("Heading")}{" "}
              <FaLink className="inline-block text-emerald-500" />
            </h1>
            <p className="md:text-lg md:text-center dark:text-mist-200">
              {t("Description")}
            </p>
          </div>
        </div>

        {/* contact form and details section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-3 lg:gap-4">
          {/* FormSection */}
          <AnimatedSection
          className={"select-none p-6 w-10/12 md:w-full lg:w-10/12 mx-auto md:mx-0 md:ms-auto shadow-lg dark:shadow-md md:shadow-2xl dark:shadow-emerald-800 border-2 rounded-2xl"}
          initial={ locale === "ar" ? { opacity: 0, x: 60 } : { opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 , ease: "easeInOut" }}
          >
            <ContactForm />
          </AnimatedSection>

          {/* DetailsSection */}
          <AnimatedSection 
          className={"p-6 w-10/12 md:w-full lg:w-10/12 flex flex-col gap-8 justify-evenly mx-auto md:mx-0 md:me-auto shadow-lg dark:shadow-md md:shadow-2xl dark:shadow-emerald-800 border-2 rounded-2xl"}
          initial={ locale === "ar" ? { opacity: 0, x: -60 } : { opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 , ease: "easeInOut" }}
          >
            <div className="justify-self-start flex flex-col sm:ms-4 md:ms-0 lg:ms-4 justify-center gap-2 sm:gap-4">
              {contactDetails.map((card, index) => {
                return <ContactCard key={index} card={card} />;
              })}
            </div>

            <div className="flex flex-col gap-4 md:ms-4">
              <h2 className="text-emerald-500 font-semibold text-xl md:text-3xl">
                {t("Details.SocialMedia")}
              </h2>
              <div className="flex items-center gap-4 md:gap-8">
                {socialIcons.map((icon, index) => {
                  return (
                    <SocialIcon key={index} name={icon.name} href={icon.href} icon={icon.icon} />
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
