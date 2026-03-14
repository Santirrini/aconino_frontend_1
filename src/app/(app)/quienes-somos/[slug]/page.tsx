import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function GenericPage({ params }: PageProps) {
    const { slug } = await params;
    
    // La colección 'pages' fue eliminada - las páginas now usan globals específicos
    // /quienes-somos/nosotros → global 'quienes-somos-page'
    // Esta página catch-all ya no es necesaria
    
    return notFound();
}
