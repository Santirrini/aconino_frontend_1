"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center justify-center relative z-50 group">
      {/* Glow backdrop */}
      <motion.div
        className="absolute inset-0 bg-accent/20 blur-2xl rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />

      <motion.div
        className="flex font-black text-2xl md:text-5xl tracking-tighter leading-none relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className="text-primary relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          a
          {/* Shine sweep on 'a' */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            animate={{ translateX: ["-200%", "200%"] }}
            transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 8 }}
          />
        </motion.span>

        <motion.span
          className="text-accent relative inline-block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            type: "spring",
            stiffness: 300,
            damping: 10
          }}
        >
          c
          {/* Pulsing glow around 'c' */}
          <motion.span
            className="absolute inset-0 bg-accent blur-lg rounded-full"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Explosion rays */}
          <motion.span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0, 1.5, 2] }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent rotate-45" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent -rotate-45" />
          </motion.span>
        </motion.span>

        <motion.span
          className="text-primary relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          n
        </motion.span>
      </motion.div>

      {/* Tagline */}
      <motion.div
        className="flex flex-col text-center mt-0.5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <span className="text-[8px] md:text-[11px] font-bold text-gray-900 leading-tight">
          Asociación Aconiño
        </span>
        <span className="hidden md:block text-[8px] md:text-[9px] text-gray-500 leading-tight">
          Bogotá - Colombia
        </span>
      </motion.div>
    </Link>
  );
}
