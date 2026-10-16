'use client';
import { motion } from "motion/react";


export default function AnimatedSection({ initial, animate, whileInView, transition, className , children }: { initial: any, animate?: any, whileInView?: any, transition?: any, className: string , children: React.ReactNode }) {
  return (
    <>
    <motion.section
    initial={initial}
    whileInView={whileInView}
    viewport={{ once: true }}
    animate={animate}
    transition={transition}
    className={className}
    >
        {children}
    </motion.section>
    </>
  )
}
