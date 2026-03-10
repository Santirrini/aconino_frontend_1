"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface CtaSectionProps {
    acf?: any;
}

export default function CtaSection({ acf }: CtaSectionProps) {
    const ctaText = acf?.hero_cta_text || "CONTÁCTANOS";
    const ctaLink = acf?.hero_cta_link || "/contacto";

    return (
        <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Image with Dark Blue Overlay */}
            <motion.div 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
            >
                <Image
                    src="https://via.placeholder.com/1920x600/0c2070/ffffff?text=Fondo+Niños"
                    alt="Niños felices"
                    fill
                    className="object-cover"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 z-10" />

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-20 text-center px-4 max-w-4xl mx-auto"
            >
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-[2px] bg-accent w-12 md:w-24"></div>
                    <span className="text-sm text-gray-200 tracking-widest uppercase font-bold">
                        Aconino
                    </span>
                    <div className="h-[2px] bg-accent w-12 md:w-24"></div>
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-12 tracking-tight drop-shadow-lg leading-tight">
                    35 años apoyando la inclusión
                </h2>
                
                <Link href={ctaLink} className="inline-block bg-accent text-primary font-black tracking-widest text-sm md:text-base px-12 py-5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-xl shadow-accent/20 transform hover:-translate-y-1 hover:scale-105">
                    {ctaText}
                </Link>
            </motion.div>
        </section>
    );
}