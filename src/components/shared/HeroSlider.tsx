"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HeroBase, { HeroBaseProps } from "./HeroBase";

export interface HeroSliderSlide {
  src: string;
  alt: string;
  overlayOpacity?: number;
}

interface HeroSliderProps extends Omit<HeroBaseProps, 'backgroundImage' | 'backgroundVideo' | 'backgroundType' | 'overlayOpacity'> {
  slides: HeroSliderSlide[];
  autoPlayInterval?: number;
}

export default function HeroSlider({
  slides,
  autoPlayInterval = 6000,
  ...heroBaseProps
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval]);

  const currentSlide = slides[currentIndex];
  const overlayOpacity = currentSlide?.overlayOpacity ?? 50;

  return (
    <section className={`relative w-full overflow-hidden ${heroBaseProps.height || "h-[600px] md:h-[700px]"}`}>
      {/* 1. Background Slides */}
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
            className="absolute inset-0 bg-black z-10" 
            style={{ opacity: overlayOpacity / 100 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            aria-label="Imagen anterior"
          >
            <FaChevronLeft className="text-sm md:text-base" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            aria-label="Siguiente imagen"
          >
            <FaChevronRight className="text-sm md:text-base" />
          </button>
        </>
      )}

      {/* 3. Hero Content Base */}
      <HeroBase 
        {...heroBaseProps}
        backgroundType="image"
        backgroundImage="" // Empty because we handle it in the slider
        overlayOpacity={0} // Handled in the slider
        customOverlay={null} // Handled in the slider
        showDefaultBackground={false}
        className={`!py-0 !absolute inset-0 flex items-center justify-center pointer-events-none ${heroBaseProps.className || ""}`}
      >
        <div className="pointer-events-auto">
            {heroBaseProps.children}
        </div>
      </HeroBase>

      {/* 4. Dot Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
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
      )}
    </section>
  );
}
