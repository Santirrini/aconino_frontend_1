"use client";

import React, { useState, useEffect, useRef } from "react";

interface GoldenTypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  loop?: boolean;
  waitDuration?: number;
}

const PARTICLE_COLORS = ["#fff", "#ffe066", "#f8b719", "#fff5cc", "#ffffff", "#ffd700", "#ffed4a", "#f5a623"];

export const GoldenTypewriter = ({
  text,
  className = "",
  delay = 0,
  speed = 0.08,
  loop = true,
  waitDuration = 3000,
}: GoldenTypewriterProps) => {
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"delay" | "typing" | "sparkle" | "wait" | "restarting">("delay");
  const [mounted, setMounted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateCursorPosition = () => {
      if (mounted && containerRef.current) {
        const container = containerRef.current;
        const charSpans = container.querySelectorAll(".char-span");
        
        if (charIndex === 0) {
          const firstCharSpan = charSpans[0];
          if (firstCharSpan) {
            const charRect = firstCharSpan.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            setCursorPos({
              x: charRect.left - containerRect.left,
              y: charRect.top - containerRect.top + charRect.height / 2
            });
          } else {
            setCursorPos({ x: 0, y: container.offsetHeight / 2 || 12 });
          }
        } else {
          const targetIndex = Math.min(charIndex - 1, text.length - 1);
          if (charSpans[targetIndex]) {
            const charRect = charSpans[targetIndex].getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            setCursorPos({
              x: charRect.right - containerRect.left,
              y: charRect.top - containerRect.top + charRect.height / 2
            });
          }
        }
      }
    };

    updateCursorPosition();
    window.addEventListener('resize', updateCursorPosition);
    return () => window.removeEventListener('resize', updateCursorPosition);
  }, [charIndex, mounted, text.length, text]);

  useEffect(() => {
    if (!mounted) return;
    let timeout: NodeJS.Timeout;

    if (phase === "delay") {
      timeout = setTimeout(() => setPhase("typing"), delay * 1000);
    } else if (phase === "typing") {
      if (charIndex < text.length) {
        timeout = setTimeout(() => {
          setCharIndex((i) => i + 1);
        }, speed * 1000);
      } else {
        setPhase("sparkle");
      }
    } else if (phase === "sparkle") {
      timeout = setTimeout(() => {
        setPhase("wait");
      }, 1500);
    } else if (phase === "wait") {
      timeout = setTimeout(() => {
        if (loop) {
          setPhase("restarting");
          setTimeout(() => {
            setCharIndex(0);
            setPhase("typing");
          }, 500);
        }
      }, waitDuration);
    }

    return () => clearTimeout(timeout);
  }, [mounted, phase, charIndex, text.length, delay, speed, loop, waitDuration]);

  const isTyping = phase === "typing";
  const showSparkle = phase === "sparkle";
  const isWaiting = phase === "wait";
  const isRestarting = phase === "restarting";
  const showCursor = isTyping || showSparkle || isWaiting || isRestarting;

  const getCharColor = (index: number): string => {
    if (!mounted) return "#f8b719";
    if (index < charIndex) return "#f8b719";
    return "white";
  };

  if (!mounted) {
    return <span className={className}>{text}</span>;
  }

  const renderCursor = () => (
    <span
      className="absolute pointer-events-none transition-all duration-75"
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        height: "24px",
        width: "4px",
        zIndex: 20,
        transform: "translateY(-50%)",
      }}
    >
      <span
        className="absolute"
        style={{
          width: "4px",
          height: "1.2em",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "linear-gradient(180deg, transparent 0%, #f8b719 15%, #ffe066 50%, #f8b719 85%, transparent 100%)",
          borderRadius: "2px",
          boxShadow: showSparkle
            ? "0 0 20px 6px rgba(248, 183, 25, 0.9), 0 0 40px 12px rgba(248, 183, 25, 0.6), 0 0 60px 18px rgba(248, 183, 25, 0.3)"
            : "0 0 12px 4px rgba(248, 183, 25, 0.8), 0 0 25px 8px rgba(248, 183, 25, 0.5)",
        }}
      />

      <span
        className="absolute rounded-full"
        style={{
          width: "40px",
          height: "40px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(248, 183, 25, 0.6) 0%, rgba(255, 235, 59, 0.3) 40%, transparent 70%)",
          animation: "pulse-glow 0.4s ease-in-out infinite alternate",
          pointerEvents: "none",
        }}
      />

      {[...Array(45)].map((_, i) => {
        const animIndex = i % 20;
        const isLeft = animIndex >= 5 && animIndex < 8;
        const isRight = animIndex >= 8 && animIndex < 11;
        const isDiagLeft = animIndex >= 11 && animIndex < 13;
        const isDiagRight = animIndex >= 13 && animIndex < 15;
        const isBurst = animIndex >= 15 && animIndex < 20;
        
        let animName = `spark-up-${i % 5}`;
        if (isLeft) animName = `spark-left-${i % 3}`;
        else if (isRight) animName = `spark-right-${i % 3}`;
        else if (isDiagLeft) animName = `spark-diag-left-${i % 1}`;
        else if (isDiagRight) animName = `spark-diag-right-${i % 1}`;
        else if (isBurst) animName = `spark-burst-${i % 5}`;
        
        const size = isBurst ? 3 + (i % 3) : 2 + (i % 4);
        
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
              filter: "blur(0.3px)",
              left: "50%",
              top: "50%",
              animation: `${animName} ${0.3 + (i % 5) * 0.1}s ease-out infinite`,
              animationDelay: `${(i % 10) * 0.05}s`,
            }}
          />
        );
      })}
    </span>
  );

  return (
    <span className={`${className} relative inline-block`} ref={containerRef}>
      <style jsx>{`
        @keyframes pulse-glow {
          0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.85); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes spark-up-0 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(0, -45px) scale(0.1); } }
        @keyframes spark-up-1 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(0, -50px) scale(0.15); } }
        @keyframes spark-up-2 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(0, -40px) scale(0.1); } }
        @keyframes spark-up-3 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(0, -55px) scale(0.2); } }
        @keyframes spark-up-4 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(0, -35px) scale(0.1); } }
        @keyframes spark-left-0 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(-25px, -20px) scale(0.15); } }
        @keyframes spark-left-1 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(-40px, -30px) scale(0.1); } }
        @keyframes spark-left-2 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(-35px, -15px) scale(0.2); } }
        @keyframes spark-right-0 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(25px, -20px) scale(0.15); } }
        @keyframes spark-right-1 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(40px, -30px) scale(0.1); } }
        @keyframes spark-right-2 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(35px, -15px) scale(0.2); } }
        @keyframes spark-diag-left-0 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(-25px, -45px) scale(0.12); } }
        @keyframes spark-diag-right-0 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } 15% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(25px, -45px) scale(0.12); } }
        @keyframes spark-burst-0 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 20% { opacity: 0.9; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(0, -60px) scale(0.05); } }
        @keyframes spark-burst-1 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 20% { opacity: 0.9; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(-45px, -45px) scale(0.05); } }
        @keyframes spark-burst-2 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 20% { opacity: 0.9; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(45px, -45px) scale(0.05); } }
        @keyframes spark-burst-3 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 20% { opacity: 0.9; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(-60px, 0) scale(0.05); } }
        @keyframes spark-burst-4 { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 20% { opacity: 0.9; } 100% { opacity: 0; transform: translate(-50%, -50%) translate(60px, 0) scale(0.05); } }
      `}</style>

      <span className="relative z-10 inline">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="relative inline char-span"
            style={{
              color: getCharColor(i),
              transition: "color 0.05s ease-out",
            }}
          >
            {char}
          </span>
        ))}
      </span>
      {showCursor && renderCursor()}
    </span>
  );
};
