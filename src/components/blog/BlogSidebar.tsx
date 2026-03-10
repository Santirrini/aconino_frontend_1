"use client";

import Link from "next/link";
import Image from "next/image";
import { WPPost, WPCategory } from "@/types/wp";
import { FaSearch } from "react-icons/fa";

function extractImageUrl(post: WPPost): string | null {
    const media = post._embedded?.["wp:featuredmedia"];
    if (media && media.length > 0) {
        return media[0].source_url || null;
    }
    return null;
}

interface BlogSidebarProps {
    recentPosts: WPPost[];
    categories: WPCategory[];
    currentCategory?: string;
}

export default function BlogSidebar({ recentPosts, categories, currentCategory }: BlogSidebarProps) {
    return (
        <aside className="space-y-8">
            {/* Search */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <form action="/blog" method="GET" className="relative">
                    <input
                        type="text"
                        name="s"
                        placeholder="Buscar artículos..."
                        className="w-full bg-gray-50 rounded-xl px-4 py-3 pr-10 text-sm text-gray-700 placeholder-gray-400 border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all"
                    />
                    <button
                        type="submit"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                    >
                        <FaSearch className="text-sm" />
                    </button>
                </form>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-5 flex items-center gap-2">
                    <div className="w-1 h-5 bg-accent rounded-full" />
                    Entradas Recientes
                </h3>
                <div className="space-y-4">
                    {recentPosts.map((post) => {
                        const imageUrl = extractImageUrl(post);
                        return (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="flex items-start gap-3 group"
                            >
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-gray-100 relative">
                                    {imageUrl ? (
                                        <Image
                                            src={imageUrl}
                                            alt={post.title.rendered}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            sizes="56px"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-primary/30 text-xs font-bold">Ɖ</span>
                                        </div>
                                    )}
                                </div>
                                <h4
                                    className="text-sm font-semibold text-gray-700 leading-tight line-clamp-2 group-hover:text-primary transition-colors"
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-5 flex items-center gap-2">
                    <div className="w-1 h-5 bg-accent rounded-full" />
                    Categorías
                </h3>
                <div className="space-y-1">
                    {categories.map((cat) => {
                        const isActive = currentCategory === cat.slug;
                        return (
                            <Link
                                key={cat.id}
                                href={`/blog?categoria=${cat.slug}`}
                                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group ${isActive
                                    ? "bg-primary text-white font-bold"
                                    : "text-gray-600 hover:bg-primary/5 hover:text-primary"
                                    }`}
                            >
                                <span className="font-medium">{cat.name}</span>
                                <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${isActive
                                        ? "bg-white/20 text-white"
                                        : "bg-gray-100 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary"
                                        }`}
                                >
                                    {cat.count}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[60px]" />
                <div className="relative z-10">
                    <p className="text-2xl mb-1">♥</p>
                    <h3 className="text-lg font-extrabold mb-2">¿Quieres apoyar?</h3>
                    <p className="text-white/70 text-sm mb-4">
                        Tu aporte transforma vidas.
                    </p>
                    <Link
                        href="/apoyanos"
                        className="inline-block bg-accent text-primary px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-all duration-300"
                    >
                        Donar ahora
                    </Link>
                </div>
            </div>
        </aside>
    );
}
