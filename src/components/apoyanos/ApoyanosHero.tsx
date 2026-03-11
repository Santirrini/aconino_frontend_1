"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useDonation } from "../../providers/DonationProvider";

export default function ApoyanosHero() {
    const { openDonationWidget } = useDonation();

    return (
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden mt-[-80px]">
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
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
                <div className="relative inline-block mb-6">
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
                        className="absolute -top-12 -right-8 z-20"
                    >
                        <FaHeart className="text-accent text-5xl md:text-6xl drop-shadow-lg" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase"
                        style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
                    >
                        Tu apoyo <br className="hidden md:block"/> cambia vidas
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-white/90 mb-10 font-medium"
                >
                    Con tu ayuda podemos continuar ofreciendo neurorehabilitación a niños que lo necesitan.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onClick={openDonationWidget}
                    className="inline-flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-full font-black text-xl tracking-widest shadow-2xl hover:scale-105 hover:bg-yellow-400 transition-all duration-300 uppercase"
                >
                    <FaHeart />
                    Donar Ahora
                </motion.button>
            </div>
        </section>
    );
}
