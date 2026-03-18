"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FireSparkleProps {
  active: boolean;
  className?: string;
}

/**
 * A mini fire/sparkle animation in yellow/accent color.
 * Designed to appear at the end of the typewriter text.
 */
export const FireSparkle = ({ active, className = "" }: FireSparkleProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <span className={`inline-flex items-center justify-center relative ml-1 w-5 h-5 align-middle ${className}`}>
      <AnimatePresence>
        {active && (
          <>
            {/* Core Glow */}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.6 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 bg-accent rounded-full blur-md"
            />
            
            {/* Rising Particles (Mini Fire) */}
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                animate={{ 
                  x: (Math.random() - 0.5) * 15, 
                  y: -15 - Math.random() * 20, 
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0] 
                }}
                transition={{ 
                  duration: 0.5 + Math.random() * 0.5, 
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: Math.random() * 0.2
                }}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{ 
                  filter: "blur(0.5px)",
                  backgroundColor: i % 2 === 0 ? "#f8b719" : "#ffeb3b" 
                }}
              />
            ))}
            
            {/* Center Pulse */}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full blur-[1px] relative z-10 block"
            />
          </>
        )}
      </AnimatePresence>
    </span>
  );
};
