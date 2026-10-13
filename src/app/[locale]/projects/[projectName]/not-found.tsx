import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
): Promise<Metadata> {
  const { locale } = await params;

  switch (locale) {
    case "en":
      return {
        title: "Project Not Found | Mohamed Badwy",
        description: "The project you are looking for could not be found.",
        robots: {
          index: false,
          follow: false,
        },
      };
    case "ar":
      return {
        title: "المشروع غير موجود | محمد بدوي",
        description: "تعذر العثور على المشروع الذي تبحث عنه.",
        robots: {
          index: false,
          follow: false,
        },
      };
    case "de":
      return {
        title: "Projekt nicht gefunden | Mohamed Badwy",
        description: "Das gesuchte Projekt konnte nicht gefunden werden.",
        robots: {
          index: false,
          follow: false,
        },
      };
    default:
      return notFound();
  }
}

export default function NotFound() {
  const t = useTranslations("Projects.NotFound");

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black">
        <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-emerald-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              {t("Title")}
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {t("Description")}
            </p>
            <Link
              href={"/projects"}
              className="bg-emerald-500 mx-auto max-w-2xs dark:bg-emerald-800 dark:text-mist-200 dark:hover:text-white dark:hover:bg-emerald-500 rounded-full p-3.5 font-semibold  gap-1 hover:bg-emerald-800 text-white transition-all duration-300 cursor-pointer sm:flex sm:justify-center sm:items-center text-sm md:text-lg"
            >
              {t("ButtonText")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
