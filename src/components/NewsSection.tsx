"use client";

import Link from "next/link";
import Image from "next/image";
import { WPPost } from "../types/wp";
import { FaRegCommentDots, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface NewsSectionProps {
    posts: WPPost[];
}

export default function NewsSection({ posts }: NewsSectionProps) {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="w-full py-20 md:py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">Aconino</span>
                            <div className="h-[2px] bg-accent w-16"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary">Últimas noticias</h2>
                    </div>

                    <Link href="/noticias" className="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary font-bold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm tracking-widest shrink-0 group">
                        VER TODO <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar"
                    style={{ scrollbarWidth: "none" }}
                >
                    {posts.length > 0 ? (
                        posts.map((post) => {
                            const dateObj = new Date(post.date);
                            const day = dateObj.getDate();
                            const month = dateObj.toLocaleDateString("es-ES", { month: "short" }).toUpperCase();
                            const featuredImageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || `https://via.placeholder.com/600x400/e2e8f0/0c2070?text=Noticia+${post.id}`;

                            return (
                                <motion.article 
                                    variants={itemVariants}
                                    key={post.id} 
                                    className="min-w-[320px] w-[400px] shrink-0 snap-start bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col relative group overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative w-full h-72 bg-gray-100 overflow-hidden">
                                        <Image
                                            src={featuredImageUrl}
                                            alt={post.title.rendered}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />

                                        {/* Date Badge */}
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary font-bold flex flex-col items-center justify-center w-16 h-16 rounded-xl z-10 shadow-lg border border-white/20">
                                            <span className="text-2xl leading-none">{day}</span>
                                            <span className="text-[11px] leading-tight mt-1 text-accent">{month}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs font-bold text-accent mb-4 uppercase tracking-wider">
                                            <span className="flex items-center gap-1">Aconiño</span>
                                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                            <span className="flex items-center gap-2 text-gray-400 font-medium"><FaRegCommentDots /> 0 Comentarios</span>
                                        </div>

                                        <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 leading-snug line-clamp-3 group-hover:text-secondary transition-colors">
                                            {post.title.rendered}
                                        </h3>

                                        <div
                                            className="text-gray-500 text-base mb-8 line-clamp-3 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                        />

                                        <div className="mt-auto pt-6 border-t border-gray-100">
                                            <Link href={`/noticias/${post.slug}`} className="text-sm font-bold text-primary tracking-widest flex items-center gap-2 group/link w-fit">
                                                <span className="text-accent text-xl leading-none group-hover/link:translate-x-1 transition-transform">&raquo;</span> LEER MÁS
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })
                    ) : (
                        <div className="w-full py-12 flex justify-center text-gray-400 font-medium text-lg">No se encontraron noticias recientes.</div>
                    )}
                </motion.div>

            </div>
        </section>
    );
}