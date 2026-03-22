import { WPPost, WPPage, WPCategory } from "@/types/wp";

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || "https://aconino.org/wp-json/wp/v2";
const REVALIDATE_INTERVAL = 3600;

export class WPAPIError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message)
    this.name = 'WPAPIError'
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new WPAPIError(
      `WordPress API error: ${response.statusText}`,
      response.status,
      response.statusText
    )
  }
  return response.json()
}

export async function getLatestPosts(limit = 3): Promise<WPPost[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?per_page=${limit}&_embed=1`, {
      next: { revalidate: REVALIDATE_INTERVAL },
    });
    return handleResponse(res);
  } catch (error) {
    if (error instanceof WPAPIError) {
      throw error;
    }
    throw new WPAPIError(
      error instanceof Error ? error.message : 'Failed to fetch posts'
    );
  }
}

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
      next: { revalidate: 1800 },
    });
    
    const posts: WPPost[] = await handleResponse(res);
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
    const total = parseInt(res.headers.get("X-WP-Total") || "0", 10);
    
    return { posts, totalPages, total };
  } catch (error) {
    if (error instanceof WPAPIError) {
      throw error;
    }
    throw new WPAPIError(
      error instanceof Error ? error.message : 'Failed to fetch blog posts'
    );
  }
}

export async function getCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(`${WP_API_URL}/categories?per_page=50&orderby=count&order=desc`, {
      next: { revalidate: REVALIDATE_INTERVAL },
    });
    return handleResponse(res);
  } catch (error) {
    if (error instanceof WPAPIError) {
      throw error;
    }
    throw new WPAPIError(
      error instanceof Error ? error.message : 'Failed to fetch categories'
    );
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed=1`, {
      next: { revalidate: 1800 },
    });
    const posts: WPPost[] = await handleResponse(res);
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    if (error instanceof WPAPIError) {
      throw error;
    }
    throw new WPAPIError(
      error instanceof Error ? error.message : 'Failed to fetch post'
    );
  }
}

export async function getHomePage(): Promise<WPPage | null> {
  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=inicio,home&_embed=1`, {
      next: { revalidate: REVALIDATE_INTERVAL },
    });
    const pages: WPPage[] = await handleResponse(res);
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    if (error instanceof WPAPIError) {
      throw error;
    }
    throw new WPAPIError(
      error instanceof Error ? error.message : 'Failed to fetch home page'
    );
  }
}
