"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconHeart } from "@/constants/apoyanos-icons";

interface TriggerButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function TriggerButton({ isOpen, toggle }: TriggerButtonProps) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-r from-accent to-yellow-400 text-primary w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(248,183,25,0.4)] hover:shadow-accent/50 transition-all group relative z-[100]"
      aria-label={isOpen ? "Cerrar menú de donación" : "Abrir menú de donación"}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="heart"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute"
          >
            <IconHeart className="w-6 h-6 md:w-7 md:h-7" />
          </motion.div>
        ) : (
          <motion.div
            key="close"
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -90 }}
            className="absolute"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse effect */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping pointer-events-none opacity-75" />
      )}
    </motion.button>
  );
}
