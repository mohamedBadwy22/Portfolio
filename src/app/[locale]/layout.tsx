import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import Provider from "../_component/ThemeProvider/Provider";
import { NextIntlClientProvider, useLocale } from "next-intl";
import "./globals.css";
import { routing } from "@/i18n/routing";
import NavBar from "../_component/NavBar/NavBar";
import Footer from "../_component/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import { notFound } from "next/navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
): Promise<Metadata> {
  const { locale } = await params;
  const languages = {
    en: "https://mohamedbadwy.me/en",
    ar: "https://mohamedbadwy.me/ar",
    de: "https://mohamedbadwy.me/de",
  };

  const localizedMetadata: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
    en: {
      title: "Mohamed Badwy | Full-Stack Developer",
      description:
        "Explore Mohamed Badwy's portfolio, including his journey, skills, and projects as a software engineer and full-stack developer.",
      keywords: ["Mohamed Badwy", "Full-Stack Developer", "Software Engineer", "React", "Next.js", "TypeScript", "Portfolio", "Web Development", "Projects"],
    },
    ar: {
      title: "محمد بدوي | مطور Full-Stack",
      keywords: ["محمد بدوي", "مطور Full-Stack", "مهندس برمجيات", "React", "Next.js", "TypeScript", "بورتفوليو", "تطوير الويب", "مشاريع"],
      description:
        "استكشف معرض أعمال محمد بدوي، وتعرّف على رحلته ومهاراته ومشاريعه كمهندس برمجيات ومطور تطبيقات متكاملة.",
    },
    de: {
      title: "Mohamed Badwy | Full-Stack-Entwickler",
      keywords: ["Mohamed Badwy", "Full-Stack-Entwickler", "Software-Ingenieur", "React", "Next.js", "TypeScript", "Portfolio", "Webentwicklung", "Projekte"],
      description:
        "Entdecken Sie das Portfolio von Mohamed Badwy mit seiner beruflichen Entwicklung, seinen Fähigkeiten und Projekten als Softwareingenieur und Full-Stack-Entwickler.",
    },
  } as const;

  if (!(locale in localizedMetadata)) {
    return notFound();
  }

  return {
    ...localizedMetadata[locale as keyof typeof localizedMetadata],
    alternates: {
      canonical: languages[locale as keyof typeof languages],
      languages,
    },
    icons: {
      icon: "/logo.png",
    },
    metadataBase: new URL(languages[locale as keyof typeof languages]),
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
      },
    },
    openGraph:{
      title: localizedMetadata[locale as keyof typeof localizedMetadata].title,
      description: localizedMetadata[locale as keyof typeof localizedMetadata].description,
      url: languages[locale as keyof typeof languages],
      siteName: "Mohamed Badwy | Full-Stack Developer",
      images: [
        {
          url: "https://mohamedbadwy.me/logo.png",
          width: 800,
          height: 600,
        },
      ],
      locale: locale,
      type: "website",
    } 
  };
}

export default function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = useLocale();
  const { defaultLocale } = routing;

  return (
    <html
    suppressHydrationWarning
      lang={locale ? locale : defaultLocale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${notoSansArabic.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshag/coloured-icons@1.9.7/app/ci.min.css"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col relative"
      >
        <Provider>
          <NextIntlClientProvider>
            <NavBar />
            <main className="min-h-screen">{children}</main>
            <ToastContainer />
            <Footer />
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
