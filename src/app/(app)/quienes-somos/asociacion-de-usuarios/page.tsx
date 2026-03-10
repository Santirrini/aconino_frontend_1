import AsociacionIntro from "@/components/asociacion-usuarios/AsociacionIntro";
import AsociacionBanner from "@/components/asociacion-usuarios/AsociacionBanner";
import AsociacionDetails from "@/components/asociacion-usuarios/AsociacionDetails";

export const metadata = {
    title: "Asociación de Usuarios - Aconiño",
    description: "Conoce más sobre la Asociación de Usuarios de Aconiño, sus objetivos y su conformación.",
};

export default function AsociacionUsuariosPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <AsociacionIntro />
            <AsociacionBanner />
            <AsociacionDetails />
        </main>
    );
}
