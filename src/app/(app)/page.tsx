import { getPayload } from "payload";
import configPromise from "@payload-config";
import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import ProgramsSection from "../../components/ProgramsSection";
import CtaSection from "../../components/CtaSection";
import NewsSection from "../../components/NewsSection";
import RecognitionsSection from "../../components/RecognitionsSection";
import { getLatestPosts } from "../../lib/wp";
import { WPPost } from "../../types/wp";

export default async function Home() {
    const posts: WPPost[] = await getLatestPosts(6); // Fetches up to 6 for the slider
    
    // Fetch Global configuration from Payload
    const payload = await getPayload({ config: configPromise });
    const homePage = await payload.findGlobal({ slug: "home-page" });

    // Map Payload Global to the 'acf' format our components expect (or direct data)
    const acf = {
        hero_title: homePage.hero?.title,
        hero_subtitle: homePage.hero?.subtitle,
        hero_background_type: homePage.hero?.backgroundType,
        hero_video_url: homePage.hero?.videoUrl,
        hero_image: typeof homePage.hero?.backgroundImage === 'object' && homePage.hero.backgroundImage !== null ? homePage.hero.backgroundImage.url : null,
        
        about_title: homePage.about?.title,
        about_description: homePage.about?.description,
        about_image: typeof homePage.about?.image === 'object' && homePage.about.image !== null ? homePage.about.image.url : null,
        about_cta_text: homePage.about?.ctaText,
        about_cta_link: homePage.about?.ctaLink,
        stats_1_value: homePage.about?.statsValue,
        stats_1_label: homePage.about?.statsLabel,

        hero_cta_text: homePage.cta?.buttonText,
        hero_cta_link: homePage.cta?.buttonLink,
    };
    
    const mappedPrograms = homePage.programs?.list?.map((p: any) => ({
        title: p.title,
        desc: p.description,
    }));

    const mappedRecognitions = homePage.recognitions?.list?.map((r: any) => ({
        title: r.title,
        meta: r.meta,
        description: r.description,
        imageUrl: typeof r.image === 'object' && r.image !== null ? r.image.url : null,
    }));

    return (
        <div className="w-full">
            <Hero acf={acf} />
            <AboutSection acf={acf} />
            {mappedPrograms && mappedPrograms.length > 0 ? (
                <ProgramsSection programs={mappedPrograms} />
            ) : (
                <ProgramsSection />
            )}
            <CtaSection acf={acf} />
            <NewsSection posts={posts} />
            {mappedRecognitions && mappedRecognitions.length > 0 ? (
                <RecognitionsSection recognitions={mappedRecognitions} />
            ) : (
                <RecognitionsSection />
            )}
        </div>
    );
}
