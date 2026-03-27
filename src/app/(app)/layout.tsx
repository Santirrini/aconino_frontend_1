import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DonationProvider } from "../../providers/DonationProvider";
import { ComingSoonProvider } from "../../providers/ComingSoonProvider";
import ComingSoonOverlayWrapper from "@/components/apoyanos/ComingSoonOverlayWrapper";
import { client } from "@/sanity/lib/client";
import { SETTINGS_QUERY, NAVIGATION_QUERY } from "@/sanity/lib/queries";
import FloatingDonationWidget from "@/components/donations/FloatingDonationWidget";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    title: "Asociación Aconiño | Apoyando la inclusión",
    description: "35 años apoyando la inclusión y mejorando la calidad de vida.",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [settings, navigation] = await Promise.all([
        client.fetch(SETTINGS_QUERY),
        client.fetch(NAVIGATION_QUERY)
    ]);
    
    return (
        <html lang="es" className={`${manrope.variable}`}>
            <body className="antialiased min-h-screen flex flex-col font-sans bg-white text-primary">
                <div className="w-full max-w-full" style={{ overflowX: 'clip' }}>
                    <DonationProvider>
                        <ComingSoonProvider>
                            <FloatingDonationWidget />
                            <Header 
                                navData={navigation?.navItems} 
                                ctaLabel={navigation?.ctaButton?.label}
                                ctaHref={navigation?.ctaButton?.href}
                                settings={settings}
                            />
                            <main className="flex-1 w-full relative" style={{ overflowX: 'clip' }}>
                                {children}
                            </main>
                            <Footer settings={settings} />
                            <ComingSoonOverlayWrapper />
                        </ComingSoonProvider>
                    </DonationProvider>
                </div>
            </body>
        </html>
    );
}
