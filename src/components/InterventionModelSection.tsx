import ScrollReveal from "./animations/ScrollReveal";
import Link from "next/link";

interface Principle {
  _key: string;
  title: string;
  description: string;
}

interface TargetAudience {
  _key: string;
  icon: string;
  label: string;
}

interface InterventionModelSectionProps {
  mainTitle?: string;
  subtitle?: string;
  principles?: Principle[];
  targetAudience?: TargetAudience[];
  ctaLabel?: string;
  ctaLink?: string;
}

const defaultPrinciples = [
  { _key: '1', title: 'Intervención interdisciplinaria', description: 'Fisioterapeutas, terapeutas ocupacionales, fonoaudiólogos y psicólogos trabajamos desde un enfoque coordinado.' },
  { _key: '2', title: 'Centrado en el usuario y su familia', description: 'Colaboración entre profesionales, paciente y familia en todo el proceso.' },
  { _key: '3', title: 'Objetivos funcionales', description: 'Trabajamos habilidades que permiten mayor independencia en actividades diarias.' },
  { _key: '4', title: 'Intervención personalizada', description: 'Diseñamos el tratamiento específicamente para cada usuario tras una evaluación individual.' }
];

const defaultTargetAudience = [
  { _key: '1', icon: '👶', label: 'Bebés' },
  { _key: '2', icon: '👧', label: 'Niños' },
  { _key: '3', icon: '🧒', label: 'Jóvenes' }
];

export default function InterventionModelSection({
  mainTitle = "Modelo de Intervención",
  subtitle = "Un enfoque integral y personalizado para cada usuario",
  principles = defaultPrinciples,
  targetAudience = defaultTargetAudience,
  ctaLabel = "Conoce Nuestros Programas",
  ctaLink = "/programas"
}: InterventionModelSectionProps) {
  const displayPrinciples = principles.length > 0 ? principles : defaultPrinciples;
  const displayAudience = targetAudience.length > 0 ? targetAudience : defaultTargetAudience;

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-primary/5 blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px]" />
        <div className="absolute top-[30%] -left-[10%] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full bg-accent/5 blur-[50px] sm:blur-[70px] md:blur-[80px] lg:blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal animation="zoom-in" className="inline-block mb-4">
            <span className="block w-12 h-1 bg-accent mx-auto rounded-full" />
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              {mainTitle}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={0.25}>
            <p className="mt-4 text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {displayPrinciples.map((principle, idx) => (
            <ScrollReveal key={principle._key || idx} animation="fade-up" delay={idx * 0.1}>
              <div className="bg-[#F8FAFC] rounded-2xl p-6 md:p-8 h-full border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">{idx + 1}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl md:rounded-3xl p-6 md:p-10 mb-12 md:mb-16">
          <ScrollReveal animation="fade-up">
            <p className="text-center text-primary font-bold text-lg md:text-xl mb-6 md:mb-8">
              ¿A quién va dirigido?
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {displayAudience.map((audience, idx) => (
              <ScrollReveal key={audience._key || idx} animation="zoom-in" delay={idx * 0.1}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md flex items-center justify-center text-3xl md:text-4xl border-2 border-slate-100">
                    {audience.icon}
                  </div>
                  <span className="text-primary font-semibold text-sm md:text-base">
                    {audience.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="text-center">
          <ScrollReveal animation="fade-up" delay={0.2}>
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-base hover:bg-secondary transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {ctaLabel}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
