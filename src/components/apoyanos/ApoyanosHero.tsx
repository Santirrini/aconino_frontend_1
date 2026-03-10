"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function ApoyanosHero() {
    return (
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"
                    alt="Apóyanos Aconiño"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <div className="relative inline-block">
                    {/* Floating Heart Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 15 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.5
                        }}
                        className="absolute -top-10 -right-2 md:-top-14 md:right-8 z-20"
                    >
                        <FaHeart className="text-accent text-4xl md:text-6xl drop-shadow-lg" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter"
                        style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
                    >
                        Apóyanos
                    </motion.h1>
                </div>
            </div>

            {/* Slider Indicator Placeholder (matches UI) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
