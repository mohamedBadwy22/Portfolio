'use client';

import { ProjectCategory } from "@/types/project";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState } from "react";
import { getProjects, Locale } from "@/app/_data/projects";
import { useLocale } from "next-intl";
import FilterBtn from "../FilterBtn/FilterBtn";

export default function ProjectFilter() {

    const categoryBtn: ProjectCategory[] = [
        "all",
        "frontend",
        "backend",
        "fullstack",
      ];
      const [active, setActive] = useState<ProjectCategory>("all");
      const locale = useLocale() as Locale;
      const projects = getProjects(locale);

  return (
    <>
    {/* Buttons */}
          <FilterBtn
            btnsArr={categoryBtn}
            active={active}
            setActive={setActive}
          />

          {/* Projects */}
          {active === "all" && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-3.5">
            {projects.all.map((project,index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>}
          {active === "frontend" && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-3.5">
            {projects.frontend.map((project,index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>}
          {active === "backend" && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-3.5">
            {projects.backend.map((project,index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>}
          {active === "fullstack" && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-3.5">
            {projects.fullstack.map((project,index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>}
    </>
  )
}
