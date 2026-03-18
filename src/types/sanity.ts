export interface SanityPostListItem {
    _id: string
    title: string
    slug: string
    publishedAt?: string
    excerpt?: string
    mainImageUrl?: string
    mainImageAlt?: string
    author?: {
        name: string
        imageUrl?: string
    }
}

export interface SanityCategoryListItem {
    _id: string
    title: string
    slug: string
    description?: string
}

export interface SanityPostDetail {
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
    categories?: SanityCategoryListItem[]
}
