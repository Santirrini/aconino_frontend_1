import ApoyanosHero from "@/components/apoyanos/ApoyanosHero";
import PlanPadrinoSection from "@/components/apoyanos/PlanPadrinoSection";
import DonationOptions from "@/components/apoyanos/DonationOptions";
import ImpactSection from "@/components/ImpactSection";
import CorporateDonation from "@/components/apoyanos/CorporateDonation";
import FAQ from "@/components/apoyanos/FAQ";
import FinalCTA from "@/components/apoyanos/FinalCTA";

export const metadata = {
    title: "Donar a Niños con Discapacidad | Apóyanos - Aconiño",
    description: "Ayuda a niños con discapacidad en Colombia. Dona ahora y transforma vidas. Plan Padrino, donaciones empresariales y voluntariado. 25 años apoyando neurorehabilitación infantil.",
};

export default function ApoyanosPage() {
    return (
        <main className="min-h-screen bg-white">
            <ApoyanosHero />
            <ImpactSection />
            <PlanPadrinoSection />
            <DonationOptions />
            <CorporateDonation />
            <FAQ />
            <FinalCTA />
        </main>
    );
}
