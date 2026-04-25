"use client";

import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDonation } from "../../../providers/DonationProvider";
import { useEffect, useState } from "react";
import Link from "next/link";

interface CTAButtonProps {
  label?: string;
  href?: string;
  isDonation?: boolean;
}

export default function CTAButton({ href, isDonation = true }: CTAButtonProps) {
  const [mounted, setMounted] = useState(false);
  const { openDonationWidget } = useDonation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="relative w-[40px] sm:w-[50px] h-[36px] sm:h-[44px]" />;
  }

  const buttonContent = (
    <motion.button
      onClick={isDonation ? () => openDonationWidget() : undefined}
      className="flex relative items-center bg-accent text-primary px-3 sm:px-4 py-2.5 sm:py-3 rounded-full font-black shadow-lg hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group overflow-hidden"
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
        className="bg-primary/10 p-1 sm:p-1.5 rounded-full flex-shrink-0"
      >
        <FaHeart className="text-[14px] sm:text-base text-primary group-hover:text-red-500 transition-colors" />
      </motion.div>
    </motion.button>
  );

  if (!isDonation && href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}
