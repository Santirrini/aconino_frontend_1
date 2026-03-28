import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import InterventionModelSection from "@/components/InterventionModelSection";
import ProgramsSection from "../../components/ProgramsSection";
import ImpactSection from "../../components/ImpactSection";
import CtaSection from "../../components/CtaSection";
import NewsSection from "../../components/NewsSection";
import RecognitionsSection from "../../components/RecognitionsSection";

// Importar cliente y consultas de Sanity
import { client } from "@/sanity/lib/client";
import { LATEST_POSTS_QUERY, HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import type { SanityPost } from "@/lib/sanity-posts";

export const revalidate = 60;

export default async function Home() {
    let sanityHome = null;
    let sanityPosts = [];

    try {
        // Obtener datos del documento unificado y posts
        [sanityHome, sanityPosts] = await Promise.all([
            client.fetch(HOME_PAGE_QUERY).catch(() => null),
            client.fetch(LATEST_POSTS_QUERY).catch(() => [])
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
        hero_cta_link: sanityHome?.cta?.ctaLink || "/contactanos",
        cta_title: sanityHome?.cta?.title || "35 años apoiando la inclusión",
        cta_label: sanityHome?.cta?.ctaLabel || "CONTÁCTANOS",
        cta_background_image: sanityHome?.cta?.backgroundImageUrl || "/images/hero-background-blue.png",
        about_title: sanityHome?.about?.title,
        about_description: sanityHome?.about?.description,
        about_image: sanityHome?.about?.imageUrl,
        experience_label: sanityHome?.about?.experienceLabel,
        experience_value: sanityHome?.about?.experienceValue,
        about_cta_text: sanityHome?.about?.ctaLabel,
        about_cta_link: sanityHome?.about?.ctaLink,
    };

    interface SanityProgram {
        title?: string;
        description?: string;
        imageUrl?: string;
        category?: string;
    }

    const mappedPrograms = sanityHome?.programs?.items?.map((p: SanityProgram) => ({
        title: p.title,
        desc: p.description || '',
        slug: p.title?.toLowerCase().replace(/ /g, '-') || '',
        imageUrl: p.imageUrl || null,
        category: p.category || "Programa Aconiño"
    })) || [];

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
            
            <InterventionModelSection />
            
            <ProgramsSection 
                programs={mappedPrograms}
                sectionTitle={sanityHome?.programs?.sectionTitle}
                sectionDescription={sanityHome?.programs?.sectionDescription}
            />
            
            <ImpactSection 
                title={sanityHome?.impact?.headerTitle}
                description={sanityHome?.impact?.headerDescription}
                stats={sanityHome?.impact?.stats}
                stories={mappedTestimonials}
                ctaButtonText={sanityHome?.impact?.ctaButtonText}
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
