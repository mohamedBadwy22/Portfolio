"use client";
import { motion } from "motion/react";

export default function SkillCard({ skill , index }: { skill: { name: string; icon: string }; index: number }) {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0.35, once: true }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: index * 0.2,
      }}
      className="flex flex-col justify-center items-center gap-2 w-fit hover:scale-105 hover:shadow-lg hover:shadow-emerald-500 hover:outline-1 transition-all duration-300 ease-in-out p-2 rounded-lg">
        <i className={skill.icon}></i>
        <span className="text-lg font-bold">{skill.name}</span>
      </motion.div>
    </>
  );
}
