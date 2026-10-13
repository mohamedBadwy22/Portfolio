import cybervaultImage from "../../../public/images/cybervault/cybervault.systems.png";
import socialAppImage from "../../../public/images/social-media/hero.png";
import ecommerceAppImage from "../../../public/e-commerce.png";
import sarahaImage from "../../../public/sarahaApp-thumbnail.jpg";
import type { Project, ProjectDetails, projectMetadata, Projects } from "@/types/project";

import ar from "../../../messages/ar.json";
import de from "../../../messages/de.json";
import en from "../../../messages/en.json";
import { notFound } from "next/navigation";

export type Locale = "en" | "de" | "ar";

const messages = { en, de, ar };

export function getProjects(locale: Locale): Projects {
  const projectMessages = messages[locale].Projects.Project;

  const cyberVault: Project = {
    name: projectMessages.CyberVault.Card.name,
    description: projectMessages.CyberVault.Card.description,
    image: cybervaultImage,
    imageAlt: projectMessages.CyberVault.Card.imageAlt,
    href: "/projects/cybervault",
    buttonText: projectMessages.CyberVault.Card.buttonText,
  };

  const socialMediaApp: Project = {
    name: projectMessages.SocialMedia.Card.name,
    description: projectMessages.SocialMedia.Card.description,
    image: socialAppImage,
    imageAlt: projectMessages.SocialMedia.Card.imageAlt,
    href: "/projects/social-app",
    buttonText: projectMessages.SocialMedia.Card.buttonText,
  };

  const eCommercePlatform: Project = {
    name: projectMessages.Ecommerce.Card.name,
    description: projectMessages.Ecommerce.Card.description,
    image: ecommerceAppImage,
    imageAlt: projectMessages.Ecommerce.Card.imageAlt,
    href: "/projects/e-commerce",
    buttonText: projectMessages.Ecommerce.Card.buttonText,
  };

  const sarahaApp: Project = {
    name: projectMessages.SarahaApp.Card.name,
    description: projectMessages.SarahaApp.Card.description,
    image: sarahaImage,
    imageAlt: projectMessages.SarahaApp.Card.imageAlt,
    href: "/projects/saraha-app",
    buttonText: projectMessages.SarahaApp.Card.buttonText,
  };

  return {
    all: [cyberVault, socialMediaApp, eCommercePlatform, sarahaApp],
    frontend: [cyberVault, socialMediaApp, eCommercePlatform],
    backend: [cyberVault, sarahaApp],
    fullstack: [cyberVault],
  };
}

export function getCybervault(locale: Locale): ProjectDetails {
  const projectMessages = messages[locale].Projects.Project.CyberVault.Details;

  return projectMessages;
}
export function getEcommerce(locale: Locale): ProjectDetails {
  const projectMessages = messages[locale].Projects.Project.Ecommerce.Details;

  return projectMessages;
}
export function getSarahaApp(locale: Locale): ProjectDetails {
  const projectMessages = messages[locale].Projects.Project.SarahaApp.Details;

  return projectMessages;
}
export function getSocialMedia(locale: Locale): ProjectDetails {
  const projectMessages = messages[locale].Projects.Project.SocialMedia.Details;

  return projectMessages;
}

export function getProjectMetadata(
  projectName: string,
  locale: Locale,
): projectMetadata {
  const project = getProjects(locale).all.find((item) =>
    item.href.endsWith(`/projects/${projectName}`),
  );

  if (!project) {
    return notFound();
  }

  const localizedTitles = {
    en: `${project.name} | Mohamed Badwy`,
    ar: `${project.name} | محمد بدوي`,
    de: `${project.name} | Mohamed Badwy`,
  };

  const localizedRoutes = {
    en: `https://mohamedbadwy.me/en/projects/${projectName}`,
    ar: `https://mohamedbadwy.me/ar/projects/${projectName}`,
    de: `https://mohamedbadwy.me/de/projects/${projectName}`,
  };

  return {
    title: localizedTitles[locale],
    description: project.description,
    alternates: {
      canonical: localizedRoutes[locale],
      languages: localizedRoutes,
    },
  };
}
