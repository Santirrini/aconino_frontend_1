"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHistory } from "react-icons/fa";

export default function NosotrosHistory() {
    return (
        <section className="bg-primary flex flex-col md:flex-row relative overflow-hidden">
            {/* Left side Content (Dark Blue Background) */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex items-center p-12 lg:p-24 relative overflow-hidden z-10"
            >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                
                <div className="max-w-xl mx-auto z-10 w-full text-white">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">Nuestro Legado</span>
                        <div className="h-[2px] w-16 bg-accent"></div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-white/10 p-3 rounded-full">
                            <FaHistory className="text-accent text-2xl" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-sm">
                            Historia
                        </h2>
                    </div>
                    
                    <div className="space-y-6 relative border-l-2 border-white/20 pl-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative"
                        >
                            <span className="absolute -left-[31px] top-1 w-3 h-3 bg-accent rounded-full ring-4 ring-primary" />
                            <h3 className="text-accent font-bold text-xl mb-2">Noviembre de 1990</h3>
                            <p className="text-gray-300 leading-relaxed text-lg text-justify font-medium">
                                Un grupo de siete padres y dos fisioterapeutas fundaron esta organización privada sin ánimo de lucro, con el objetivo de brindar atención interdisciplinaria a niños, niñas y jóvenes con alteraciones sensoriomotoras ocasionadas por lesiones del sistema nervioso central.
                            </p>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="relative mt-8"
                        >
                            <span className="absolute -left-[31px] top-1 w-3 h-3 bg-white/50 rounded-full ring-4 ring-primary" />
                            <h3 className="text-white/80 font-bold text-xl mb-2">Nuestra Evolución</h3>
                            <p className="text-gray-400 leading-relaxed text-lg text-justify">
                                Con el tiempo se impuso la necesidad de ir más allá y capacitar a familias, profesionales y entidades tanto públicas como privadas en relación con el desarrollo integral del niño, sus alteraciones y los tratamientos idóneos que deben brindarse.
                            </p>
                        </motion.div>
                    </div>
                </div>
                {/* Yellow accent box */}
                <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute right-0 top-1/4 transform bg-accent h-1/2 w-3 hidden md:block rounded-l-full origin-top" 
                />
            </motion.div>

            {/* Right side Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 relative min-h-[500px]"
            >
                <Image
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
                    alt="Terapia grupal con niños"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/80 md:to-transparent" />
            </motion.div>
        </section>
    );
}