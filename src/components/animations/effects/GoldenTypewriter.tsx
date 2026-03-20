"use client";

import React, { useState, useEffect } from "react";

interface GoldenTypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  loop?: boolean;
  waitDuration?: number;
}

export const GoldenTypewriter = ({
  text,
  className = "",
  delay = 0,
  speed = 0.08,
  loop = true,
  waitDuration = 3000,
}: GoldenTypewriterProps) => {
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"delay" | "typing" | "sparkle" | "wait">("delay");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          setCharIndex(0);
          setPhase("typing");
        }
      }, waitDuration);
    }

    return () => clearTimeout(timeout);
  }, [mounted, phase, charIndex, text.length, delay, speed, loop, waitDuration]);

  const typedText = text.slice(0, charIndex);
  const remainingText = text.slice(charIndex);
  const isTyping = phase === "typing";
  const showSparkle = phase === "sparkle";
  const showCursor = isTyping || showSparkle;

  if (!mounted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`${className} relative inline-block`}>
      {/* Dimmed full text layer */}
      <span
        className="absolute inset-0"
        aria-hidden="true"
        style={{ opacity: 0.25 }}
      >
        {text}
      </span>

      {/* Typing reveal layer */}
      <span className="relative z-10">
        <span>{typedText}</span>
        <span style={{ opacity: 0 }}>{remainingText}</span>
      </span>

      {/* Golden cursor with particles */}
      {showCursor && (
        <span
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            left: `${(charIndex / text.length) * 100}%`,
            transform: "translateX(-50%)",
            width: "4px",
            zIndex: 20,
          }}
        >
          {/* Golden vertical line */}
          <span
            className="absolute"
            style={{
              width: "3px",
              height: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(180deg, transparent 0%, rgb(248, 183, 25) 15%, rgb(255, 224, 102) 50%, rgb(248, 183, 25) 85%, transparent 100%)",
              borderRadius: "2px",
              boxShadow: showSparkle
                ? "rgba(248, 183, 25, 0.9) 0px 0px 10px 3px, rgba(248, 183, 25, 0.5) 0px 0px 20px 6px"
                : "rgba(248, 183, 25, 0.7) 0px 0px 10px 3px, rgba(248, 183, 25, 0.3) 0px 0px 20px 6px",
            }}
          />

          {/* Ambient glow orb */}
          <span
            className="absolute rounded-full"
            style={{
              width: "24px",
              height: "24px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(248, 183, 25, 0.5) 0%, rgba(255, 235, 59, 0.2) 40%, transparent 70%)",
              animation: "pulse-glow 0.6s ease-in-out infinite alternate",
              pointerEvents: "none",
            }}
          />

          {/* Spark particles */}
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                width: "3px",
                height: "3px",
                backgroundColor: i === 1 ? "#ffe066" : "#f8b719",
                filter: "blur(0.5px)",
                left: "50%",
                top: `${20 + i * 25}%`,
                animation: `spark-float-${i} 0.5s ease-out infinite`,
              }}
            />
          ))}
        </span>
      )}

      {/* CSS animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          from { opacity: 0.5; transform: translate(-50%, -50%) scale(0.8); }
          to { opacity: 0.8; transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes spark-float-0 {
          0% { opacity: 0; transform: translate(-50%, 0) scale(0.3); }
          30% { opacity: 0.9; }
          100% { opacity: 0; transform: translate(calc(-50% - 10px), -8px) scale(0.5); }
        }
        @keyframes spark-float-1 {
          0% { opacity: 0; transform: translate(-50%, 0) scale(0.3); }
          30% { opacity: 0.8; }
          100% { opacity: 0; transform: translate(calc(-50% + 8px), 6px) scale(0.5); }
        }
        @keyframes spark-float-2 {
          0% { opacity: 0; transform: translate(-50%, 0) scale(0.3); }
          30% { opacity: 0.9; }
          100% { opacity: 0; transform: translate(calc(-50% - 12px), -4px) scale(0.5); }
        }
      `}</style>
    </span>
  );
};
