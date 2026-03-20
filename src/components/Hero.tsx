"use client";

import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { CurtainReveal, GradientOverlay, ParticleMorph, slideVariants, fadeVariants, GoldenTypewriter } from "./animations";

interface HeroProps {
    acf?: {
        hero_title?: string;
        hero_subtitle?: string;
        hero_background_type?: string;
        hero_video_url?: string;
        hero_image?: string;
        hero_impact?: string;
        hero_cta_text?: string;
        hero_cta_link?: string;
    };
}

export default function Hero({ acf }: HeroProps) {
    const title = acf?.hero_title || "35 años";
    const subtitle = acf?.hero_subtitle || "apoyando la inclusión!";
    const isVideo = acf?.hero_background_type === "video" && acf?.hero_video_url;
    const videoUrl = acf?.hero_video_url || "";
    const imageUrl = acf?.hero_image || "/images/hero-background-blue.png";

    return (
        <section className="relative w-full min-h-[600px] md:min-h-[800px] lg:min-h-[100vh] bg-primary flex items-center justify-center overflow-hidden py-24">
            {/* Curtain Reveal Initial Effect */}
            <CurtainReveal color="bg-secondary" />

            {/* Background Content */}
            {isVideo ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://placehold.co/1920x1080/0c2070/ffffff?text=Video+Cargando"
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

            <div className="absolute inset-0 bg-black/40 z-10" />
            <GradientOverlay from="from-primary/80" via="via-secondary/50" to="to-primary/80" className="opacity-60 z-10" />
            <ParticleMorph subtle={true} />

            {/* Navigation Arrows */}
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
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
                    }}
                    className="relative inline-block mt-8"
                >
                    {/* Floating Heart Icon */}
                    <motion.div
                        variants={fadeVariants}
                        className="absolute -top-12 md:-top-16 -right-4 md:right-4 z-30"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaHeart className="text-accent text-5xl md:text-6xl drop-shadow-lg" />
                        </motion.div>
                    </motion.div>

                    <motion.h2 
                        variants={slideVariants}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-tight md:leading-tight drop-shadow-2xl" 
                        style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}
                    >
                        <motion.span variants={slideVariants} className="block mb-2 md:mb-4">
                            <GoldenTypewriter text={`${title} ${subtitle}`} delay={0} speed={0.1} loop={true} waitDuration={3000} />
                        </motion.span>
                    </motion.h2>
                </motion.div>
            </div>

            {/* Slider Indicators */}
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
