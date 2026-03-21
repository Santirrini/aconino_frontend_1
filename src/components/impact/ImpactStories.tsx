"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

interface Story {
  id: number;
  name: string;
  story: string;
  img: string;
}

interface ImpactStoriesProps {
  stories: Story[];
}

export default function ImpactStories({ stories }: ImpactStoriesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active card index on scroll (mobile)
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.children[0]?.clientWidth || 1;
    const gap = 16; // matches gap-4
    const idx = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(idx, stories.length - 1));
  }, [stories.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Scroll to specific card on dot click (mobile)
  const scrollToCard = (idx: number) => {
    const el = scrollRef.current;
    if (!el || !el.children[idx]) return;
    const child = el.children[idx] as HTMLElement;
    el.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <div className="w-full mb-12 md:mb-16">
      {/* Cards Container: horizontal scroll on mobile, 3-col grid on desktop */}
      <div
        ref={scrollRef}
        className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scroll-smooth hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
      >
        {stories.map((story, idx) => (
          <div
            key={story.id}
            className="relative flex-shrink-0 snap-center rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-500 group"
            style={{
              width: 'calc(85vw)',
              minWidth: 'calc(85vw)',
              height: '280px',
              animation: `fadeInUp 0.5s ease-out ${idx * 0.12}s both`,
            }}
          >
            {/* Image — native img, proven to work */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={story.img}
              alt={`Historia de ${story.name}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent pointer-events-none" />
            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white z-10">
              <h3 className="text-lg md:text-2xl font-black mb-1">{story.name}</h3>
              <p className="text-white/80 leading-snug font-medium text-xs md:text-sm italic line-clamp-3">
                &ldquo;{story.story}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Active dot indicators — mobile only */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {stories.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            aria-label={`Ver testimonio ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 h-2 bg-accent"
                : "w-2 h-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Desktop-only: override the mobile width constraints */}
      <style jsx>{`
        @media (min-width: 768px) {
          div[style*="width: calc(85vw)"] {
            width: auto !important;
            min-width: 0 !important;
            height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
}
