"use client";

import { motion } from "motion/react";

export default function AboutCard({
  card,
  index,
}: {
  card: { iconComponent: React.ReactNode; title: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.5,
        delay: index * 0.5,
        ease: "easeInOut",
      }}
      className="hover:scale-105 p-4 border-emerald-500 dark:border-emerald-800 rounded-lg shadow-sm shadow-emerald-500 flex items-center gap-4 transition-all duration-300"
    >
      <div className="text-emerald-500 text-3xl p-2 rounded-full bg-gray-200">
        {card.iconComponent}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-bold">{card.title}</h4>
        <p className="text-sm text-gray-400">{card.description}</p>
      </div>
    </motion.div>
  );
}
