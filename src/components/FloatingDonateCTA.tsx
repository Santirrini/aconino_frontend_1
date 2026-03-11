"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

interface FloatingDonateCTAProps {
  onOpen: () => void;
}

export default function FloatingDonateCTA({ onOpen }: FloatingDonateCTAProps) {
  const pathname = usePathname();

  if (pathname === "/apoyanos") {
    return null;
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-[90] bg-gradient-to-tr from-accent to-yellow-300 text-primary w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow group"
      aria-label="Donar ahora"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <FaHeart className="text-2xl md:text-3xl drop-shadow-sm group-hover:scale-110 transition-transform" />
      </motion.div>
    </motion.button>
  );
}