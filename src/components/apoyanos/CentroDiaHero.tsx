"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useDonation } from "@/providers/DonationProvider";
import { CurtainReveal, GradientOverlay, ParticleMorph } from "../animations";
import { IconBuilding, IconConstruction, ChevronLeftIcon, ChevronRightIcon, LocationIcon, GlobeIcon, HeartIcon } from "@/constants/apoyanos-icons";

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
            src={currentSlide.src || "https://placehold.co/1200x600?text=Centro+Dia"}
            alt={currentSlide.alt || "Centro Día Hero"}
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

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:inline-flex items-center gap-2 bg-primary/50 backdrop-blur-xl border border-accent/50 rounded-full px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <IconConstruction className="text-accent w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-wider">
            Nueva Construcción
          </span>
        </motion.div>

        <div className="relative flex flex-col items-center">
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
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-primary/60 backdrop-blur-xl border border-accent/40 flex items-center justify-center">
              <IconBuilding className="text-accent w-8 h-8 lg:w-10 lg:h-10" />
            </div>
          </motion.div>

          <div className="pt-0 sm:pt-6 md:pt-8 lg:pt-14">
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
              className="h-1 sm:h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-3 sm:mt-4 rounded-full"
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mt-4 sm:mt-4 md:mt-6 font-semibold"
        >
          El nuevo Centro Día para Adultos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden sm:block text-xs sm:text-sm md:text-base text-white/70 mt-3 max-w-3xl mx-auto"
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
          <div className="flex items-center justify-center gap-2 bg-primary/50 backdrop-blur-xl rounded-full px-4 sm:px-5 py-2 border border-white/10">
            <LocationIcon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-white font-medium text-xs sm:text-sm">Bogotá, Colombia</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-primary/50 backdrop-blur-xl rounded-full px-4 sm:px-5 py-2 border border-white/10">
            <GlobeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-white font-medium text-xs sm:text-sm">Donaciones Internacionales</span>
          </div>
        </motion.div>

        <motion.button
          onClick={() => openDonationWidget()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 sm:mt-8 md:mt-10 group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-accent to-yellow-400 text-primary px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-full font-black text-sm sm:text-base md:text-lg lg:text-xl tracking-wide shadow-[0_8px_40px_rgba(248,183,25,0.4)] hover:shadow-[0_8px_50px_rgba(248,183,25,0.6)] hover:scale-105 transition-all duration-300 uppercase overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 via-white/30 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          <span className="relative z-10">Donar Ahora</span>
        </motion.button>

        <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-6 sm:w-8 h-2 bg-accent shadow-[0_0_15px_rgba(248,183,25,0.7)]"
                  : "w-2.5 sm:w-3 h-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
