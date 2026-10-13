"use client";

import { useState } from "react";
import SkillCard from "../SkillCard/SkillCard";
import type { SkillCategory, Skills } from "@/types/skills";
import FilterBtn from "../FilterBtn/FilterBtn";

export default function MySkills() {
  const techBtn: SkillCategory[] = ["frontend", "backend", "tools"];
  const [active, setActive] = useState<SkillCategory>("frontend");
  
  const skills: Skills = {
    frontend: [
      {
        name: "HTML5",
        icon: "ci ci-3x ci-html",
      },
      {
        name: "CSS3",
        icon: "ci ci-3x ci-css",
      },
      {
        name: "JavaScript",
        icon: "ci ci-3x ci-javascript",
      },
      {
        name: "TypeScript",
        icon: "ci ci-3x ci-typescript",
      },
      {
        name: "React.js",
        icon: "ci ci-3x ci-react-light dark:ci-react-light",
      },
      {
        name: "Next.js",
        icon: "ci ci-3x ci-nextjs-light",
      },
      {
        name: "Tailwind",
        icon: "ci ci-3x ci-tailwindcss",
      },
    ],
    backend: [
      { name: "Node.js", icon: "ci ci-3x ci-nodejs" },
      { name: "Nest.js", icon: "ci ci-3x ci-nestjs" },
      { name: "MySQL", icon: "ci ci-3x ci-mysql" },
      { name: "MongoDB", icon: "ci ci-3x ci-mongodb2" },
      {
        name: "Express.js",
        icon: "ci ci-3x ci-express dark:bg-white dark:rounded-full dark:p-1",
      },
    ],
    tools: [
      { name: "Github", icon: "ci ci-3x ci-github" },
      { name: "Git", icon: "ci ci-3x ci-git" },
      { name: "VS Code", icon: "ci ci-3x ci-vscode" },
      { name: "Postman", icon: "ci ci-3x ci-postman" },
      { name: "Npm", icon: "ci ci-3x ci-npm" },
    ],
  };

  return (
    <>
      {/* Tech Buttons */}
      <FilterBtn btnsArr={techBtn} active={active} setActive={setActive} />

      {/* Bottom Content (Skills itself) */}
      <div className="flex flex-wrap justify-center items-center xl:justify-between mt-5 mb-3.5 gap-1.5 lg:gap-3.5">
        {skills[active].map((skill, index) => {
          return <SkillCard key={index} skill={skill} />;
        })}
      </div>
    </>
  );
}
