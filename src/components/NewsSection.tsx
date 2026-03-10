import Link from "next/link";
import Image from "next/image";
import { WPPost } from "../types/wp";
import { FaRegCommentDots } from "react-icons/fa";

interface NewsSectionProps {
    posts: WPPost[];
}

export default function NewsSection({ posts }: NewsSectionProps) {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <span className="text-sm font-semibold text-gray-400 tracking-wider">Aconino</span>
                            <div className="h-px bg-accent w-16"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary">Últimas noticias</h2>
                    </div>

                    <Link href="/noticias" className="mt-6 md:mt-0 inline-flex items-center gap-2 border border-accent text-primary font-bold px-6 py-2 hover:bg-accent hover:text-white transition-colors text-sm tracking-wider">
                        VER TODO <span className="text-lg leading-none">&oplus;</span>
                    </Link>
                </div>

                {/* Grid that looks like a slider for now */}
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
                    {posts.length > 0 ? (
                        posts.map((post) => {
                            const dateObj = new Date(post.date);
                            const day = dateObj.getDate();
                            const month = dateObj.toLocaleDateString("es-ES", { month: "short" }).toUpperCase();

                            return (
                                <article key={post.id} className="min-w-[300px] w-[350px] shrink-0 snap-start bg-white shadow-lg border border-gray-100 flex flex-col relative group">

                                    {/* Thumbnail Placeholder */}
                                    <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                                        <Image
                                            src={`https://via.placeholder.com/400x300/e2e8f0/0c2070?text=Noticia+${post.id}`}
                                            alt={post.title.rendered}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Date Badge */}
                                        <div className="absolute -bottom-4 right-4 bg-accent text-white font-bold flex flex-col items-center justify-center w-14 h-14 z-10 shadow-md">
                                            <span className="text-xl leading-none">{day}</span>
                                            <span className="text-[10px] leading-tight">{month}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 pt-10 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs font-bold text-accent mb-4">
                                            <span className="flex items-center gap-1">Asociación Aconiño</span>
                                            <span className="flex items-center gap-1 text-gray-400 font-normal"><FaRegCommentDots /> 0 Comments</span>
                                        </div>

                                        <h3 className="text-lg font-bold text-primary mb-4 leading-snug line-clamp-3">
                                            {post.title.rendered}
                                        </h3>

                                        <div
                                            className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                        />

                                        <div className="mt-auto">
                                            <Link href={`/noticias/${post.slug}`} className="text-xs font-bold text-gray-400 tracking-wider hover:text-accent flex items-center gap-2 group/link">
                                                <span className="text-accent">&raquo;</span> READ MORE
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })
                    ) : (
                        <p className="text-gray-500 text-center w-full">No se encontraron noticias recientes.</p>
                    )}
                </div>

            </div>
        </section>
    );
}
