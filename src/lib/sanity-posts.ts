import { client } from '@/sanity/lib/client'
import { fetchWithError } from '@/sanity/lib/errors'
import { PAGINATION } from '@/constants'
import type {
  SanityPost,
  SanityCategory,
  PostsResponse,
} from '@/types/sanity'

export type { SanityPost, SanityCategory, PostsResponse }

import {
  ALL_POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  POSTS_COUNT_QUERY,
  POSTS_BY_CATEGORY_QUERY,
  POSTS_COUNT_BY_CATEGORY_QUERY,
  ALL_CATEGORIES_QUERY,
  RECENT_POSTS_QUERY,
} from '@/sanity/lib/queries'

const POSTS_PER_PAGE = PAGINATION.POSTS_PER_PAGE

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
      fetchWithError(
        () => client.fetch<Post[]>(POSTS_BY_CATEGORY_QUERY, { categorySlug, start, end }),
        'Failed to fetch posts by category'
      ),
      fetchWithError(
        () => client.fetch<number>(POSTS_COUNT_BY_CATEGORY_QUERY, { categorySlug }),
        'Failed to count posts by category'
      ),
    ])
  } else {
    ;[posts, total] = await Promise.all([
      fetchWithError(
        () => client.fetch<SanityPost[]>(ALL_POSTS_QUERY, { start, end }),
        'Failed to fetch posts'
      ),
      fetchWithError(
        () => client.fetch<number>(POSTS_COUNT_QUERY),
        'Failed to count posts'
      ),
    ])
  }

  const totalPages = Math.ceil(total / POSTS_PER_PAGE)

  return { posts, totalPages, total }
}

type Post = SanityPost

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return fetchWithError(
    () => client.fetch<SanityPost | null>(POST_BY_SLUG_QUERY, { slug }),
    `Failed to fetch post: ${slug}`
  )
}

export async function getCategories(): Promise<SanityCategory[]> {
  return fetchWithError(
    () => client.fetch<SanityCategory[]>(ALL_CATEGORIES_QUERY),
    'Failed to fetch categories'
  )
}

export async function getRecentPosts(limit = PAGINATION.RECENT_POSTS_LIMIT): Promise<SanityPost[]> {
  return fetchWithError(
    () => client.fetch<SanityPost[]>(RECENT_POSTS_QUERY, { limit }),
    'Failed to fetch recent posts'
  )
}

export async function getAllPostsSlugs(): Promise<string[]> {
  return fetchWithError(
    async () => {
      const posts = await client.fetch<{ slug: string }[]>(`
        *[_type == "post" && defined(slug.current)] {
          "slug": slug.current
        }
      `)
      return posts.map((p) => p.slug)
    },
    'Failed to fetch all post slugs'
  )
}
