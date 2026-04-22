import React from "react";
import { FaHeart } from "react-icons/fa";
import ScrollReveal from "../animations/ScrollReveal";

interface ImpactHeaderProps {
  title?: string | null;
  description?: string | null;
}

export default function ImpactHeader({ title, description }: ImpactHeaderProps) {
  return (
    <ScrollReveal
      animation="fade-up"
      className="text-center mb-10 md:mb-12"
    >
      <div className="flex justify-center mb-4">
        <FaHeart className="text-accent text-3xl md:text-4xl animate-pulse" />
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary uppercase tracking-tighter mb-4 leading-tight">
        {title ? (
            <span>
              {title.split(/(transforma)/i).map((part, i) =>
                part.toLowerCase() === 'transforma' ? (
                  <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                    {part}
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </span>
        ) : (
            <>Tu apoyo <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">transforma</span> vidas</>
        )}
      </h2>
      <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
        {description || "Cada aporte cuenta. Con tu ayuda logramos que más niños reciban la atención terapéutica que necesitan para cumplir sus sueños."}
      </p>
    </ScrollReveal>
  );
}

