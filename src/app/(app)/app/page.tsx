import AppHero from "@/components/app/AppHero";
import AppInfo from "@/components/app/AppInfo";
import AppBenefits from "@/components/app/AppBenefits";
import AppResults from "@/components/app/AppResults";

export const metadata = {
    title: "AconiñoApp - Asociación Aconiño",
    description:
        "Descarga la aplicación móvil de Aconiño para identificar trastornos en el movimiento de tus hijos durante el primer año de vida. Disponible gratis en Android.",
};

export default function AppPage() {
    return (
        <main className="min-h-screen bg-white">
            <AppHero />
            <AppInfo />
            <AppBenefits />
            <AppResults />
        </main>
    );
}
