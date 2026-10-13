import { StaticImageData } from "next/image";

export interface Project {
  name: string,
  description: string,
  image: StaticImageData,
  imageAlt: string,
  href: string,
  buttonText: string
}

export interface Projects {
  all: Project[];
  frontend: Project[];
  backend: Project[];
  fullstack: Project[];
}

export type ProjectCategory = keyof Projects;

export interface ProjectText {
  Title: string;
  Description: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ProjectScreenshot extends ProjectText {
  Src: string;
  Alt: string;
}

export interface ProjectDetails {
  HeroSection: {
    Title: string;
    Description: string;
    LiveDemoBtn: string;
    LiveHref: string;
    SourceCodeBtn: string;
    SourceHref: string;
  };
  TechStackSection: string;
  Overview: ProjectText;
  Feature: {Title: string; Items: ProjectFeature[]};
  Screenshot:{ Title: string; Items: ProjectScreenshot[]};
  ReturnBtn: string;
  ChallengesAndSolutions: {
    Title: string;
    Challenge: string;
    Solution: string;
    Items: {Challenge: string; Solution: string}[];
  } 
}

export interface projectMetadata {
  title: string;
  description: string;
  alternates: {
    canonical: string;
    languages: {
      en: string;
      ar: string;
      de: string;
    };
  };
}