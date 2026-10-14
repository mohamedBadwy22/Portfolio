import type { MetadataRoute } from "next";

const siteUrl = "https://mohamedbadwy.me";
const locales = ["en", "ar", "de"] as const;
const projectNames = ["cybervault", "social-app", "e-commerce", "saraha-app"] as const;
const pagePaths = ["", "about", "projects", "contact"] as const;

function localizedUrls(path: string) {
  return Object.fromEntries(
    locales.map((locale) => [
      locale,
      `${siteUrl}/${locale}${path ? `/${path}` : ""}`,
    ]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = pagePaths.map((path) => ({
    url: `${siteUrl}/en${path ? `/${path}` : ""}`,
    alternates: {
      languages: localizedUrls(path),
    },
    changeFrequency: "never" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projects = projectNames.map((projectName) => ({
    url: `${siteUrl}/en/projects/${projectName}`,
    alternates: {
      languages: localizedUrls(`projects/${projectName}`),
    },
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...projects];
}
