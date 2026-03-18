import { client } from "@/sanity/lib/client";
import { APP_PAGE_QUERY } from "@/sanity/lib/queries";
import AppHero from "@/components/app/AppHero";
import AppInfo from "@/components/app/AppInfo";
import AppBenefits from "@/components/app/AppBenefits";
import AppResults from "@/components/app/AppResults";

export const metadata = {
    title: "AconiñoApp - Asociación Aconiño",
    description:
        "Descarga la aplicación móvil de Aconiño para identificar trastornos en el movimiento de tus hijos durante el primer año de vida. Disponible gratis en Android.",
};

const defaultData = {
    heroSlides: [
        {
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2070&auto=format&fit=crop",
            alt: "Niño en terapia con aconiñoapp",
            overlayOpacity: 50,
        },
        {
            src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop",
            alt: "Familia utilizando la aplicación",
            overlayOpacity: 50,
        },
        {
            src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop",
            alt: "Desarrollo infantil con tecnología",
            overlayOpacity: 50,
        },
    ],
    infoSection: {
        title: "¿Qué es aconiñoapp?",
        text1: "La Asociación Aconiño, con el apoyo de la Fundación Vased, lanzó una aplicación móvil para que los padres de familia puedan identificar desde casa cualquier tipo de trastorno en el movimiento de sus hijos a lo largo del primer año de vida.",
        text2: "La plataforma ofrece un conjunto de pautas didácticas para orientar la observación de los adultos, busca que se puedan detectar oportunamente los desórdenes motores de los recién nacidos, y así se logren evitar alteraciones y movimientos incorrectos en su desarrollo.",
    },
    quoteSection: {
        quote: "Teniendo en cuenta las altas cifras de afectaciones motoras que pueden presentarse en bebés con antecedentes de alto riesgo, es fundamental que cada papá y mamá tenga presente que el primer año de vida es determinante en la salud psicomotriz de las personas. Por eso, el correcto uso de la herramienta puede advertir la necesidad de un acompañamiento terapéutico para corregir movimientos erróneos en las primeras etapas de crecimiento",
        author: "Berta Brunal, directora de la Asociación Aconiño",
        avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
    benefitsSection: {
        title: "¿Cuáles son los beneficios de nuestra aplicación?",
        benefits: [
            "Previene las alteraciones posteriores en el desarrollo de los niños.",
            "Identifica cualquier tipo de trastorno en el movimiento de tus hijos.",
            "Ofrece pautas didácticas para orientar la observación de los adultos.",
            "Detecta oportunamente los desórdenes motores de los recién nacidos.",
            "La aplicación está disponible para dispositivos Android y no tiene ningún costo.",
        ],
        downloadUrl: "https://play.google.com/store/apps/details?id=com.aconinoapp",
        phoneImageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=400&auto=format&fit=crop",
    },
    resultsSection: {
        title: "¿Qué resultados puedo esperar?",
        text1: "Unos pocos ejercicios realizados con regularidad pueden impactar positivamente la calidad de vida de los infantes. Es sorprendente la capacidad del cerebro para aprender y corregir las habilidades motoras.",
        text2: "Con actividades simples y llevadas con la suficiente disciplina, los padres y madres podrán evidenciar los cambios en los movimientos de sus hijos.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
};

async function getAppPageData() {
    try {
        const data = await client.fetch(APP_PAGE_QUERY);
        return data;
    } catch (error) {
        console.error("Error fetching app page data:", error);
        return null;
    }
}

export default async function AppPage() {
    const appPageData = await getAppPageData();
    const data = appPageData || defaultData;

    const heroSlides = data.heroSlides?.map((slide: { imageUrl: string; alt?: string; overlayOpacity?: number }) => ({
        src: slide.imageUrl,
        alt: slide.alt || "",
        overlayOpacity: slide.overlayOpacity,
    })) || defaultData.heroSlides;

    return (
        <main className="min-h-screen bg-white">
            <AppHero slides={heroSlides} />
            <AppInfo
                infoSection={data.infoSection || defaultData.infoSection}
                quoteSection={data.quoteSection || defaultData.quoteSection}
            />
            <AppBenefits
                benefitsSection={data.benefitsSection || defaultData.benefitsSection}
            />
            <AppResults
                resultsSection={data.resultsSection || defaultData.resultsSection}
            />
        </main>
    );
}
