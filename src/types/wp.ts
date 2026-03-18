export interface WPCategory {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: "category";
    parent: number;
    meta: unknown[];
    yoast_head?: string;
    yoast_head_json?: YoastHeadJson;
}

export interface WPMedia {
    id: number;
    date: string;
    date_gmt: string;
    guid: { rendered: string };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "inherit" | string;
    type: "attachment";
    link: string;
    title: { rendered: string };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: unknown;
    class_list: string[];
    description: { rendered: string };
    caption: { rendered: string };
    alt_text: string;
    media_type: "file" | "image" | string;
    mime_type: string;
    media_details: {
        filesize?: number;
        sizes?: {
            thumbnail?: MediaSize;
            medium?: MediaSize;
            large?: MediaSize;
            full?: MediaSize;
        };
    };
    post: number | null;
    source_url: string;
}

export interface MediaSize {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

export interface WPPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: { rendered: string };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | string;
    type: "post";
    link: string;
    title: { rendered: string };
    content: { rendered: string; protected: boolean };
    excerpt: { rendered: string; protected: boolean };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: "standard" | string;
    meta: unknown;
    categories: number[];
    tags: number[];
    yoast_head?: string;
    yoast_head_json?: YoastHeadJson;
    _embedded?: {
        "wp:featuredmedia"?: WPMedia[];
    };
}

export interface AcfHomePage {
    hero_title: string;
    hero_subtitle: string;
    hero_background_type: "video" | "image";
    hero_video_url: string;
    hero_image: string;
    hero_cta_text: string;
    hero_cta_link: string;
    about_title: string;
    about_description: string;
    about_image: string;
    about_cta_text: string;
    about_cta_link: string;
    stats_1_value: string;
    stats_1_label: string;
    stats_2_value: string;
    stats_2_label: string;
    stats_3_value: string;
    stats_3_label: string;
}

export interface WPPage {
    id: number;
    date: string;
    date_gmt: string;
    guid: { rendered: string };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | string;
    type: "page";
    link: string;
    title: { rendered: string };
    content: { rendered: string; protected: boolean };
    excerpt: { rendered: string; protected: boolean };
    author: number;
    featured_media: number;
    parent: number;
    menu_order: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: unknown;
    acf?: AcfHomePage | unknown;
    yoast_head?: string;
    yoast_head_json?: YoastHeadJson;
}

export interface YoastHeadJson {
    title: string;
    robots: {
        index: string;
        follow: string;
        "max-snippet": string;
        "max-image-preview": string;
        "max-video-preview": string;
    };
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_url: string;
    og_site_name: string;
    twitter_card: string;
    twitter_site: string;
    schema?: unknown;
}
