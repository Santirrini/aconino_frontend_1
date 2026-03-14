import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import ProgramsSection from "../../components/ProgramsSection";
import ProgramsProcedure from "../../components/ProgramsProcedure";
import ImpactSection from "../../components/ImpactSection";
import CtaSection from "../../components/CtaSection";
import NewsSection from "../../components/NewsSection";
import RecognitionsSection from "../../components/RecognitionsSection";
import { getLatestPosts } from "../../lib/wp";
import { WPPost } from "../../types/wp";
import { homePageContent } from "@/data/homeContent";

export default async function Home() {
    let posts: WPPost[] = [];
    try {
        posts = await getLatestPosts(6);
    } catch {
        posts = [];
    }

    const homePage = homePageContent;

    const acf = {
        hero_title: homePage.hero?.title,
        hero_subtitle: homePage.hero?.subtitle,
        hero_background_type: homePage.hero?.backgroundType,
        hero_video_url: homePage.hero?.videoUrl,
        hero_image: homePage.hero?.backgroundImage,

        about_title: homePage.about?.title,
        about_description: homePage.about?.description,
        about_image: homePage.about?.image,
        about_cta_text: homePage.about?.ctaText,
        about_cta_link: homePage.about?.ctaLink,
        stats_1_value: homePage.about?.statsValue,
        stats_1_label: homePage.about?.statsLabel,

        hero_cta_text: homePage.hero?.ctaText,
        hero_cta_link: homePage.hero?.ctaLink,
    };

    const mappedPrograms = homePage.programs?.list?.map((p: { title: string; description?: string; slug: string }) => ({
        title: p.title,
        desc: p.description || '',
        slug: p.slug,
    }));

    const mappedRecognitions = homePage.recognitions?.list?.map((r: { title: string; meta?: string; description?: string; image?: string }) => ({
        title: r.title,
        meta: r.meta || '',
        description: r.description || '',
        imageUrl: r.image || null,
    }));

    return (
        <div className="w-full">
            {/* DIAGNOSTIC: Commenting out all components to isolate the error */}
            {/* Uncomment one at a time to find the culprit */}

            <Hero acf={acf} />
            <AboutSection acf={acf} />
            {/* <ProgramsProcedure data={homePage.methodology as any} /> */}
            {/* <ProgramsSection programs={mappedPrograms || []} description={homePage.programs?.description || ""} /> */}
            {/* <ImpactSection 
                title={homePage.impact.title}
                stats={homePage.impact.features}
                stories={homePage.impact.stories.map((s: any) => ({
                    name: s.title,
                    quote: s.description,
                    image: ""
                }))}
                ctaButtonText={homePage.impact.ctaButtonText}
            /> */}
            {/* <CtaSection acf={acf} /> */}
            {/* <NewsSection posts={posts} title={homePage.news?.title} showSection={homePage.news?.showSection} /> */}
            {/* <RecognitionsSection /> */}
        </div>
    );
}
