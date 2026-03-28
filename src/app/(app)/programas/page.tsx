import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import PrinciplesAccordion from "@/components/programs/PrinciplesAccordion";
import WhoForSection from "@/components/programs/WhoForSection";
import WhatWeDoTimeline from "@/components/programs/WhatWeDoTimeline";
import ObjectivesTabs from "@/components/programs/ObjectivesTabs";
import WhyChooseUs from "@/components/programs/WhyChooseUs";
import { client } from "@/sanity/lib/client";
import { PROGRAMAS_PAGE_QUERY } from "@/sanity/lib/queries";

interface Hero {
  title?: string;
  subtitle?: string;
  backgroundImageUrl?: string;
}

interface CTA {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface MaxSatisfaction {
  title?: string;
  items?: string[];
}

export default async function ProgramasPage() {
  const data = await client.fetch(PROGRAMAS_PAGE_QUERY);

  const hero: Hero = data?.hero || {
    title: "Programas",
    subtitle: "Conoce nuestros programas de habilitación y rehabilitación integral.",
    backgroundImageUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
  };

  const interventionModel = data?.interventionModel || {};
  const principles = data?.principles || [];
  const targetAudience = data?.targetAudience || [];
  const maxSatisfaction: MaxSatisfaction = data?.maxSatisfaction || {
    title: "Nuestra máxima satisfacción es cuando:",
    items: []
  };
  const whatWeDo = data?.whatWeDo || [];
  const objectivesByArea = data?.objectivesByArea || {};
  const whyChooseUs = (data?.whyChooseUs || []).map((item: { text: string }, index: number) => ({
    _key: String(index + 1),
    text: item.text
  }));

  const cta: CTA = data?.cta || {
    title: "¿Quieres saber más sobre nuestros programas?",
    buttonText: "CONTÁCTANOS",
    buttonLink: "/contacto"
  };

  const heroImage = hero.backgroundImageUrl || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop";

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt={hero.title || "Programas"}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="flex justify-center mb-6">
              <span className="text-yellow-400 text-5xl">♥</span>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              {hero.title}
            </h1>
            {hero.subtitle && (
              <p className="text-xl text-white/90 max-w-2xl mx-auto mt-4 font-medium">
                {hero.subtitle}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Intervention Model Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              {interventionModel.mainTitle || "Nos centramos más en la actividad y menos en la discapacidad"}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-xl md:text-2xl text-accent font-semibold mb-8">
              {interventionModel.subtitle || "Potenciar habilidades, no solo tratar dificultades"}
            </p>
          </ScrollReveal>
          {interventionModel.introText && (
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {interventionModel.introText}
              </p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Principles Accordion */}
      <PrinciplesAccordion principles={principles} />

      {/* Who For Section */}
      <WhoForSection items={targetAudience} />

      {/* Max Satisfaction Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">
              {maxSatisfaction.title}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {maxSatisfaction.items?.map((item, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 0.1}>
                <div className="flex items-start gap-4 text-left p-5 bg-white/10 rounded-xl border border-white/20">
                  <span className="text-accent text-2xl">♥</span>
                  <p className="text-lg text-white leading-relaxed">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Timeline */}
      <WhatWeDoTimeline steps={whatWeDo} />

      {/* Objectives Tabs */}
      <ObjectivesTabs
        motorGruesa={objectivesByArea.motorGruesa}
        motorFina={objectivesByArea.motorFina}
        comunicacion={objectivesByArea.comunicacion}
        psicologia={objectivesByArea.psicologia}
      />

      {/* Why Choose Us */}
      <WhyChooseUs items={whyChooseUs} />

      {/* Floating CTA */}
      <section className="bg-primary py-20 text-center text-white">
        <ScrollReveal animation="zoom-in" delay={0.2}>
          <h3 className="text-3xl font-bold mb-8">
            {cta.title}
          </h3>
          <Link
            href={cta.buttonLink || "/contacto"}
            className="bg-accent text-primary px-10 py-4 rounded-full font-black text-lg hover:bg-white transition-colors uppercase"
          >
            {cta.buttonText}
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
