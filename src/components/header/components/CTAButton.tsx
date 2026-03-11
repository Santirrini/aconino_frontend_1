"use client";

import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDonation } from "../../../providers/DonationProvider";
import { useEffect, useState } from "react";

export default function CTAButton() {
  const [mounted, setMounted] = useState(false);
  const { openDonationWidget } = useDonation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="hidden sm:block relative w-[160px] h-[48px]" />;
  }

  return (
    <motion.button
      onClick={openDonationWidget}
      className="hidden sm:flex relative items-center gap-3 bg-accent text-primary px-6 py-3 rounded-full font-black text-sm tracking-widest shadow-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="bg-primary/10 p-1.5 rounded-full"
      >
        <FaHeart className="text-primary group-hover:text-red-500 transition-colors" />
      </motion.div>
      <span className="z-10 relative">DONAR AHORA</span>
    </motion.button>
  );
}
