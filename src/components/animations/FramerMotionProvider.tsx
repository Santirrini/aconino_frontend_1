"use client";

import { LazyMotion, m } from "framer-motion";

const loadFeatures = () => import("framer-motion").then((mod) => mod.domAnimation);

export function FramerMotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}

export { m };
