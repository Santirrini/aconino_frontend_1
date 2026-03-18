import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import ProgramsSection from "../../components/ProgramsSection";
import ImpactSection from "../../components/ImpactSection";
import CtaSection from "../../components/CtaSection";
import NewsSection from "../../components/NewsSection";
import RecognitionsSection from "../../components/RecognitionsSection";

// Importar cliente y consultas de Sanity
import { client } from "@/sanity/lib/client";
import { LATEST_POSTS_QUERY, CTA_SECTION_QUERY, ABOUT_SECTION_QUERY, HOME_HERO_QUERY, HOME_PROGRAMS_QUERY, HOME_RECOGNITIONS_QUERY, HOME_NEWS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
    let sanityHero = null;
    let sanityPrograms = null;
    let sanityRecognitions = null;
    let sanityNews = null;
    let sanityPosts = [];
    let sanityCta = null;
    let sanityAbout = null;

    try {
        // Obtener datos de documentos separados en paralelo
        [sanityHero, sanityPrograms, sanityRecognitions, sanityNews, sanityPosts, sanityCta, sanityAbout] = await Promise.all([
            client.fetch(HOME_HERO_QUERY).catch(() => null),
            client.fetch(HOME_PROGRAMS_QUERY).catch(() => null),
            client.fetch(HOME_RECOGNITIONS_QUERY).catch(() => null),
            client.fetch(HOME_NEWS_QUERY).catch(() => null),
            client.fetch(LATEST_POSTS_QUERY).catch(() => []),
            client.fetch(CTA_SECTION_QUERY).catch(() => null),
            client.fetch(ABOUT_SECTION_QUERY).catch(() => null)
        ]);
    } catch (error) {
        console.error('Error fetching Sanity data:', error);
    }

    // Mapear datos para el Hero
    const acf = {
        hero_title: sanityHero?.slogan?.split(' ').slice(0, 2).join(' ') || "35 años", 
        hero_subtitle: sanityHero?.slogan?.split(' ').slice(2).join(' ') || "apoyando la inclusión",
        hero_background_type: sanityHero?.backgroundType || "image", 
        hero_video_url: sanityHero?.backgroundVideoUrl || "",
        hero_image: sanityHero?.backgroundImageUrl || "/images/hero-background-blue.png",
        hero_impact: sanityHero?.impact,
        hero_cta_text: sanityPrograms?.ctaLabel || "CONTÁCTANOS",
        hero_cta_link: "/contactanos",
        // CTA Section Data
        cta_title: sanityCta?.title || "35 años apoyando la inclusión",
        cta_label: sanityCta?.ctaLabel || "CONTÁCTANOS",
        cta_background_image: sanityCta?.backgroundImageUrl || "/images/hero-background-blue.png",
        // About Section Data
        about_title: sanityAbout?.title,
        about_description: sanityAbout?.description,
        about_image: sanityAbout?.imageUrl,
        stats_1_value: sanityAbout?.statsValue,
        stats_1_label: sanityAbout?.statsLabel,
        about_cta_text: sanityAbout?.ctaLabel,
        about_cta_link: sanityAbout?.ctaLink,
    };

    // Mapear Programas
    interface SanityProgram {
        title?: string;
        description?: string;
        imageUrl?: string;
    }

    const mappedPrograms = sanityPrograms?.items?.map((p: SanityProgram) => ({
        title: p.title,
        desc: p.description || '',
        slug: p.title?.toLowerCase().replace(/ /g, '-') || '',
        imageUrl: p.imageUrl || null
    })) || [];

    // Mapear Noticias
    interface SanityPost {
        _id: string;
        slug: string | null;
        publishedAt?: string | null;
        _createdAt: string;
        title?: string;
        excerpt?: string | null;
        mainImageUrl?: string;
    }

    // Función para generar slug desde título
    const generateSlug = (title?: string, existingSlug?: string | null): string => {
        if (existingSlug && existingSlug.trim() !== '') {
            return existingSlug;
        }
        if (title) {
            return title
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-');
        }
        return '';
    };

    const mappedPosts = sanityPosts.map((post: SanityPost) => ({
        id: post._id,
        slug: generateSlug(post.title, post.slug),
        date: post.publishedAt || post._createdAt,
        title: { rendered: post.title },
        excerpt: { rendered: post.excerpt || '<p>Leer más...</p>' },
        _embedded: {
            'wp:featuredmedia': [{ source_url: post.mainImageUrl || "/images/hero-background-blue.png" }]
        }
    }));

    return (
        <div className="w-full">
            <Hero acf={acf} />
            
            <AboutSection acf={acf} />
            
            <ProgramsSection 
                programs={mappedPrograms} 
                subtitle={sanityPrograms?.subtitle}
                clinicalFocus={sanityPrograms?.clinicalFocus}
                familySupport={sanityPrograms?.familySupport}
                ctaLabel={sanityPrograms?.ctaLabel}
            />
            
            <ImpactSection 
                title={sanityHero?.impact || "+35 años apoyando la inclusión!"}
                stats={[]}
                stories={[]}
                ctaButtonText="Ver más"
            />
            
            <CtaSection acf={acf} />
            
            <NewsSection 
                posts={mappedPosts} 
                title={sanityNews?.title || "Últimas noticias"} 
                showSection={true} 
            />
            
            <RecognitionsSection 
                text={sanityRecognitions?.title} 
                recognitions={sanityRecognitions?.items} 
            />
        </div>
    );
}
