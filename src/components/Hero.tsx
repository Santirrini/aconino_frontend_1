"use client";

import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
    acf?: any;
}

export default function Hero({ acf }: HeroProps) {
    const title = acf?.hero_title || "35 años";
    const subtitle = acf?.hero_subtitle || "apoyando la inclusión!";
    const isVideo = acf?.hero_background_type === "video";
    const videoUrl = acf?.hero_video_url || "https://www.w3schools.com/html/mov_bbb.mp4";
    const imageUrl = acf?.hero_image || "https://via.placeholder.com/1920x1080/0c2070/ffffff?text=Fondo+Hero";

    return (
        <section className="relative w-full h-[600px] md:h-[800px] lg:h-[900px] bg-gray-900 flex items-center justify-center overflow-hidden">
            {/* Background Content */}
            {isVideo ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://via.placeholder.com/1920x1080/0c2070/ffffff?text=Video+Cargando..."
                >
                    <source src={videoUrl} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>
            ) : (
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full z-0"
                >
                    <Image
                        src={imageUrl}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            )}

            {/* Darkened Overlay */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-10" />

            {/* Navigation Arrows (for future slider functionality) */}
            <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/40 hover:bg-black/70 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all hover:scale-110" 
                aria-label="Previous"
            >
                <FaChevronLeft className="text-xl" />
            </motion.button>
            <motion.button 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/40 hover:bg-black/70 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all hover:scale-110" 
                aria-label="Next"
            >
                <FaChevronRight className="text-xl" />
            </motion.button>

            {/* Content Overlay */}
            <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center mt-12 md:mt-0">
                <div className="relative inline-block mt-8">
                    {/* Floating Heart Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 12 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.5 
                        }}
                        className="absolute -top-12 md:-top-16 -right-4 md:right-4 z-30"
                    >
                        <FaHeart className="text-accent text-5xl md:text-6xl drop-shadow-lg" />
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-tight md:leading-none drop-shadow-2xl" 
                        style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}
                    >
                        <span className="block mb-2 md:mb-4">{title}</span>
                        <span className="block text-4xl md:text-7xl lg:text-8xl">{subtitle}</span>
                    </motion.h2>
                </div>
            </div>

            {/* Additional bottom element matching the UI (slider indicators) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 md:bottom-12 z-30 flex gap-3"
            >
                <button className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white ring-2 ring-white/50 ring-offset-2 ring-offset-transparent transition-transform hover:scale-110" aria-label="Slide 1"></button>
            </motion.div>
        </section>
    );
}