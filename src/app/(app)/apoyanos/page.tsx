import ApoyanosHero from "@/components/apoyanos/ApoyanosHero";
import PlanPadrinoSection from "@/components/apoyanos/PlanPadrinoSection";
import DonationOptions from "@/components/apoyanos/DonationOptions";
import AdditionalInfo from "@/components/apoyanos/AdditionalInfo";

export const metadata = {
    title: "Apóyanos - Asociación Aconiño",
    description: "Únete a nuestra causa. Conoce el Plan Padrino, realiza donaciones y apoya la neurorehabilitación infantil en Colombia.",
};

export default function ApoyanosPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <ApoyanosHero />
            <PlanPadrinoSection />
            <DonationOptions />
            <AdditionalInfo />
        </main>
    );
}
