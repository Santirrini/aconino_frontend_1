import { WPPost, WPPage, WPCategory } from "../types/wp";

// Use environment variable or default to the live URL
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "https://aconino.org/wp-json/wp/v2";

/**
 * Fetch latest posts from WordPress REST API.
 * Uses Next.js Incremental Static Regeneration (ISR) with revalidation cache.
 */
export async function getLatestPosts(limit = 3): Promise<WPPost[]> {
    try {
        const res = await fetch(`${WP_API_URL}/posts?per_page=${limit}&_embed=1`, {
            next: { revalidate: 3600 }, // Revalidate every hour
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch posts: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching WP posts:", error);
        return [];
    }
}

/**
 * Fetch paginated blog posts with optional category filter.
 */
export interface BlogPostsResponse {
    posts: WPPost[];
    totalPages: number;
    total: number;
}

export async function getBlogPosts(
    page = 1,
    perPage = 9,
    categoryId?: number
): Promise<BlogPostsResponse> {
    try {
        let url = `${WP_API_URL}/posts?per_page=${perPage}&page=${page}&_embed=1`;
        if (categoryId) {
            url += `&categories=${categoryId}`;
        }

        const res = await fetch(url, {
            next: { revalidate: 1800 }, // 30 min
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blog posts: ${res.statusText}`);
        }

        const posts: WPPost[] = await res.json();
        const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
        const total = parseInt(res.headers.get("X-WP-Total") || "0", 10);

        return { posts, totalPages, total };
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return { posts: [], totalPages: 1, total: 0 };
    }
}

/**
 * Fetch all categories from WordPress.
 */
export async function getCategories(): Promise<WPCategory[]> {
    try {
        const res = await fetch(`${WP_API_URL}/categories?per_page=50&orderby=count&order=desc`, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch categories: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching WP categories:", error);
        return [];
    }
}

/**
 * Fetch a single post by slug.
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    try {
        const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed=1`, {
            next: { revalidate: 1800 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch post: ${res.statusText}`);
        }

        const posts: WPPost[] = await res.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error("Error fetching WP post:", error);
        return null;
    }
}

/**
 * Fetch the homepage data from WordPress REST API.
 * Assuming the homepage has a specific slug, e.g., 'home' or 'inicio'.
 */
export async function getHomePage(): Promise<WPPage | null> {
    try {
        // We'll try to fetch by slug 'inicio' or 'home'. Modify this if the slug is different.
        const res = await fetch(`${WP_API_URL}/pages?slug=inicio,home&_embed=1`, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch home page: ${res.statusText}`);
        }

        const pages: WPPage[] = await res.json();
        if (pages.length > 0) {
            return pages[0]; // Return the first matching page
        }
        return null;
    } catch (error) {
        console.error("Error fetching WP home page:", error);
        return null;
    }
}

