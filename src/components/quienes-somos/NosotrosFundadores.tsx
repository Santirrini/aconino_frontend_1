"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Founder {
    name: string;
    image: string;
}

export default function NosotrosFundadores() {
    const foundersRow1: Founder[] = [
        { name: "Berta Brunal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
        { name: "Patricia Flórez", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop" },
        { name: "Laureano González", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
        { name: "Beatriz Acevedo", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
        { name: "Miryam Barrera", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop" },
    ];

    const foundersRow2: Founder[] = [
        { name: "Lila Cañaveras", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
        { name: "Juan Andrade", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
        { name: "Guillermo Ronderos", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
        { name: "Rosana Bonilla", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" },
    ];

    const FounderCard = ({ founder, delay }: { founder: Founder, delay: number }) => (
        <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className="flex flex-col items-center group cursor-pointer"
        >
            <div className="relative w-28 h-28 md:w-36 md:h-36 mb-6 rounded-full overflow-hidden border-[6px] border-white shadow-lg group-hover:shadow-2xl group-hover:border-accent group-hover:-translate-y-2 transition-all duration-300">
                <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
            </div>
            <h4 className="text-gray-700 font-extrabold text-center text-sm md:text-lg group-hover:text-primary transition-colors">{founder.name}</h4>
            <div className="h-[2px] w-6 bg-gray-200 mt-3 group-hover:bg-accent group-hover:w-12 transition-all duration-300"></div>
        </motion.div>
    );

    return (
        <section id="fundadores" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Soft decorative background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] bg-accent w-12"></div>
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">Quienes iniciaron todo</span>
                        <div className="h-[2px] bg-accent w-12"></div>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-primary drop-shadow-sm">
                        Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Fundadores</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-16 md:gap-24 items-center">
                    {/* First Row */}
                    <div className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20">
                        {foundersRow1.map((founder, idx) => (
                            <FounderCard key={idx} founder={founder} delay={idx * 0.1} />
                        ))}
                    </div>
                    
                    {/* Second Row */}
                    <div className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20">
                        {foundersRow2.map((founder, idx) => (
                            <FounderCard key={idx} founder={founder} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}