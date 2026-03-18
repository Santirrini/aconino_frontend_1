"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaHardHat, FaHandsHelping, FaChevronLeft, FaChevronRight, FaBuilding } from "react-icons/fa";
import { useDonation } from "@/providers/DonationProvider";

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
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Slides */}
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

      {/* Background Blur Effects */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-50" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Imagen anterior"
      >
        <FaChevronLeft className="text-sm md:text-base" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Siguiente imagen"
      >
        <FaChevronRight className="text-sm md:text-base" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full px-6 py-2 mb-6"
        >
          <FaHardHat className="text-accent" />
          <span className="text-accent font-bold text-sm uppercase tracking-wider">
            Nueva Construcción
          </span>
        </motion.div>

        {/* Main Title with floating icon */}
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
            className="absolute -top-8 left-1/2 -translate-x-1/2 md:-top-12 z-20"
          >
            <FaBuilding className="text-accent text-4xl md:text-5xl drop-shadow-lg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Construyendo <span className="text-accent">Esperanza</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-medium"
        >
          El nuevo Centro Día para Adultos
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto"
        >
          Un espacio dedicado a la neurorehabilitación y cuidado integral de adultos. 
          ¡Ayúdanos a hacer realidad este sueño!
        </motion.p>

        {/* Location & Donor badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
            <span className="text-white font-medium">Bogotá, Colombia</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
            <FaHandsHelping className="text-accent" />
            <span className="text-white font-medium">Donaciones Nacionales e Internacionales</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={openDonationWidget}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center justify-center gap-3 bg-accent text-primary px-10 py-5 rounded-full font-black text-lg tracking-widest shadow-2xl hover:scale-105 hover:bg-yellow-400 transition-all duration-300 uppercase"
        >
          <FaHandsHelping />
          Donar Ahora
        </motion.button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 h-3 bg-accent"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
