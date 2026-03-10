"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

interface Child {
    name: string;
    image: string;
}

export default function NosotrosSemillas() {
    const children: Child[] = [
        { name: "Sandra Arbeláez", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=200&auto=format&fit=crop" },
        { name: "Ernesto Constantín", image: "https://images.unsplash.com/photo-1473451159981-d13eb22d2f78?q=80&w=200&auto=format&fit=crop" },
        { name: "Juan Carlos Andrade", image: "https://images.unsplash.com/photo-1601000676450-9bb32dce30eb?q=80&w=200&auto=format&fit=crop" },
        { name: "Guillermo José Ronderos", image: "https://images.unsplash.com/photo-1541818167362-dcc7ae6a2e88?q=80&w=200&auto=format&fit=crop" },
        { name: "Camilo González", image: "https://images.unsplash.com/photo-1513904677712-4aa82dce6961?q=80&w=200&auto=format&fit=crop" },
        { name: "Daniel Domínguez", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=200&auto=format&fit=crop" },
    ];

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100 } }
    };

    return (
        <section className="bg-white">
            {/* Banner with modern styling */}
            <div className="relative bg-gradient-to-r from-primary via-primary to-secondary py-20 md:py-24 overflow-hidden shadow-inner">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] mix-blend-overlay" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center"
                >
                    <FaHeart className="text-accent text-5xl mb-6 drop-shadow-md animate-pulse" />
                    <h2 className="text-white text-4xl md:text-6xl font-black leading-tight drop-shadow-xl tracking-tight">
                        Semillas de amor <br className="hidden md:block" />
                        <span className="text-accent italic font-light tracking-normal text-3xl md:text-5xl">donde ahora crecen otros sueños</span>
                    </h2>
                </motion.div>
            </div>

            {/* Children Grid */}
            <div className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20"
                >
                    {children.map((child, idx) => (
                        <motion.div variants={itemVariants} key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="relative w-28 h-28 md:w-36 md:h-36 mb-6 rounded-3xl rotate-3 overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-100 group-hover:rotate-0 group-hover:scale-105 group-hover:ring-accent group-hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src={child.image}
                                    alt={child.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <h4 className="text-primary font-bold text-base md:text-lg max-w-[150px] leading-tight group-hover:text-accent transition-colors">{child.name}</h4>
                            <div className="h-[2px] w-6 bg-gray-200 mt-4 group-hover:bg-accent group-hover:w-10 transition-all duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}