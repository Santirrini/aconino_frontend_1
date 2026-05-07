"use client";

import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDonation } from "../../providers/DonationProvider";

interface ImpactCtaProps {
  ctaButtonText?: string;
}

export default function ImpactCta({ ctaButtonText }: ImpactCtaProps) {
  const { openDonationWidget } = useDonation();
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => setShowMessage(true);
  const handleMouseLeave = () => setShowMessage(false);
  
  const handleClick = () => {
    // Para asegurar que en móvil se vea al dar click, forzamos que aparezca
    setShowMessage(true);
    openDonationWidget();
    
    // Lo ocultamos después de un tiempo para que cuando se cierre el modal, no siga ahí
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center px-4 mt-12 md:mt-16" // Margen extra para dar espacio al tooltip
    >
      <div 
        className="relative flex justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Tooltip Animado */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: -16, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="absolute -top-14 whitespace-nowrap bg-primary text-accent px-5 py-2.5 rounded-full shadow-[0_10px_25px_rgba(12,32,112,0.3)] pointer-events-none flex items-center gap-2 z-50 border-2 border-primary/90"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="font-black text-sm uppercase tracking-widest">
                ¿Quieres donar?
              </span>
              
              {/* Triangulito del bocadillo */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45 -z-10" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-accent text-primary rounded-full shadow-[0_10px_30px_rgba(248,183,25,0.4)] transition-all border-4 border-accent hover:bg-primary hover:text-accent group z-10"
          aria-label={ctaButtonText || "Donar"}
        >
          {/* Subtle Pulse Effect */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-accent rounded-full -z-10"
          />
          
          <FaHeart className="text-4xl md:text-5xl drop-shadow-md" />
        </motion.button>
      </div>
    </motion.div>
  );
}
