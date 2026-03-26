"use client";

import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDonation } from "../../providers/DonationProvider";

interface ImpactCtaProps {
  ctaButtonText?: string;
}

export default function ImpactCta({ ctaButtonText }: ImpactCtaProps) {
  const { openDonationWidget } = useDonation();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center px-4"
    >
      <button
        onClick={() => openDonationWidget()}
        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent text-primary px-10 py-4 rounded-full font-black text-lg tracking-widest shadow-xl shadow-accent/20 active:scale-95 transition-all group border-2 border-accent hover:bg-transparent hover:text-accent"
      >
        <FaHeart className="group-hover:scale-125 transition-transform duration-300" />
        {ctaButtonText?.toUpperCase() || "APADRINA UN NIÑO"}
      </button>
    </motion.div>
  );
}
