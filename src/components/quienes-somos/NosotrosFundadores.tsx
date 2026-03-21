"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FundadorData {
    name?: string;
    role?: string;
    imageUrl?: string;
    imageAlt?: string;
}

interface Props {
    data?: FundadorData[] | null;
}

const defaultFundadores: FundadorData[] = [
    { name: "Berta Brunal", role: "Fundadora", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
    { name: "Patricia Flórez", role: "Fundadora", imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop" },
    { name: "Laureano González", role: "Fundador", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
    { name: "Beatriz Acevedo", role: "Fundadora", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
    { name: "Miryam Barrera", role: "Fundadora", imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop" },
    { name: "Lila Cañaveras", role: "Fundadora", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
    { name: "Juan Andrade", role: "Fundador", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
    { name: "Guillermo Ronderos", role: "Fundador", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
    { name: "Rosana Bonilla", role: "Fundadora", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" },
];

export default function NosotrosFundadores({ data }: Props) {
    const fundadores = data && data.length > 0 ? data : defaultFundadores;

    const FounderCard = ({ founder, delay }: { founder: FundadorData, delay: number }) => (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: 'saturate(0.2) brightness(0.8)' }}
            whileInView={{ 
                opacity: 1, 
                scale: 1, 
                filter: 'saturate(1) brightness(1)',
                transition: { duration: 0.8, delay, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="flex flex-col items-center w-full max-w-[120px] md:max-w-none mx-auto group cursor-pointer"
        >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-36 md:h-36 mb-3 md:mb-6 rounded-full overflow-hidden border-2 md:border-[6px] border-white shadow-lg group-hover:shadow-accent/30 transition-all duration-500 ring-4 ring-transparent group-hover:ring-accent/20">
                <Image
                    src={founder.imageUrl || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"}
                    alt={founder.name || "Fundador"}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Subtle Bloom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <h4 className="text-primary group-hover:text-accent font-black text-center text-[11px] md:text-xl leading-tight px-1 transition-colors duration-300">
                {founder.name}
            </h4>
            
            <span className="text-accent/80 font-bold text-[8px] md:text-xs uppercase tracking-[0.1em] mt-1">
                {founder.role || "Fundador/a"}
            </span>
        </motion.div>
    );

    return (
        <section id="fundadores" className="py-16 md:py-32 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10 md:mb-20">
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
                        <div className="h-[1px] md:h-[2px] bg-accent w-8 md:w-12"></div>
                        <span className="text-[10px] md:text-sm font-bold text-gray-400 tracking-widest uppercase">Quienes iniciaron todo</span>
                        <div className="h-[1px] md:h-[2px] bg-accent w-8 md:w-12"></div>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black text-primary leading-tight">
                        Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Fundadores</span>
                    </h2>
                </div>

                {/* FORCE GRID: Inline styles to override any CSS conflict */}
                <div 
                    className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 md:gap-y-20 gap-x-2 md:gap-x-10"
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' 
                    }}
                >
                    {/* Responsive Grid for Desktop handled by Tailwind, Mobile forced by inline style */}
                    <style jsx>{`
                        @media (min-width: 768px) {
                            div {
                                grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
                            }
                        }
                        @media (min-width: 1024px) {
                            div {
                                grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
                            }
                        }
                    `}</style>
                    
                    {fundadores.map((founder, idx) => (
                        <FounderCard 
                            key={idx} 
                            founder={founder} 
                            delay={idx * 0.03} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
