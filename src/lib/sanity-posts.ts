import { client } from '@/sanity/lib/client'
import {
  ALL_POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  POSTS_COUNT_QUERY,
  POSTS_BY_CATEGORY_QUERY,
  POSTS_COUNT_BY_CATEGORY_QUERY,
  ALL_CATEGORIES_QUERY,
  RECENT_POSTS_QUERY,
} from '@/sanity/lib/queries'

export interface SanityPost {
  _id: string
  title: string
  slug: string
  publishedAt?: string
  excerpt?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[]
  mainImageUrl?: string
  mainImageAlt?: string
  author?: {
    _id?: string
    name: string
    imageUrl?: string
  }
  categories?: SanityCategory[]
}

export interface SanityCategory {
  _id: string
  title: string
  slug: string
  description?: string
}

export interface PostsResponse {
  posts: SanityPost[]
  totalPages: number
  total: number
}

const POSTS_PER_PAGE = 9

export async function getPosts(
  page = 1,
  categorySlug?: string
): Promise<PostsResponse> {
  const start = (page - 1) * POSTS_PER_PAGE
  const end = start + POSTS_PER_PAGE

  let posts: SanityPost[]
  let total: number

  if (categorySlug) {
    ;[posts, total] = await Promise.all([
      client.fetch(POSTS_BY_CATEGORY_QUERY, {
        categorySlug,
        start,
        end,
      }),
      client.fetch(POSTS_COUNT_BY_CATEGORY_QUERY, { categorySlug }),
    ])
  } else {
    ;[posts, total] = await Promise.all([
      client.fetch(ALL_POSTS_QUERY, { start, end }),
      client.fetch(POSTS_COUNT_QUERY),
    ])
  }

  const totalPages = Math.ceil(total / POSTS_PER_PAGE)

  return { posts, totalPages, total }
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug })
  return post || null
}

export async function getCategories(): Promise<SanityCategory[]> {
  return client.fetch(ALL_CATEGORIES_QUERY)
}

export async function getRecentPosts(limit = 5): Promise<SanityPost[]> {
  return client.fetch(RECENT_POSTS_QUERY, { limit })
}

export async function getAllPostsSlugs(): Promise<string[]> {
  const posts = await client.fetch<{ slug: string }[]>(`
    *[_type == "post" && defined(slug.current)] {
      "slug": slug.current
    }
  `)
  return posts.map((p) => p.slug)
}
