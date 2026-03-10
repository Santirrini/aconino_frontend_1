"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center justify-center relative z-50 group">
      <motion.div 
        className="flex font-black text-4xl md:text-5xl tracking-tighter text-secondary leading-none relative"
        initial={{ filter: "brightness(1)" }}
        animate={{ filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
        transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-primary">a</span>
        <span className="text-accent relative">
          c
          <motion.span 
            className="absolute inset-0 bg-white blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }}
          />
        </span>
        <span className="text-primary">n</span>
      </motion.div>
      <div className="flex flex-col text-center mt-1">
        <span className="text-[10px] md:text-[11px] font-bold text-gray-900 leading-tight">Asociación Aconiño</span>
        <span className="text-[8px] md:text-[9px] text-gray-500 leading-tight">Bogotá - Colombia</span>
      </div>
    </Link>
  );
}
