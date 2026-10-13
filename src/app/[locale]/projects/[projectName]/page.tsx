import { Link } from "@/i18n/navigation";
import { ProjectDetails, ProjectFeature } from "@/types/project";
import { notFound } from "next/navigation";
import { FiGithub } from "react-icons/fi";
import { FaArrowLeftLong, FaCode, FaShieldHalved, FaUsers } from "react-icons/fa6";
import { GrLogin } from "react-icons/gr";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { RxOpenInNewWindow } from "react-icons/rx";
import cyberVault from "../../../../../public/images/cybervault/cybervault.systems.png";
import ecommerce from "../../../../../public/e-commerce.png";
import socialMedia from "../../../../../public/images/social-media/hero.png";
import sarahaApp from "../../../../../public/sarahaApp-thumbnail.jpg";
import Image from "next/image";
import LineSeparator from "@/app/_component/LineSeparator/LineSeparator";
import { IoCloudUploadOutline, IoLockClosedOutline } from "react-icons/io5";
import { HiChevronDoubleRight } from "react-icons/hi";
import ScreenshotSlider from "@/app/_component/ScreenshotSlider/ScreenshotSlider";
import { getCybervault, getEcommerce, getProjectMetadata, getSarahaApp, getSocialMedia, Locale } from "@/app/_data/projects";
import type { StaticImageData } from "next/image";
import { BsBank2, BsPostcardFill } from "react-icons/bs";
import { FaShoppingCart, FaUserEdit } from "react-icons/fa";
import { RiImageUploadLine, RiSecurePaymentFill } from "react-icons/ri";
import { PiResizeFill } from "react-icons/pi";
import { TbShoppingCartHeart } from "react-icons/tb";
import { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: Locale; projectName: string }> },
): Promise<Metadata> {

  // read route params
  const { locale, projectName } = await params

  // fetch data
  const projectMetadata = getProjectMetadata(projectName, locale);


  return {
    title: projectMetadata.title,
    description: projectMetadata.description,
    alternates: {
      canonical: projectMetadata.alternates.canonical,
      languages: projectMetadata.alternates.languages
    }
  }
}

export default async function page({
  params
}: {
  params: Promise<{ locale:Locale,  projectName: string }>;
}) {
  const { locale, projectName } = await params;
  
  let project: ProjectDetails;
  let projectCover: StaticImageData;
  let technologies: string[];
  let projectFeatures: ProjectFeature[];
  const featuresIcons = {
    "cybervault": [
      <IoLockClosedOutline className="text-white text-2xl" />,
      <FaUsers className="text-white text-2xl" />,
      <BsBank2 className="text-white text-2xl" />,
      <FaShieldHalved className="text-white text-2xl" />,
      <FaUserEdit className="text-white text-2xl" />,
      <IoCloudUploadOutline className="text-white text-2xl" />
    ],
    "social-app": [
      <GrLogin className="text-white text-2xl" />,
      <BsPostcardFill className="text-white text-2xl" />,
      <TfiCommentsSmiley className="text-white text-2xl" />,
      <FaUserEdit className="text-white text-2xl" />,
      <RiImageUploadLine className="text-white text-2xl" />,
      <PiResizeFill className="text-white text-2xl" />
    ],
    "e-commerce": [
      <GrLogin className="text-white text-2xl" />,
      <FaShoppingCart className="text-white text-2xl" />,
      <RiSecurePaymentFill className="text-white text-2xl" />,
      <TbShoppingCartHeart className="text-white text-2xl" />,
      <FaUserEdit className="text-white text-2xl" />,
      <FaCode className="text-white text-2xl" />
    ],

    "saraha-app": [
      <GrLogin className="text-white text-2xl" />,
      <TfiCommentsSmiley className="text-white text-2xl" />,
      <FaCode className="text-white text-2xl" />
    ]
  }

  switch (projectName) {
    case "cybervault":
      project = getCybervault(locale);
      projectCover = cyberVault;
      technologies = [
        "Next.js",
        "TypeScript",
        "NextAuth",
        "React Hook Form",
        "Zod",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Sequelize",
        "Nodemailer",
        "Argon2",
        "express-rate-limit",
        "Vercel (planned)",
        "AWS (planned)",
      ];
      projectFeatures = project.Feature.Items.map((feature, index) => ({
        ...feature,
        icon: featuresIcons[projectName][index],
      }));
      break;
    case "social-app":
      project = getSocialMedia(locale);
      projectCover = socialMedia;
      technologies = [
        "React 19",
        "Vite",
        "JavaScript / JSX",
        "React Router DOM",
        "Axios",
        "TanStack React Query",
        "React Hook Form",
        "Zod",
        "HeroUI",
        "Tailwind CSS",
        "React Hot Toast",
        "React Icons",
        "Linked Posts REST API",
      ];
      projectFeatures = project.Feature.Items.map((feature, index) => ({
        ...feature,
        icon: featuresIcons[projectName][index],
      }));
      break;
    case "e-commerce":
      project = getEcommerce(locale);
      projectCover = ecommerce;
      technologies = ["Next.js", "React", "Real REST API"];
      projectFeatures = project.Feature.Items.map((feature, index) => ({
        ...feature,
        icon: featuresIcons[projectName][index],
      }));
      break;

    case "saraha-app":
      project = getSarahaApp(locale);
      projectCover = sarahaApp;
      technologies = [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST API (planned)",
      ];
      projectFeatures = project.Feature.Items.map((feature, index) => ({
        ...feature,
        icon: featuresIcons[projectName][index],
      }));
      break;

    default:
      notFound();
  }
  

  return (
    <>
      <div className="min-h-screen">
        <div className="container my-5">
          <div className="sm:w-10/12 my-3.5 mx-auto flex flex-col justify-center gap-4">
            {/* Back To Projects Btn */}
            <div className="self-start select-none">
              <Link
                href="/projects"
                className="flex items-center gap-1 text-emerald-500 dark:text-emerald-800 hover:underline hover:-translate-x-3 rtl:hover:translate-x-3 hover:text-emerald-800 dark:hover:text-emerald-500 transition-all duration-300"
              >
                <FaArrowLeftLong className="rtl:rotate-180" />
                {project.ReturnBtn}
              </Link>
            </div>

            {/* Project Hero */}
            <div className="relative flex flex-col lg:flex-row items-center gap-4 ">
              {/* Text & Description Section */}
              <div className="lg:w-1/2 flex flex-col gap-4">
                {/* Title & Description */}
                <h1 className="text-5xl font-black">{project.HeroSection.Title}</h1>
                <p className="w-10/12">
                  {project.HeroSection.Description}
                </p>

                {/* Links */}
                <div className="flex text-sm lg:text-[16px] sm:flex-row gap-4 mt-4">
                  {project.HeroSection.LiveHref && (
                    <a
                      href={project.HeroSection.LiveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="max-w-fit flex items-center gap-1 md:gap-0.5 lg:gap-1 cursor-pointer p-2.5 rounded-full bg-emerald-500 hover:bg-emerald-800 dark:bg-emerald-800 dark:hover:bg-emerald-500 text-white transition-all duration-300"
                    >
                      {project.HeroSection.LiveDemoBtn} <RxOpenInNewWindow />
                    </a>
                  )}
                  {project.HeroSection.SourceHref && (
                    <a
                      href={project.HeroSection.SourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="max-w-fit flex items-center gap-1 md:gap-0.5 lg:gap-1 cursor-pointer outline-emerald-500 dark:outline-emerald-800 outline-2 text-emerald-500 dark:text-emerald-800 hover:outline-black p-2 rounded-full hover:text-black dark:hover:text-white hover:cursor-pointer hover:bg-gray-400 dark:hover:bg-emerald-500 transition-all duration-300"
                    >
                      {project.HeroSection.SourceCodeBtn} <FiGithub />
                    </a>
                  )}
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2">
                <Image
                  src={projectCover}
                  className="rounded-lg shadow-lg"
                  alt="Project Image"
                  loading="eager"
                />
              </div>

              <LineSeparator />
            </div>

            {/* Technologies Used */}
            <div className="relative flex flex-col gap-2 mt-6">
              <h2 className="text-2xl text-emerald-500 font-bold">
                {project.TechStackSection}
              </h2>
              <div className="flex flex-wrap gap-4 mt-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <LineSeparator />
            </div>

            {/* Project Overview */}
            <div className="relative mt-6">
              <h2 className="text-2xl text-emerald-500 font-bold">{project.Overview.Title}</h2>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {project.Overview.Description}
              </p>

              <LineSeparator />
            </div>

            {/* Key Features */}
            <div className="relative mt-6">
              <h2 className="text-2xl mb-4 text-emerald-500 font-bold">{project.Feature.Title}</h2>

              {/* Feature Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                
                {projectFeatures!.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex flex-col border shadow-xl dark:shadow-xs dark:shadow-emerald-500 gap-2 rounded-2xl p-4 hover:scale-105 transition-all duration-300"
                  >
                    <span className="rounded-full p-2 bg-emerald-500 w-fit">
                      {feature.icon}
                    </span>

                    <strong className="text-lg">{feature.title}</strong>

                    <p className="text-gray-700 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}

              </div>

              <LineSeparator />
            </div>

            {/* Screenshots */}
            <div className="mt-6 relative">
              <h2 className="text-2xl text-emerald-500 font-bold">{project.Screenshot.Title}</h2>

              {<ScreenshotSlider screenshots={project.Screenshot.Items} />}
              <LineSeparator />
            </div>

            {/* Challenges and Solutions */}
            <div className="my-6">
              <h2 className="text-2xl text-emerald-500 font-bold">
                {project.ChallengesAndSolutions.Title}
              </h2>
              
              <div className="mt-2 p-4 w-full rounded-2xl border flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2 ">
                  <span className="my-4 text-center w-full inline-block text-xl font-medium">
                    {project.ChallengesAndSolutions.Challenge}
                  </span>

                  <ul>
                    {project.ChallengesAndSolutions.Items.map((item , index)=>{
                      return (
                        <li key={index} className="my-2">
                        <HiChevronDoubleRight className="text-emerald-500 text-2xl inline-block me-3.5 rtl:rotate-180" />
                        {item.Challenge}
                      </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="md:w-1/2 ">
                  <span className="my-4 text-center w-full inline-block text-xl font-medium">
                    {project.ChallengesAndSolutions.Solution}
                  </span>

                  <ul>
                      {project.ChallengesAndSolutions.Items.map((item , index)=>{
                      return (
                        <li key={index} className="my-2">
                        <HiChevronDoubleRight className="text-emerald-500 text-2xl inline-block me-3.5 rtl:rotate-180" />
                        {item.Solution}
                      </li>
                      )
                    })}
                  </ul>
                </div>

                
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

