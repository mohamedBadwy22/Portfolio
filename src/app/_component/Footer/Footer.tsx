import { useTranslations } from "next-intl";

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <>
      <footer className="text-center select-none relative bottom-0 left-0 right-0 text-white dark:text-black bg-emerald-500 dark:bg-emerald-800">
        <div className="container sm:text-sm text-xs py-2">
            <p>
              &copy; {year} <a href="/" className="underline italic cursor-pointer">{t("Link")}</a>. {t("Copyright")}
            </p>
        </div>
      </footer>
    </>
  );
}
