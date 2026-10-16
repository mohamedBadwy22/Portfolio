"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { Project } from "@/types/project";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from "motion/react";

export default function ProjectCard({ project , index }: { project: Project; index: number }) {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0, scale: 0.75, y: 60 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.35, once: true }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.15 }}
      className="w-full flex justify-center items-center">
        <Card className="relative mx-auto w-full max-w-sm pt-0 shadow-2xl dark:shadow-md dark:shadow-emerald-500">
          <div className="absolute inset-0 z-30 aspect-video" />
          <Image
            src={project.image}
            alt={project.imageAlt}
            className="relative z-20 aspect-video w-full object-cover"
          />

          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription className="line-clamp-2">{project.description}</CardDescription>
          </CardHeader>

          <Link
            href={project.href}
            className="bg-emerald-500 hover:bg-emerald-800 dark:bg-emerald-800 dark:hover:bg-emerald-500 text-white cursor-pointer transition-all duration-300"
          >
            <CardFooter className="bg-transparent flex justify-center items-center">
              <button className="w-fit text-lg flex items-center justify-center cursor-pointer">
                {project.buttonText}{" "}
                <FaArrowRightLong className="mx-2 rtl:rotate-180" />
              </button>
            </CardFooter>
          </Link>
        </Card>
      </motion.div>
    </>
  );
}
