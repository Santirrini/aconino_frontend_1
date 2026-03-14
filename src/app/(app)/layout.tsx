import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { DonationProvider } from "../../providers/DonationProvider";

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
    return (
        <html lang="es" className={`${manrope.variable}`}>
            <body className="antialiased min-h-screen flex flex-col font-sans bg-white text-primary">
                <DonationProvider>
                    <Header />
                    <main className="flex-1 w-full relative">
                        {children}
                    </main>
                    <Footer />
                </DonationProvider>
            </body>
        </html>
    );
}
