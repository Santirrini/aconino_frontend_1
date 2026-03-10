"use client";

import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CTAButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="hidden sm:block relative"
    >
      {/* Light particles effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-accent blur-xl opacity-0 rounded-full"
        whileHover={{ opacity: 0.3, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
      
      <Link
        href="/pago-en-linea"
        className="relative flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-5 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-widest shadow-md hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 group overflow-hidden"
      >
        {/* Shine sweep */}
        <motion.div 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full"
          animate={{ translateX: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
        />

        <span className="leading-tight text-center md:text-right hidden md:block z-10">
          PAGO EN <br className="hidden lg:block" /> LÍNEA
        </span>
        <span className="md:hidden z-10">PAGO EN LÍNEA</span>
        
        <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 group-hover:bg-white transition-all duration-300 z-10 relative">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaHeart className="text-accent group-hover:text-primary transition-colors" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
