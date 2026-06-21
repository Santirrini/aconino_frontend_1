import Hero from "../../components/Hero";
import { InterventionModelSection } from "@/components/InterventionModelSection";
import ProgramsSection from "../../components/ProgramsSection";
import ImpactSection from "../../components/ImpactSection";
import SocialFeedSection from "../../components/SocialFeedSection";
import RecognitionsSection from "../../components/RecognitionsSection";

import { client } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import type { HeroSliderSlide } from "@/components/shared/HeroSlider";

export const revalidate = 60;

export default async function Home() {
    let sanityHome = null;

    try {
        sanityHome = await client.fetch(HOME_PAGE_QUERY).catch(() => null);
    } catch (error) {
        console.error('Error fetching Sanity data:', error);
    }

    // Mapear datos para el Hero - estructura homePage
    const heroData = sanityHome?.hero;
    const acf = {
        hero_title: heroData?.slogan?.split(' ').slice(0, 2).join(' ') || "35 años", 
        hero_subtitle: heroData?.slogan?.split(' ').slice(2).join(' ') || "apoyando la inclusión",
        hero_background_type: heroData?.backgroundType || "image", 
        hero_video_url: heroData?.backgroundVideoUrl || "",
        hero_image: heroData?.backgroundImageUrl || "/images/hero-background-blue.png",
        hero_impact: heroData?.impact,
        hero_cta_text: sanityHome?.programs?.ctaLabel || "CONTÁCTANOS",
        hero_cta_link: sanityHome?.cta?.ctaLink || "/contactanos",
        cta_title: sanityHome?.cta?.title || "35 años apoiando la inclusión",
        cta_label: sanityHome?.cta?.ctaLabel || "CONTÁCTANOS",
        cta_background_image: sanityHome?.cta?.backgroundImageUrl || "/images/hero-background-blue.png",
    };

    // Debug: verificar datos del Hero
    console.log('DEBUG heroData:', JSON.stringify(heroData, null, 2));

    interface SanityProgram {
        title?: string;
        description?: string;
        imageUrl?: string;
        category?: string;
    }

    const programTitles = [
        "Atención temprana",
        "Atención a niños y jóvenes",
        "Apoyo a dificultades en el aprendizaje",
        "Protocolo Intensivo Pediasuit",
    ];

    const mappedPrograms = sanityHome?.programs?.items?.map((p: SanityProgram, i: number) => ({
        title: programTitles[i] ?? p.title,
        desc: p.description || '',
        slug: p.title?.toLowerCase().replace(/ /g, '-') || '',
        imageUrl: p.imageUrl || null,
        category: p.category || "Programa Aconiño"
    })) || [];

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

    interface SanityHeroSlide {
        imageUrl?: string;
        alt?: string;
        overlayOpacity?: number;
    }

    // Debug: verificar datos del Hero
    console.log('DEBUG heroData:', JSON.stringify(heroData, null, 2));

    // Determinar si mostrar carrusel o imagen individual
    // Solo mostrar carrusel si hay slides Y tienen imagen válida
    const rawSlides = heroData?.heroSlides;
    const hasValidSlides = Array.isArray(rawSlides) && rawSlides.length > 0 && rawSlides.some((s: SanityHeroSlide) => s.imageUrl);
    console.log('DEBUG hasValidSlides:', hasValidSlides, 'rawSlides:', rawSlides);

    const heroSlides: HeroSliderSlide[] | undefined = hasValidSlides
        ? rawSlides
            .filter((s: SanityHeroSlide) => s.imageUrl)
            .map((s: SanityHeroSlide) => ({
                src: s.imageUrl!,
                alt: s.alt || '',
                overlayOpacity: s.overlayOpacity,
            }))
        : undefined;

    return (
        <div className="w-full">
            <Hero acf={acf} slides={heroSlides} />
            
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

            <SocialFeedSection
                title="Entérate primero"
                description="Sigue nuestras últimas actividades y noticias en tiempo real a través de nuestras redes sociales."
            />
            
            <RecognitionsSection 
                text={sanityHome?.recognitions?.title} 
                recognitions={sanityHome?.recognitions?.items} 
            />
        </div>
    );
}
