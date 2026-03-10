"use client";

import { motion } from "framer-motion";
import { morphingGradient } from "../variants/curtainVariants";

interface GradientOverlayProps {
  from?: string;
  via?: string;
  to?: string;
  className?: string;
}

export function GradientOverlay({ 
  from = "from-primary", 
  via = "via-secondary", 
  to = "to-primary",
  className = ""
}: GradientOverlayProps) {
  return (
    <motion.div
      variants={morphingGradient}
      initial="initial"
      animate="animate"
      className={`absolute inset-0 bg-gradient-to-r ${from} ${via} ${to} bg-[length:200%_200%] mix-blend-multiply opacity-50 z-10 ${className}`}
    />
  );
}
