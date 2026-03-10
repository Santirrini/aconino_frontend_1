import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getPayload } from "payload";
import configPromise from "@payload-config";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    title: "Asociación Aconiño | Apoyando la inclusión",
    description: "35 años apoyando la inclusión y mejorando la calidad de vida.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const payload = await getPayload({ config: configPromise });
    const headerConfig = await payload.findGlobal({ slug: "header-config" });

    // Resolve dynamic links if any
    const rawNavLinks = headerConfig.navLinks || [];
    const navLinks = await Promise.all(rawNavLinks.map(async (link: any) => {
        if (link.hasDropdown && link.dropdownType === 'dynamic' && link.collectionSource) {
            const collectionItems = await payload.find({
                collection: link.collectionSource,
                limit: 100,
            });

            const prefix = link.collectionSource === 'programs-pages' ? '/programas'
                : link.collectionSource === 'courses' ? '/cursos'
                    : '/quienes-somos';

            return {
                ...link,
                subLinks: collectionItems.docs.map((doc: any) => ({
                    name: doc.title,
                    href: link.collectionSource === 'programs-pages' ? `/programas#${doc.slug}` : `${prefix}/${doc.slug}`,
                }))
            };
        }
        return link;
    }));

    return (
        <html lang="es" className={`${manrope.variable}`}>
            <body className="antialiased min-h-screen flex flex-col font-sans bg-white text-primary">
                <Header navData={navLinks} />
                <main className="flex-1 w-full relative">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
