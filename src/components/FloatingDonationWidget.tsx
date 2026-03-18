"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useDonation } from "@/providers/DonationProvider";
import { IconHeart, IconHands, IconProgress, IconUsers } from "./apoyanos/ApoyanosIcons";

export default function FloatingDonationWidget() {
  const pathname = usePathname();
  const { openDonationWidget } = useDonation();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname === "/apoyanos") {
    return null;
  }

  const progress = 45;
  const donors = 127;

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end group chat-widget-container">
      <style dangerouslySetInnerHTML={{ __html: `
        .menu-open .chat-widget-container {
          display: none;
        }
        @media (min-width: 1024px) {
          .menu-open .chat-widget-container {
            display: flex;
          }
        }
      `}} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl mb-4 w-[340px] overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-primary via-secondary to-primary p-5 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <IconHeart className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Centro Día Aconiño</h3>
                    <p className="text-white/70 text-sm">Construyendo esperanza</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors p-2"
                  aria-label="Cerrar"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-5 bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">Progreso</span>
                <span className="text-sm font-bold text-primary">{progress}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-accent to-yellow-400 rounded-full"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconUsers className="w-4 h-4" />
                  <span>{donors} donors</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IconProgress className="w-4 h-4" />
                  <span>Meta: $500M</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openDonationWidget();
                }}
                className="w-full bg-gradient-to-r from-accent to-yellow-400 text-primary font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <IconHands className="w-5 h-5" />
                Donar Ahora
              </button>
              <p className="text-center text-xs text-gray-500 mt-3">
                Tu aporte hace la diferencia
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-accent to-yellow-400 text-primary w-16 h-16 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-2xl transition-all group relative"
        aria-label="Donar"
      >
        <motion.div
          animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <IconHeart className="w-7 h-7" />
        </motion.div>
        
        <motion.div
          animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.div>

        <span className="absolute inset-0 rounded-full bg-accent/50 animate-ping" />
      </motion.button>
    </div>
  );
}
