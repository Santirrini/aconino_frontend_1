"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const heroImages = [
    {
        src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2070&auto=format&fit=crop",
        alt: "Niño en terapia con aconiñoapp",
    },
    {
        src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop",
        alt: "Familia utilizando la aplicación",
    },
    {
        src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop",
        alt: "Desarrollo infantil con tecnología",
    },
];

export default function AppHero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
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
                        src={heroImages[currentIndex].src}
                        alt={heroImages[currentIndex].alt}
                        fill
                        className="object-cover"
                        priority={currentIndex === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                aria-label="Imagen anterior"
            >
                <FaChevronLeft className="text-sm md:text-base" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                aria-label="Siguiente imagen"
            >
                <FaChevronRight className="text-sm md:text-base" />
            </button>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
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
                        className="absolute -top-8 right-0 md:-top-10 md:right-2 z-20"
                    >
                        <span className="text-accent text-4xl md:text-5xl drop-shadow-lg">♥</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter"
                        style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
                    >
                        App
                    </motion.h1>
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {heroImages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`rounded-full transition-all duration-300 ${idx === currentIndex
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
