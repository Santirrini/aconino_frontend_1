import { getPosts, getCategories, getRecentPosts } from "@/lib/sanity-posts"
import BlogHero from "@/components/blog/BlogHero"
import BlogPostCard from "@/components/blog/BlogPostCard"
import BlogSidebar from "@/components/blog/BlogSidebar"
import BlogPagination from "@/components/blog/BlogPagination"

export const metadata = {
    title: "Blog - Asociación Aconiño",
    description:
        "Noticias, artículos y actualidad sobre neurodesarrollo, inclusión social y los programas de la Asociación Aconiño.",
}

interface BlogPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const params = await searchParams
    const page = typeof params.pagina === "string" ? parseInt(params.pagina, 10) || 1 : 1
    const categorySlug = typeof params.categoria === "string" ? params.categoria : undefined

    const [{ posts, totalPages }, categories, recentPosts] = await Promise.all([
        getPosts(page, categorySlug),
        getCategories(),
        getRecentPosts(5)
    ])

    const featuredPost = page === 1 && posts.length > 0 ? posts[0] : null
    const gridPosts = page === 1 ? posts.slice(1) : posts

    return (
        <main className="min-h-screen bg-slate-50 relative">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `radial-gradient(#cbd5e1 0.5px, transparent 0.5px)`,
                    backgroundSize: '24px 24px'
                }}
            />
            <BlogHero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
                    <div className="lg:col-span-2">
                        {featuredPost && (
                            <div className="mb-12">
                                <BlogPostCard post={featuredPost} featured />
                            </div>
                        )}

                        {gridPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {gridPosts.map((post, idx) => (
                                    <BlogPostCard key={post._id} post={post} index={idx} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-gray-400 text-lg">
                                    No se encontraron artículos
                                    {categorySlug ? ` en esta categoría` : ""}.
                                </p>
                            </div>
                        )}

                        <BlogPagination
                            currentPage={page}
                            totalPages={totalPages}
                            categoryParam={categorySlug}
                        />
                    </div>

                    <div className="order-first lg:order-last">
                        <div className="lg:sticky lg:top-36">
                            <BlogSidebar
                                recentPosts={recentPosts}
                                categories={categories}
                                currentCategory={categorySlug}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
