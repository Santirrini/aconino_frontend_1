import { getPayload } from "payload";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CoursePage({ params }: PageProps) {
    const { slug } = await params;
    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
        collection: "courses",
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

    const course = result.docs[0];

    return (
        <article className="min-h-screen">
            <header className="bg-primary text-white pt-40 pb-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Capacitación Especializada</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight">{course.title}</h1>
                    <div className="flex flex-wrap justify-center gap-6">
                        {course.duration && (
                            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                                <span className="text-gray-300 text-sm block">Duración</span>
                                <span className="font-bold">{course.duration}</span>
                            </div>
                        )}
                        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                            <span className="text-gray-300 text-sm block">Certificación</span>
                            <span className="font-bold">Avalada por Aconiño</span>
                        </div>
                    </div>
                </div>
                {/* Abstract background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-2 prose prose-xl prose-primary">
                        <h2 className="text-3xl font-extrabold text-primary mb-8 italic">Sobre el curso</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {course.description}
                        </p>
                        <hr className="my-12 border-gray-100" />
                        <div className="text-gray-600 leading-relaxed">
                            Contenido del curso...
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 sticky top-32">
                            <h3 className="text-2xl font-bold text-primary mb-6">Inscríbete ahora</h3>
                            <ul className="space-y-4 mb-10 text-gray-600">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <span>Material de apoyo incluido</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <span>Sesiones prácticas</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <span>Diploma oficial</span>
                                </li>
                            </ul>
                            <button className="w-full bg-primary text-white font-black py-5 rounded-2xl hover:bg-secondary transition-all shadow-xl shadow-primary/20">
                                SOLICITAR CUPO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
