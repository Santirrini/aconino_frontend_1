import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import ProgramsSection from "../../components/ProgramsSection";
import CtaSection from "../../components/CtaSection";
import NewsSection from "../../components/NewsSection";
import RecognitionsSection from "../../components/RecognitionsSection";
import { getLatestPosts, getHomePage } from "../../lib/wp";
import { WPPost, WPPage } from "../../types/wp";

export default async function Home() {
    const posts: WPPost[] = await getLatestPosts(6); // Fetches up to 6 for the slider
    const homePage: WPPage | null = await getHomePage();

    const acf = homePage?.acf || {};

    return (
        <div className="w-full">
            <Hero acf={acf} />
            <AboutSection acf={acf} />
            <ProgramsSection />
            <CtaSection acf={acf} />
            <NewsSection posts={posts} />
            <RecognitionsSection />
        </div>
    );
}
