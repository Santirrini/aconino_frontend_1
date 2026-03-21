"use client";

import React, { useRef } from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { useCursorTracker } from "../hooks/useCursorTracker";
import { useParticleCanvas } from "../hooks/useParticleCanvas";
import "./GoldenTypewriter.css";

interface GoldenTypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  loop?: boolean;
  waitDuration?: number;
}

const LETTER_SPACING = "0.02em";

function renderText(text: string, charIndex: number): React.ReactNode {
  const words = text.split(/(\s+)/);
  let absoluteCharIndex = 0;

  return words.map((word, wordIdx) => {
    const isSpace = /^\s+$/.test(word);
    if (isSpace) {
      return word.split("").map((char, charIdx) => {
        const globalIdx = absoluteCharIndex++;
        return (
          <span
            key={`space-${wordIdx}-${charIdx}`}
            className={`golden-typewriter-char ${
              globalIdx < charIndex ? "typed" : ""
            }`}
          >
            {char}
          </span>
        );
      });
    }

    return (
      <span key={`word-${wordIdx}`} className="golden-typewriter-word">
        {word.split("").map((char, charIdx) => {
          const globalIdx = absoluteCharIndex++;
          return (
            <span
              key={charIdx}
              className={`golden-typewriter-char ${
                globalIdx < charIndex ? "typed" : ""
              }`}
            >
              {char}
            </span>
          );
        })}
      </span>
    );
  });
}

export const GoldenTypewriter = ({
  text,
  className = "",
  delay = 0,
  speed = 0.08,
  loop = true,
  waitDuration = 3000,
}: GoldenTypewriterProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { charIndex, phase, mounted } = useTypewriter({
    text,
    delay,
    speed,
    loop,
    waitDuration,
  });

  const cursorPos = useCursorTracker({
    charIndex,
    text,
    containerRef,
    mounted,
  });

  useParticleCanvas({
    canvasRef,
    containerRef,
    cursorPos,
    phase,
    mounted,
  });

  if (!mounted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span
      className={`${className} relative inline-block leading-tight md:leading-tight`}
      ref={containerRef}
      style={{ isolation: "isolate", letterSpacing: LETTER_SPACING }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 10 }}
      />

      <span className="relative z-10 inline">
        {renderText(text, charIndex)}
      </span>
    </span>
  );
};
