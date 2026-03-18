import Image from "next/image"
import Link from "next/link"
import { getPostBySlug, getRecentPosts, getCategories, getPosts } from "@/lib/sanity-posts"
import { notFound } from "next/navigation"
import BlogSidebar from "@/components/blog/BlogSidebar"
import BlogContent from "@/components/blog/BlogContent"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { FaCalendarAlt, FaArrowLeft, FaUser } from "react-icons/fa"

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return notFound()
    }

    const [recentPosts, categories] = await Promise.all([
        getRecentPosts(5),
        getCategories(),
    ])

    const date = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
          })
        : null

    return (
        <article className="min-h-screen bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `radial-gradient(#cbd5e1 0.5px, transparent 0.5px)`,
                    backgroundSize: '24px 24px'
                }}
            />
            <header className="bg-primary text-white pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal animation="fade-in" delay={0.1}>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Volver al blog</span>
                        </Link>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={0.2}>
                        <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
                            {date && (
                                <div className="flex items-center gap-1.5">
                                    <FaCalendarAlt className="text-accent text-xs" />
                                    <time dateTime={post.publishedAt}>{date}</time>
                                </div>
                            )}
                            {post.author && (
                                <>
                                    <span>·</span>
                                    <div className="flex items-center gap-1.5">
                                        <FaUser className="text-accent text-xs" />
                                        <span>{post.author.name}</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="zoom-in" delay={0.3}>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            {post.title}
                        </h1>
                    </ScrollReveal>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
                    <div className="lg:col-span-2">
                        {post.mainImageUrl && (
                            <ScrollReveal animation="fade-up" delay={0.1}>
                                <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-10 -mt-12 md:-mt-16">
                                    <Image
                                        src={post.mainImageUrl}
                                        alt={post.mainImageAlt || post.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </ScrollReveal>
                        )}

                        {post.body && (
                            <ScrollReveal animation="fade-up" delay={0.2}>
                                <BlogContent content={post.body} />
                            </ScrollReveal>
                        )}

                        <ScrollReveal animation="fade-up" delay={0.3}>
                            <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-secondary transition-all"
                                >
                                    <FaArrowLeft className="text-xs" />
                                    Volver al blog
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="lg:sticky lg:top-36">
                            <BlogSidebar
                                recentPosts={recentPosts}
                                categories={categories}
                            />
                        </div>
                </div>
            </div>
        </article>
    )
}

export async function generateStaticParams() {
    const { posts } = await getPosts(1)
    return posts.map((post) => ({
        slug: post.slug,
    }))
}
