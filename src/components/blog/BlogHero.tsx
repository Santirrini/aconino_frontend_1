"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogHero() {
    return (
        <section className="relative w-full bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
            {/* Abstract background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
                {/* Pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-24">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm block mb-4">
                            Noticias y Actualidad
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6"
                    >
                        Blog
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-8"
                    >
                        Historias de transformación, avances en neurodesarrollo y noticias de nuestra asociación.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center justify-center gap-2 text-white/50 text-sm"
                    >
                        <Link href="/" className="hover:text-white transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-accent font-semibold">Blog</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
