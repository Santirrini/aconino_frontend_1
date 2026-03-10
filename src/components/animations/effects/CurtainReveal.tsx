"use client";

import { motion } from "framer-motion";
import { curtainReveal } from "../variants/curtainVariants";

interface CurtainRevealProps {
  color?: string;
}

export function CurtainReveal({ color = "bg-primary" }: CurtainRevealProps) {
  return (
    <motion.div
      className={`absolute inset-0 z-50 origin-top ${color}`}
      variants={curtainReveal}
      initial="hidden"
      animate="visible"
    />
  );
}
