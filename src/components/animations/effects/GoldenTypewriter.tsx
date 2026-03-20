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

const GOLD_COLOR = "#f8b719";
const WHITE_COLOR = "rgba(255, 255, 255, 0.4)";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
  gravity: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // Random direction, mostly outwards and down
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 1;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed - 2; // Initial push upwards
    this.life = 1.0;
    this.decay = Math.random() * 0.03 + 0.02;
    this.size = Math.random() * 2 + 1;
    this.gravity = 0.15; // Sparks fall
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.life -= this.decay;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    // Color varies based on life
    ctx.fillStyle = `rgba(255, ${Math.floor(215 * this.life)}, 0, ${this.life})`;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
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
  const [phase, setPhase] = useState<"delay" | "typing" | "sparkle" | "wait" | "restarting">("delay");
  const [mounted, setMounted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const cursorRef = useRef(cursorPos);
  const phaseRef = useRef(phase);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    cursorRef.current = cursorPos;
  }, [cursorPos]);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  // Update canvas size
  useEffect(() => {
    if (!mounted) return;
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        canvasRef.current.width = containerRef.current.offsetWidth;
        canvasRef.current.height = containerRef.current.offsetHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mounted, text]);

  // Particle Animation Loop
  useEffect(() => {
    if (!mounted || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentPhase = phaseRef.current;
      const currentPos = cursorRef.current;

      if (currentPhase === "typing" || currentPhase === "sparkle") {
        // Emit particles at current cursor pos
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push(new Particle(currentPos.x, currentPos.y));
        }

        // Draw Heat Glow (Welding Flash)
        const gradient = ctx.createRadialGradient(
          currentPos.x, currentPos.y, 0,
          currentPos.x, currentPos.y, 35
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(0.2, "rgba(248, 183, 25, 0.5)");
        gradient.addColorStop(1, "rgba(248, 183, 25, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentPos.x, currentPos.y, 35, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw existing particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.update();
        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
        } else {
          p.draw(ctx);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mounted]);

  useEffect(() => {
    const updateCursorPosition = () => {
      if (mounted && containerRef.current) {
        const container = containerRef.current;
        const charSpans = container.querySelectorAll(".char-span");
        
        const targetIndex = Math.min(charIndex, text.length - 1);
        const targetSpan = charSpans[targetIndex];
        
        if (targetSpan) {
          const charRect = targetSpan.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          setCursorPos({
            x: charRect.left - containerRect.left + (charRect.width / 2),
            y: charRect.top - containerRect.top + (charRect.height / 2)
          });
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
      }, 1000);
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

  if (!mounted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span 
      className={`${className} relative inline-block whitespace-pre-wrap leading-tight md:leading-tight`} 
      ref={containerRef}
      style={{ isolation: 'isolate' }}
    >
      <style jsx>{`
        @keyframes dropIn {
          0% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        .char-span {
          display: inline-block;
          color: ${WHITE_COLOR};
          transition: color 0.1s ease-out;
        }
        .char-span.typed {
          color: #ffffff;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
          animation: dropIn 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      {/* Sparks Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 10 }}
      />

      <span className="relative z-10 inline">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className={`relative inline char-span ${i < charIndex ? "typed" : ""}`}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};
