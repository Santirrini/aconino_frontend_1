import { getPayload } from "payload";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProgramPage({ params }: PageProps) {
    const { slug } = await params;
    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
        collection: "programs-pages",
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

    const program = result.docs[0];

    return (
        <article className="min-h-screen bg-gray-50">
            <header className="bg-secondary pt-32 pb-20 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            {program.ageRange && (
                                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                                    {program.ageRange}
                                </span>
                            )}
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{program.title}</h1>
                        </div>
                        <div className="h-1 w-24 bg-accent md:hidden"></div>
                    </div>
                </div>
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
            </header>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-16">
                <div className="flex-1 prose prose-lg prose-primary">
                    <p className="text-xl text-gray-700 font-medium mb-12">
                        {program.description}
                    </p>

                    <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                        {/* Content Placeholder */}
                        Contenido detallado para este programa terapéutico...
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    {program.featuredImage && typeof program.featuredImage === 'object' && (
                        <div className="rounded-3xl overflow-hidden shadow-2xl sticky top-32">
                            <Image
                                src={program.featuredImage.url || ""}
                                alt={program.title}
                                width={600}
                                height={800}
                                className="w-full object-cover"
                            />
                            <div className="p-8 bg-white border-t border-gray-100">
                                <h3 className="font-bold text-primary mb-4">Más información</h3>
                                <button className="w-full bg-accent text-primary font-black py-4 rounded-xl hover:bg-primary hover:text-white transition-all">
                                    CONTACTAR
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
