import { getPayload } from "payload";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function GenericPage({ params }: PageProps) {
    const { slug } = await params;
    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
        collection: "pages",
        where: {
            slug: {
                equals: slug,
            },
        },
        limit: 1,
    });

    if (!result.docs || result.docs.length === 0) {
        return notFound();
    }

    const page = result.docs[0];

    return (
        <article className="min-h-screen">
            <header className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{page.title}</h1>
                    <div className="h-1 w-24 bg-accent mx-auto"></div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full -mr-32 -mt-32"></div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 prose prose-lg prose-primary">
                {page.featuredImage && typeof page.featuredImage === 'object' && (
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-xl aspect-video relative">
                        <Image
                            src={page.featuredImage.url || ""}
                            alt={page.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                {/* In a real implementation, we would use a RichText renderer here */}
                {/* For now, just a placeholder for the content */}
                <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {typeof page.content === 'string' ? page.content : "Contenido enriquecido de Payload..."}
                </div>
            </div>
        </article>
    );
}
