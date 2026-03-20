import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import ProgramsSection from "../../components/ProgramsSection";
import ImpactSection from "../../components/ImpactSection";
import CtaSection from "../../components/CtaSection";
import NewsSection from "../../components/NewsSection";
import RecognitionsSection from "../../components/RecognitionsSection";

// Importar cliente y consultas de Sanity
import { client } from "@/sanity/lib/client";
import { LATEST_POSTS_QUERY, CTA_SECTION_QUERY, ABOUT_SECTION_QUERY, HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
    let sanityHome = null;
    let sanityPosts = [];
    let sanityCta = null;
    let sanityAbout = null;

    try {
        // Obtener datos del documento unificado y documentos independientes
        [sanityHome, sanityPosts, sanityCta, sanityAbout] = await Promise.all([
            client.fetch(HOME_PAGE_QUERY).catch(() => null),
            client.fetch(LATEST_POSTS_QUERY).catch(() => []),
            client.fetch(CTA_SECTION_QUERY).catch(() => null),
            client.fetch(ABOUT_SECTION_QUERY).catch(() => null)
        ]);
    } catch (error) {
        console.error('Error fetching Sanity data:', error);
    }

    // Mapear datos para el Hero desde documento unificado
    const acf = {
        hero_title: sanityHome?.hero?.slogan?.split(' ').slice(0, 2).join(' ') || "35 años", 
        hero_subtitle: sanityHome?.hero?.slogan?.split(' ').slice(2).join(' ') || "apoyando la inclusión",
        hero_background_type: sanityHome?.hero?.backgroundType || "image", 
        hero_video_url: sanityHome?.hero?.backgroundVideoUrl || "",
        hero_image: sanityHome?.hero?.backgroundImageUrl || "/images/hero-background-blue.png",
        hero_impact: sanityHome?.hero?.impact,
        hero_cta_text: sanityHome?.programs?.ctaLabel || "CONTÁCTANOS",
        hero_cta_link: "/contactanos",
        cta_title: sanityCta?.title || "35 años apoiando la inclusión",
        cta_label: sanityCta?.ctaLabel || "CONTÁCTANOS",
        cta_background_image: sanityCta?.backgroundImageUrl || "/images/hero-background-blue.png",
        about_title: sanityAbout?.title,
        about_description: sanityAbout?.description,
        about_image: sanityAbout?.imageUrl,
        experience_label: sanityAbout?.experienceLabel,
        experience_value: sanityAbout?.experienceValue,
        about_cta_text: sanityAbout?.ctaLabel,
        about_cta_link: sanityAbout?.ctaLink,
    };

    interface SanityProgram {
        title?: string;
        description?: string;
        imageUrl?: string;
    }

    const mappedPrograms = sanityHome?.programs?.items?.map((p: SanityProgram) => ({
        title: p.title,
        desc: p.description || '',
        slug: p.title?.toLowerCase().replace(/ /g, '-') || '',
        imageUrl: p.imageUrl || null
    })) || [];

    interface SanityPost {
        _id: string;
        slug: string | null;
        publishedAt?: string | null;
        _createdAt: string;
        title?: string;
        excerpt?: string | null;
        mainImageUrl?: string;
    }

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

    interface SanityTestimonial {
        name?: string;
        quote?: string;
        imageUrl?: string;
    }

    const mappedTestimonials = sanityHome?.testimonials?.items?.map((t: SanityTestimonial) => ({
        name: t.name || 'Familia Aconiño',
        quote: t.quote || 'Gracias a Aconiño, nuestro hijo ha logrado avances increíbles.',
        image: t.imageUrl || null
    })) || [];

    return (
        <div className="w-full">
            <Hero acf={acf} />
            
            <AboutSection acf={acf} />
            
            <ProgramsSection 
                programs={mappedPrograms} 
            />
            
            <ImpactSection 
                title={sanityHome?.hero?.impact}
                stories={mappedTestimonials}
                ctaButtonText="Ver más"
            />
            
            <CtaSection acf={acf} />
            
            <NewsSection 
                posts={mappedPosts} 
                title={sanityHome?.news?.title || "Últimas noticias"} 
                showSection={true} 
            />
            
            <RecognitionsSection 
                text={sanityHome?.recognitions?.title} 
                recognitions={sanityHome?.recognitions?.items} 
            />
        </div>
    );
}
