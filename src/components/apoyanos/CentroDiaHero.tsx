"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDonation } from "@/providers/DonationProvider";
import { CurtainReveal, GradientOverlay, ParticleMorph } from "../animations";
import { IconBuilding, IconHands, IconConstruction } from "./ApoyanosIcons";

interface HeroSlide {
  src: string;
  alt: string;
  overlayOpacity?: number;
}

const defaultSlides: HeroSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    alt: "Construcción del nuevo Centro Día Aconiño",
    overlayOpacity: 60,
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    alt: "Edificio moderno de centro de rehabilitación",
    overlayOpacity: 55,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2070&auto=format&fit=crop",
    alt: "Instalaciones de neurorehabilitación",
    overlayOpacity: 50,
  },
];

export default function CentroDiaHero() {
  const { openDonationWidget } = useDonation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = defaultSlides;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentSlide = slides[currentIndex];
  const overlayOpacity = currentSlide?.overlayOpacity ?? 50;

  return (
    <section className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      <CurtainReveal color="bg-secondary" />
      <GradientOverlay from="from-primary/80" via="via-secondary/50" to="to-primary/80" className="opacity-60" />
      <ParticleMorph subtle={true} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            className="object-cover object-center"
            priority={currentIndex === 0}
            sizes="100vw"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80"
            style={{ opacity: overlayOpacity / 100 }}
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="text-sm sm:text-base" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="text-sm sm:text-base" />
      </button>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/40 backdrop-blur-md border border-accent rounded-full px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 mb-6 sm:mb-8 shadow-lg shadow-accent/20"
        >
          <IconConstruction className="text-accent w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-wider">
            Nueva Construcción
          </span>
        </motion.div>

        <div className="relative inline-block">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 15 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.5,
            }}
            className="absolute -top-6 sm:-top-8 md:-top-12 left-1/2 -translate-x-1/2 z-20"
          >
            <IconBuilding className="text-accent w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 drop-shadow-lg" />
          </motion.div>

          <div className="pt-8 sm:pt-10 md:pt-14">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
            >
              Construyendo{" "}
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                Esperanza
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-3 sm:mt-4 rounded-full"
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 font-semibold"
        >
          El nuevo Centro Día para Adultos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto"
        >
          Un espacio dedicado a la neurorehabilitación y cuidado integral de adultos. 
          ¡Ayúdanos a hacer realidad este sueño!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2 bg-primary/40 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 border border-white/10">
            <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-white font-medium text-xs sm:text-sm">Bogotá, Colombia</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-primary/40 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 border border-white/10">
            <IconHands className="text-accent w-4 h-4" />
            <span className="text-white font-medium text-xs sm:text-sm">Donaciones Nacionales e Internacionales</span>
          </div>
        </motion.div>

        <motion.button
          onClick={openDonationWidget}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-accent to-yellow-400 text-primary px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-4 lg:py-5 rounded-full font-black text-base sm:text-lg md:text-xl tracking-wide shadow-[0_8px_40px_rgba(248,183,25,0.4)] hover:shadow-[0_8px_50px_rgba(248,183,25,0.6)] hover:scale-105 transition-all duration-300 uppercase"
        >
          <IconHands className="w-5 h-5 sm:w-6 sm:h-6" />
          Donar Ahora
        </motion.button>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-6 sm:w-8 h-2 sm:h-3 bg-accent shadow-[0_0_10px_rgba(248,183,25,0.5)]"
                : "w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
