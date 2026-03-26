"use client";

import { motion } from "framer-motion";

interface CurtainRevealProps {
  color?: string;
}

export function CurtainReveal({ color = "bg-primary" }: CurtainRevealProps) {
  return (
    <motion.div
      className={`absolute inset-0 z-50 origin-top ${color}`}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{
        duration: 1.2,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      }}
    />
  );
}
