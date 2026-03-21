"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface CursosHeroSlide {
    src: string;
    alt: string;
    overlayOpacity?: number;
}

interface CursosHeroProps {
    title?: string;
    slides?: CursosHeroSlide[];
}

const defaultSlides: CursosHeroSlide[] = [
    {
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        alt: "Cursos de formación en neurodesarrollo",
    },
    {
        src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2070&auto=format&fit=crop",
        alt: "Capacitación profesional en rehabilitación",
    },
    {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        alt: "Terapias especializadas para niños",
    },
];

export default function CursosHero({ 
    title = "Cursos",
    slides: providedSlides
}: CursosHeroProps) {
    const slides = providedSlides && providedSlides.length > 0 ? providedSlides : defaultSlides;
    const [currentIndex, setCurrentIndex] = useState(0);

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
                        src={currentSlide.src || "https://placehold.co/1200x600?text=Cursos+Hero"}
                        alt={currentSlide.alt || "Cursos Hero"}
                        fill
                        className="object-cover object-center"
                        priority={currentIndex === 0}
                        sizes="100vw"
                    />
                    <div 
                        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
                        style={{ opacity: overlayOpacity / 100 }}
                    />
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
                        className="absolute -top-8 left-1/2 -translate-x-1/2 md:-top-12 z-20"
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
                        {title}
                    </motion.h1>
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {slides.map((_, idx) => (
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
