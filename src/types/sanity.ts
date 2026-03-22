import type { PortableTextBlock } from "@portabletext/react"

export interface SanityImageAsset {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    width: number
    height: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export type SanityBlockContent = PortableTextBlock[]

export interface SanityAuthor {
  _id: string
  name: string
  imageUrl?: string
  bio?: string
}

export interface SanityCategoryListItem {
  _id: string
  title: string
  slug: string
  description?: string
}

export interface SanityPostListItem {
  _id: string
  title: string
  slug: string | null
  publishedAt?: string | null
  excerpt?: string | null
  mainImageUrl?: string | null
  mainImageAlt?: string | null
  author?: {
    name: string
    imageUrl?: string | null
  }
}

export interface SanityPostDetail {
  _id: string
  title: string
  slug: string | null
  publishedAt?: string
  _createdAt?: string
  excerpt?: string
  body?: SanityBlockContent
  mainImageUrl?: string
  mainImageAlt?: string
  author?: SanityAuthor
  categories?: SanityCategoryListItem[]
}

export type SanityPost = SanityPostDetail
export type SanityCategory = SanityCategoryListItem

export interface PostsResponse {
  posts: SanityPost[]
  totalPages: number
  total: number
}
