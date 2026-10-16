'use client';
import { motion } from "motion/react";


export default function AnimatedDiv({ variants , initial, animate, whileInView, transition, className , children }: { variants?: any, initial: any, animate?: any, transition?: any, whileInView?: any, className: string , children: React.ReactNode }) {
  return (
    <>
    <motion.div
    variants={variants}
    whileInView={whileInView}
    viewport={{ once: true }}
    initial={initial}
    animate={animate}
    transition={transition}
    className={className}
    >
        {children}
    </motion.div>
    </>
  )
}
