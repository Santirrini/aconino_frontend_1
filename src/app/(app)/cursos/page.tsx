import CursosHero from "@/components/cursos/CursosHero";
import BobathHistory from "@/components/cursos/BobathHistory";
import InstructorsSection from "@/components/cursos/InstructorsSection";
import CourseGrid from "@/components/cursos/CourseGrid";
import { CourseCardData } from "@/components/cursos/CourseCard";
import { client } from "@/sanity/lib/client";
import { CURSOS_HERO_QUERY } from "@/sanity/lib/queries";

export const metadata = {
    title: "Cursos y Capacitaciones - Asociación Aconiño",
    description:
        "Cursos de neurodesarrollo, certificaciones profesionales y capacitaciones especializadas en el tratamiento de la discapacidad sensoriomotora.",
};

const defaultCourses: (CourseCardData & { year: number })[] = [
    {
        id: "default-1",
        title: "Curso de Certificación Internacional GMS Trust - Movimientos Generales",
        slug: "gms-trust-movimientos-generales",
        dates: "Básico: 31 octubre - 3 noviembre · Avanzado: 4 noviembre - 7 noviembre",
        location: "Bogotá, Colombia",
        countryCode: "CO",
        status: "finalizado",
        year: 2024,
        description:
            "Diagnostica precozmente el riesgo de parálisis cerebral en niños para comenzar su intervención y tratamiento. Dictado por la fisioterapeuta italiana Natascia Bertoncelli, Instructora oficial del \"General Movements Trust\".",
        featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: "default-2",
        title: "Curso Básico PediaSuit",
        slug: "curso-basico-pediasuit",
        dates: "Junio 07 al 10 de 2024",
        location: "Bogotá, Colombia",
        countryCode: "CO",
        status: "finalizado",
        year: 2024,
        description:
            "Este taller de formación acreditado internacionalmente, es útil para aplicar la terapia intensiva de tratamiento del método Pediasuit en pacientes con alteraciones neurológicas, ortopédicas y genéticas.",
        featuredImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: "default-3",
        title: "Curso Introductorio de Neurodesarrollo",
        slug: "curso-introductorio-neurodesarrollo-caracas",
        dates: "14, 15, 16, 17 y 18 de Junio de 2024",
        location: "Caracas, Venezuela",
        countryCode: "VE",
        status: "finalizado",
        year: 2024,
        description:
            "Este curso promueve conceptos básicos de este modelo, el análisis de todos los campos del desarrollo del niño, el manejo de los desórdenes del movimiento y el trabajo multidisciplinario haciendo énfasis en la participación de la familia.",
        featuredImage: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: "default-4",
        title: "Curso Proceso de Evaluación e Interacción Terapéutica en Bebés",
        slug: "evaluacion-interaccion-terapeutica-bebes",
        dates: "17, 18, 19, 20 y 21 de Junio de 2024",
        location: "Caracas, Venezuela",
        countryCode: "VE",
        status: "finalizado",
        year: 2024,
        description:
            "Aprende a reconocer los patrones posturales atípicos con el propósito de establecer las características existentes en bebés con alteración del movimiento, interpretando los procesos teóricos básicos que los fundamentan.",
        featuredImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: "default-5",
        title: "Curso Introductorio de Neurodesarrollo",
        slug: "curso-introductorio-neurodesarrollo-lima",
        dates: "5, 6, 7, 13 y 14 de Julio de 2024",
        location: "Lima, Perú",
        countryCode: "PE",
        status: "finalizado",
        year: 2024,
        description:
            "Este curso promueve conceptos básicos de este modelo, el análisis de todos los campos del desarrollo del niño, el manejo de los desórdenes del movimiento y el trabajo multidisciplinario haciendo énfasis en la participación de la familia.",
        featuredImage: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: "default-6",
        title: "Curso Introductorio de Neurodesarrollo",
        slug: "curso-introductorio-neurodesarrollo-bogota",
        dates: "5, 6, 7, 13 y 14 de Abril de 2024",
        location: "Bogotá, Colombia",
        countryCode: "CO",
        status: "finalizado",
        year: 2024,
        description:
            "Este curso promueve conceptos básicos de este modelo, el análisis de todos los campos del desarrollo del niño, el manejo de los desórdenes del movimiento y el trabajo multidisciplinario haciendo énfasis en la participación de la familia.",
        featuredImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    },
];

export default async function CursosPage() {
    const courses = defaultCourses;
    const showInstructors = true;
    const bottomCTA = {
        title: "¿Interesado en nuestros cursos?",
        description: "Contáctanos para conocer las próximas fechas y disponibilidad de cupos.",
        buttonText: "CONTÁCTANOS",
        buttonLink: "https://wa.me/573133910760"
    };

    let heroTitle = "Cursos y Capacitaciones";
    let heroSlides: { src: string; alt: string; overlayOpacity?: number }[] | undefined;

    try {
        const cursosHeroData = await client.fetch(CURSOS_HERO_QUERY);
        if (cursosHeroData) {
            heroTitle = cursosHeroData.title || heroTitle;
            if (cursosHeroData.slides && Array.isArray(cursosHeroData.slides)) {
                heroSlides = cursosHeroData.slides
                    .filter((slide: { imageUrl?: string }) => slide.imageUrl)
                    .map((slide: { imageUrl?: string; alt?: string; overlayOpacity?: number }) => ({
                        src: slide.imageUrl || "",
                        alt: slide.alt || "",
                        overlayOpacity: slide.overlayOpacity
                    }));
            }
        }
    } catch (error) {
        console.error("Error fetching cursos hero:", error);
    }

    return (
        <main className="min-h-screen bg-white">
            <CursosHero title={heroTitle} slides={heroSlides} />
            <BobathHistory />
            {showInstructors && <InstructorsSection />}
            <CourseGrid courses={courses} />

            {/* Bottom CTA */}
            <section className="bg-gradient-to-br from-primary to-secondary py-20 text-center text-white relative overflow-hidden">
                {/* Decorative blurs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                        {bottomCTA?.title || "¿Interesado en nuestros cursos?"}
                    </h3>
                    <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                        {bottomCTA?.description || "Contáctanos para conocer las próximas fechas y disponibilidad de cupos."}
                    </p>
                    <a
                        href={bottomCTA?.buttonLink || "https://wa.me/573133910760"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent text-primary px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                        {bottomCTA?.buttonText || "CONTÁCTANOS"}
                    </a>
                </div>
            </section>
        </main>
    );
}
