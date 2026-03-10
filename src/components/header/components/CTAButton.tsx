"use client";

import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function CTAButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate orbiting particles only on client
  const orbitParticles = useMemo(() => {
    if (!mounted) return [];

    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      angle: (i * 60),
      size: 2 + Math.random() * 2,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="hidden sm:block relative w-[140px] h-[48px]">
        {/* Simple placeholder to maintain layout during hydration */}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="hidden sm:block relative"
    >
      {/* Orbiting particles */}
      {orbitParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-accent/60"
          style={{
            width: particle.size,
            height: particle.size,
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: [
              Math.cos((particle.angle * Math.PI) / 180) * 50,
              Math.cos(((particle.angle + 180) * Math.PI) / 180) * 50,
              Math.cos((particle.angle * Math.PI) / 180) * 50,
            ],
            y: [
              Math.sin((particle.angle * Math.PI) / 180) * 25,
              Math.sin(((particle.angle + 180) * Math.PI) / 180) * 25,
              Math.sin((particle.angle * Math.PI) / 180) * 25,
            ],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glow backdrop */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <Link
        href="/pago-en-linea"
        className="relative flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-5 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-widest shadow-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
      >
        {/* Animated shine sweep */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          animate={{ translateX: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
        />

        {/* Border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "inset 0 0 0 2px rgba(248,183,25,0.5)",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        <span className="leading-tight text-center md:text-right hidden md:block z-10 relative">
          PAGO EN <br className="hidden lg:block" /> LÍNEA
        </span>
        <span className="md:hidden z-10 relative">PAGO EN LÍNEA</span>

        <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 group-hover:bg-white transition-all duration-300 z-10 relative">
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaHeart className="text-accent group-hover:text-primary transition-colors" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
