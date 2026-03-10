import NosotrosHero from "@/components/quienes-somos/NosotrosHero";
import NosotrosIntro from "@/components/quienes-somos/NosotrosIntro";
import NosotrosMission from "@/components/quienes-somos/NosotrosMission";
import NosotrosVision from "@/components/quienes-somos/NosotrosVision";
import NosotrosHistory from "@/components/quienes-somos/NosotrosHistory";
import NosotrosFundadores from "@/components/quienes-somos/NosotrosFundadores";
import NosotrosSemillas from "@/components/quienes-somos/NosotrosSemillas";
import NosotrosJuntaPhoto from "@/components/quienes-somos/NosotrosJuntaPhoto";
import NosotrosJuntaRoles from "@/components/quienes-somos/NosotrosJuntaRoles";
import NosotrosEquipo from "@/components/quienes-somos/NosotrosEquipo";
import NosotrosAdmin from "@/components/quienes-somos/NosotrosAdmin";

export const metadata = {
    title: "Quiénes Somos - Aconiño",
    description: "Conoce más sobre la Asociación Aconiño, nuestra misión, visión e historia impulsando la neurorehabilitación infantil en Colombia.",
};

export default function QuienesSomosPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <NosotrosHero />
            <NosotrosIntro />
            <NosotrosMission />
            <NosotrosVision />
            <NosotrosHistory />
            <NosotrosFundadores />
            <NosotrosSemillas />
            <NosotrosJuntaPhoto />
            <NosotrosJuntaRoles />
            <NosotrosEquipo />
            <NosotrosAdmin />
        </main>
    );
}
