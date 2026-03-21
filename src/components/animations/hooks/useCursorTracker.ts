"use client";

import { useState, useEffect, useRef } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

interface UseCursorTrackerProps {
  charIndex: number;
  text: string;
  containerRef: React.RefObject<HTMLSpanElement | null>;
  mounted: boolean;
}

export const useCursorTracker = ({
  charIndex,
  text,
  containerRef,
  mounted,
}: UseCursorTrackerProps): CursorPosition => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(cursorPos);

  useEffect(() => {
    cursorRef.current = cursorPos;
  }, [cursorPos]);

  useEffect(() => {
    const updateCursorPosition = () => {
      if (mounted && containerRef.current) {
        const container = containerRef.current;
        const charSpans = container.querySelectorAll(".golden-typewriter-char");

        const targetIndex = Math.min(charIndex, text.length - 1);
        const targetSpan = charSpans[targetIndex];

        if (targetSpan) {
          const charRect = targetSpan.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          setCursorPos({
            x: charRect.left - containerRect.left + charRect.width / 2,
            y: charRect.top - containerRect.top + charRect.height / 2,
          });
        }
      }
    };

    updateCursorPosition();
    window.addEventListener("resize", updateCursorPosition);
    return () => window.removeEventListener("resize", updateCursorPosition);
  }, [charIndex, mounted, text.length, text, containerRef]);

  return cursorPos;
};
