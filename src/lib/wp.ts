import { WPPost, WPPage } from "../types/wp";

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

