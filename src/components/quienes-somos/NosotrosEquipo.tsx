"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

export default function NosotrosEquipo() {
    return (
        <section className="bg-white py-24 md:py-32 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24 flex flex-col items-center"
                >
                    <div className="bg-primary/5 p-4 rounded-full mb-6">
                        <FaUsers className="text-primary text-3xl" />
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] bg-accent w-12"></div>
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">El Corazón de Aconiño</span>
                        <div className="h-[2px] bg-accent w-12"></div>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-primary">
                        Nuestro equipo de trabajo
                    </h2>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full aspect-[4/3] md:aspect-[21/9] max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden group"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                        alt="Equipo de trabajo Aconiño"
                        fill
                        className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    {/* Modern gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Accent element */}
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary via-accent to-secondary" />
                </motion.div>
            </div>
        </section>
    );
}