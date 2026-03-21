"use client";

import React from "react";
import CountUp from "react-countup";
import { FaHeart, FaChild, FaCalendarAlt, FaHandsHelping } from "react-icons/fa";
import { useDonation } from "../providers/DonationProvider";

// Icons rendered at render time via index lookup
const STAT_ICONS = [FaChild, FaCalendarAlt, FaHandsHelping];

const defaultStats = [
  { id: 1, value: 150, suffix: "+", label: "Niños atendidos" },
  { id: 2, value: 25, suffix: "", label: "Años de servicio" },
  { id: 3, value: 5000, suffix: "+", label: "Sesiones anuales" },
];

interface ImpactStat {
  label: string;
  value: string;
}

interface ImpactStory {
  name: string;
  quote: string;
  image?: { url?: string } | string | number | null;
}

interface ImpactSectionProps {
  title?: string | null;
  stats?: ImpactStat[] | null;
  stories?: ImpactStory[] | null;
  ctaButtonText?: string | null;
}

export default function ImpactSection({ title, stats = [], stories: storiesProp, ctaButtonText }: ImpactSectionProps) {
  const { openDonationWidget } = useDonation();

  const displayStories = storiesProp && storiesProp.length > 0
    ? storiesProp.map((s, i) => ({
        id: i + 1,
        name: s.name,
        story: s.quote,
        img: (typeof s.image === 'object' ? s.image?.url : (s.image as string)) || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
    }))
    : [
        {
          id: 1,
          name: "M.",
          story: "Gracias a las terapias, M. ha logrado dar sus primeros pasos independientes.",
          img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
        },
        {
          id: 2,
          name: "J.",
          story: "El programa Pediasuit transformó la calidad de vida de toda nuestra familia.",
          img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop"
        },
        {
          id: 3,
          name: "S.",
          story: "Verlo sonreír y jugar con otros niños es el mayor regalo que pudimos recibir.",
          img: "https://images.unsplash.com/photo-1542887800-faca0261c9e1?q=80&w=600&auto=format&fit=crop"
        }
    ];

  const displayStats = stats && stats.length > 0 
    ? stats.map((s, i) => {
        const numMatch = s.value.match(/\d+/);
        const val = numMatch ? parseInt(numMatch[0]) : 0;
        const suffix = s.value.replace(/\d+/g, '').trim();
        return { id: i + 1, value: val, suffix, label: s.label };
      })
    : defaultStats;

  return (
    <section
      style={{
        padding: '6rem 0',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decor */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        marginRight: '-5rem', marginTop: '-5rem',
        width: '24rem', height: '24rem',
        backgroundColor: 'rgba(248,183,25,0.1)',
        borderRadius: '50%', filter: 'blur(48px)', opacity: 0.5,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        marginLeft: '-5rem', marginBottom: '-5rem',
        width: '20rem', height: '20rem',
        backgroundColor: 'rgba(54,92,161,0.1)',
        borderRadius: '50%', filter: 'blur(48px)', opacity: 0.5,
      }} />

      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        padding: '0 1rem', position: 'relative', zIndex: 10,
      }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <FaHeart style={{ color: '#f8b719', fontSize: '2.5rem' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900, color: '#0c2070',
            textTransform: 'uppercase', letterSpacing: '-0.05em',
            marginBottom: '1rem', lineHeight: 1.1,
          }}>
            {title ? (
              <span dangerouslySetInnerHTML={{
                __html: title.replace(
                  'transforma',
                  '<span style="background:linear-gradient(to right,#f8b719,#365ca1);-webkit-background-clip:text;-webkit-text-fill-color:transparent">transforma</span>'
                )
              }} />
            ) : (
              <>Tu apoyo <span style={{
                background: 'linear-gradient(to right, #f8b719, #365ca1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>transforma</span> vidas</>
            )}
          </h2>
          <p style={{
            fontSize: '1.25rem', color: '#6b7280',
            maxWidth: '42rem', margin: '0 auto', fontWeight: 500,
          }}>
            Cada aporte cuenta. Con tu ayuda logramos que más niños reciban la atención terapéutica que necesitan.
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {displayStats.map((stat, idx) => {
            const IconComponent = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <div key={stat.id} style={{
                backgroundColor: '#f9fafb',
                borderRadius: '1.5rem',
                padding: '2rem',
                textAlign: 'center',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                border: '1px solid #f3f4f6',
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
              }}>
                <div style={{
                  width: '3.5rem', height: '3.5rem',
                  backgroundColor: 'white', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', color: '#365ca1',
                  marginBottom: '1rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                }}>
                  <IconComponent />
                </div>
                <div style={{
                  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                  fontWeight: 900, color: '#0c2070',
                  marginBottom: '0.25rem', display: 'flex', alignItems: 'baseline',
                }}>
                  <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                  <span style={{ fontSize: '0.7em', color: '#f8b719', marginLeft: '0.25rem' }}>{stat.suffix}</span>
                </div>
                <p style={{
                  fontSize: 'clamp(0.6rem, 1.5vw, 1rem)',
                  fontWeight: 700, color: '#6b7280',
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                  lineHeight: 1.2,
                }}>{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Stories / Testimonials */}
        <div style={{ width: '100%', marginBottom: '3rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {displayStories.map((story, idx) => (
              <div
                key={story.id}
                style={{
                  position: 'relative',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  height: '300px',
                  backgroundColor: '#e2e8f0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.5s ease-out ${idx * 0.12}s both`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={story.img}
                  alt={`Historia de ${story.name}`}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(12,32,112,0.95) 0%, rgba(12,32,112,0.4) 50%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
                {/* Text */}
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  padding: '1.5rem',
                  color: 'white',
                  zIndex: 2,
                }}>
                  <h3 style={{
                    fontSize: '1.35rem', fontWeight: 900,
                    marginBottom: '0.35rem',
                  }}>{story.name}</h3>
                  <p style={{
                    fontSize: '0.85rem', opacity: 0.85,
                    fontStyle: 'italic', lineHeight: 1.4, fontWeight: 500,
                  }}>
                    &ldquo;{story.story}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => openDonationWidget()}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              backgroundColor: '#f8b719', color: '#0c2070',
              padding: '1.25rem 2.5rem',
              borderRadius: '9999px', border: 'none',
              fontWeight: 900, fontSize: '1.25rem',
              letterSpacing: '0.1em',
              boxShadow: '0 8px 24px rgba(248,183,25,0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#facc15';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#f8b719';
            }}
          >
            <FaHeart />
            {ctaButtonText || "APADRINA UN NIÑO"}
          </button>
        </div>
      </div>
    </section>
  );
}