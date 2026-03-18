"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useDonation } from "@/providers/DonationProvider";
import { CurtainReveal, GradientOverlay, ParticleMorph } from "../animations";
import { IconBuilding, IconConstruction } from "./ApoyanosIcons";

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

const ChevronLeftIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const LocationIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const HeartHandshakeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
    <path d="m18 15-2-2"/>
    <path d="m15 18-2-2"/>
  </svg>
);

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
    <section className="relative w-full h-[320px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center overflow-hidden">
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
        className="absolute left-2 sm:left-4 md:left-8 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 shadow-lg shadow-black/10"
        aria-label="Imagen anterior"
      >
        <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 shadow-lg shadow-black/10"
        aria-label="Siguiente imagen"
      >
        <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:inline-flex items-center gap-2 bg-primary/50 backdrop-blur-xl border border-accent/50 rounded-full px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8 shadow-lg shadow-accent/20"
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center">
            <IconConstruction className="text-accent w-3 h-3 sm:w-4 sm:h-4" />
          </div>
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
            className="hidden lg:block absolute -top-8 md:-top-10 lg:-top-12 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-2xl bg-accent/20 backdrop-blur-xl border border-accent/30 flex items-center justify-center shadow-xl shadow-accent/30">
              <IconBuilding className="text-accent w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
            </div>
          </motion.div>

          <div className="pt-0 sm:pt-6 md:pt-8 lg:pt-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-white tracking-tight"
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
              className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-2 sm:mt-3 md:mt-4 rounded-full"
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mt-3 sm:mt-4 md:mt-6 font-semibold"
        >
          El nuevo Centro Día para Adultos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden sm:block text-xs sm:text-sm md:text-base text-white/70 mt-2 sm:mt-3 md:mt-4 max-w-3xl mx-auto"
        >
          Un espacio dedicado a la neurorehabilitación y cuidado integral de adultos. 
          ¡Ayúdanos a hacer realidad este sueño!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden sm:flex flex-row flex-wrap justify-center gap-2 md:gap-4 mt-4 sm:mt-6 md:mt-8"
        >
          <div className="flex items-center justify-center gap-2 bg-primary/50 backdrop-blur-xl rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 border border-white/10">
            <LocationIcon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-white font-medium text-xs sm:text-sm">Bogotá, Colombia</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-primary/50 backdrop-blur-xl rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 border border-white/10">
            <HeartHandshakeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-white font-medium text-xs sm:text-sm">Donaciones Internacionales</span>
          </div>
        </motion.div>

        <motion.button
          onClick={openDonationWidget}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 sm:mt-6 md:mt-8 group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-accent to-yellow-400 text-primary px-5 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 rounded-full font-black text-sm sm:text-base md:text-lg lg:text-xl tracking-wide shadow-[0_8px_40px_rgba(248,183,25,0.4)] hover:shadow-[0_8px_50px_rgba(248,183,25,0.6)] hover:scale-105 transition-all duration-300 uppercase overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 via-white/20 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <HeartHandshakeIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10" />
          <span className="relative z-10">Donar Ahora</span>
        </motion.button>
      </div>

      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-5 sm:w-6 lg:w-8 h-1.5 sm:h-2 bg-accent shadow-[0_0_10px_rgba(248,183,25,0.5)]"
                : "w-2 sm:w-2.5 h-1.5 sm:h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
