import ProjectFilter from "@/app/_component/ProjectFilter/ProjectFilter";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { IoBuild } from "react-icons/io5";
import { notFound } from "next/navigation";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
): Promise<Metadata> {
  const { locale } = await params;

  switch (locale) {
    case "en":
      return {
        title: "My Projects | Mohamed Badwy",
        description:
          "Explore projects built by Mohamed Badwy, a software engineer and full-stack developer creating practical web applications and digital experiences.",
        alternates: {
          canonical: "https://mohamedbadwy.me/en/projects",
          languages: {
            en: "https://mohamedbadwy.me/en/projects",
            ar: "https://mohamedbadwy.me/ar/projects",
            de: "https://mohamedbadwy.me/de/projects",
          },
        },
      };
    case "ar":
      return {
        title: "مشاريعي | محمد بدوي",
        description:
          "استكشف المشاريع التي أنشأها محمد بدوي، مهندس البرمجيات ومطور تطبيقات الويب المتكاملة، لبناء حلول وتجارب رقمية عملية.",
        alternates: {
          canonical: "https://mohamedbadwy.me/ar/projects",
          languages: {
            en: "https://mohamedbadwy.me/en/projects",
            ar: "https://mohamedbadwy.me/ar/projects",
            de: "https://mohamedbadwy.me/de/projects",
          },
        },
      };
    case "de":
      return {
        title: "Meine Projekte | Mohamed Badwy",
        description:
          "Entdecken Sie die Projekte von Mohamed Badwy, Softwareingenieur und Full-Stack-Entwickler, der praktische Webanwendungen und digitale Lösungen entwickelt.",
        alternates: {
          canonical: "https://mohamedbadwy.me/de/projects",
          languages: {
            en: "https://mohamedbadwy.me/en/projects",
            ar: "https://mohamedbadwy.me/ar/projects",
            de: "https://mohamedbadwy.me/de/projects",
          },
        },
      };
    default:
      return notFound();
  }
}

export default function ProjectsPage() {
  
  const t = useTranslations("Projects");

  return (
    <>
      <div className="container my-5">
        <div className="flex flex-col gap-4">
          {/* Heading and Description */}
          <div className="w-10/12 my-3.5 flex self-center justify-center items-center">
            <div className="flex flex-col justify-center gap-2 max-w-2xl">
              <h1 className="md:text-5xl md:justify-center text-3xl sm:text-4xl text-emerald-500 font-black flex items-center gap-2">
                {t("Heading")}{" "}
                <IoBuild className="inline-block text-emerald-500 rtl:-scale-100 rtl:rotate-90" />
              </h1>
              <p className="md:text-lg md:text-center dark:text-mist-200">
                {t("Description")}
              </p>
            </div>
          </div>

          <ProjectFilter />
        </div>
      </div>
    </>
  );
}
