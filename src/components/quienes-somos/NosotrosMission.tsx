"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NosotrosMission() {
    return (
        <section className="bg-primary flex flex-col lg:flex-row relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            {/* Left side Content (Dark Blue Background) */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex items-center p-12 md:p-20 lg:p-24 relative z-10"
            >
                <div className="max-w-xl mx-auto w-full text-white">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">Nuestro Propósito</span>
                        <div className="h-[2px] w-16 bg-white/20"></div>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight drop-shadow-md">
                        Misión
                    </h2>
                    
                    <div className="relative">
                        {/* Large Quote Mark Decorative */}
                        <span className="absolute -top-10 -left-8 text-8xl text-white/10 font-serif leading-none select-none">"</span>
                        <p className="text-gray-200 leading-relaxed text-lg md:text-xl text-justify relative z-10 font-medium">
                            Somos una asociación innovadora, que ofrece programas de prevención y atención integral a niños, niñas y jóvenes con alteraciones sensoriomotoras, así como capacitación y orientación a profesionales e instituciones.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg text-justify mt-6 relative z-10">
                            Aplicamos el enfoque de Neurodesarrollo - Bobath y otras técnicas relacionadas, para el mejoramiento de la calidad de vida e Inclusión social de la población objetivo.
                        </p>
                    </div>
                </div>

                {/* Vertical Accent Line */}
                <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent h-2/3 w-3 hidden lg:block rounded-l-full origin-top"
                />
            </motion.div>

            {/* Right side Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[600px] z-10"
            >
                <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                    alt="Terapeuta con niño"
                    fill
                    className="object-cover"
                />
                {/* Gradient blend on mobile to merge with text block */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent lg:hidden" />
            </motion.div>
        </section>
    );
}