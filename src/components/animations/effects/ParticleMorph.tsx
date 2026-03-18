"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ParticleMorphProps {
  subtle?: boolean;
}

interface Particle {
  width: number;
  height: number;
  top: string;
  left: string;
  xAnimation: number;
  duration: number;
  delay: number;
}

export function ParticleMorph({ subtle = false }: ParticleMorphProps) {
  const [mounted, setMounted] = useState(false);
  const [particleData, setParticleData] = useState<Particle[]>([]);
  const particlesLength = subtle ? 10 : 25;

  useEffect(() => {
    setMounted(true);
    setParticleData(
      Array.from({ length: particlesLength }).map(() => ({
        width: Math.random() * 6 + 2,
        height: Math.random() * 6 + 2,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        xAnimation: Math.random() * 20 - 10,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, [particlesLength]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {particleData.map((data, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            width: data.width,
            height: data.height,
            top: data.top,
            left: data.left,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, data.xAnimation, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: data.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: data.delay,
          }}
        />
      ))}
    </div>
  );
}
