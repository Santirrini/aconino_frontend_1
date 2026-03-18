"use client";

import React from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

/**
 * Typewriter effect component that animates text character by character.
 */
export const Typewriter = ({ 
  text, 
  className = "", 
  delay = 0, 
  speed = 0.02 
}: TypewriterProps) => {
  // Variants for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  // Variants for individual characters
  const charVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.1 } 
    },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
