import React from "react";
import { ImpactSectionProps, ImpactStat, ImpactStory } from "./impact/types";
import ImpactHeader from "./impact/ImpactHeader";
import ImpactStats from "./impact/ImpactStats";
import ImpactStories from "./impact/ImpactStories";
import ImpactCta from "./impact/ImpactCta";

const defaultStats = [
  { id: 1, value: 150, suffix: "+", label: "Niños atendidos" },
  { id: 2, value: 25, suffix: "", label: "Años de servicio" },
  { id: 3, value: 5000, suffix: "+", label: "Sesiones anuales" },
];

const defaultStories = [
  { id: 1, name: "M.", story: "Gracias a las terapias, M. ha logrado dar sus primeros pasos independientes.", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "J.", story: "El programa Pediasuit transformó la calidad de vida de toda nuestra familia.", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "S.", story: "Verlo sonreír y jugar con otros niños es el mayor regalo que pudimos recibir.", img: "https://images.unsplash.com/photo-1542887800-faca0261c9e1?q=80&w=600&auto=format&fit=crop" }
];

export default function ImpactSection({ title, description, stats = [], stories = [], ctaButtonText }: ImpactSectionProps) {
  // Process Stats
  const processedStats = stats && stats.length > 0 
    ? stats.map((s: ImpactStat, i: number) => {
        const numMatch = s.value.match(/\d+/);
        const val = numMatch ? parseInt(numMatch[0]) : 0;
        const suffix = s.value.replace(/\d+/g, '').trim();
        return { id: i + 1, value: val, suffix, label: s.label };
      })
    : defaultStats;

  // Process Stories
  const processedStories = stories && stories.length > 0
    ? stories.map((s: ImpactStory, i: number) => ({
        id: i + 1,
        name: s.name,
        story: s.quote,
        img: (typeof s.image === 'object' ? s.image?.url : (s.image as string)) || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
    }))
    : defaultStories;

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Premium Background Decor */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-accent/5 rounded-full blur-[60px] md:blur-[80px] lg:blur-[100px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-secondary/5 rounded-full blur-[50px] md:blur-[70px] lg:blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <ImpactHeader title={title ?? undefined} description={description ?? undefined} />

        {/* Modular Components */}
        <ImpactStats stats={processedStats} />
        <ImpactStories stories={processedStories} />

        {/* CTA Button */}
        <ImpactCta ctaButtonText={ctaButtonText ?? undefined} />
      </div>
    </section>
  );
}

