"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NosotrosJuntaPhoto() {
    return (
        <section id="junta-directiva" className="bg-gray-50 py-24 md:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-full h-[300px] bg-primary/5 -skew-y-3 transform -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] bg-accent w-12"></div>
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">Liderazgo</span>
                        <div className="h-[2px] bg-accent w-12"></div>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-primary">
                        Junta Directiva
                    </h2>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full aspect-[16/9] md:aspect-[3/1] max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden group"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                        alt="Junta Directiva Aconiño"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Decorative border */}
                    <div className="absolute inset-0 border-4 md:border-8 border-white/20 m-4 md:m-6 rounded-2xl pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}