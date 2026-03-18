"use client";

import React, { useState, useEffect } from "react";
import { FireSparkle } from "./FireSparkle";

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  loop?: boolean;
  waitDuration?: number;
}

/**
 * Typewriter effect component with looping and mini-fire effect.
 */
export const Typewriter = ({ 
  text, 
  className = "", 
  delay = 0, 
  speed = 0.04,
  loop = true,
  waitDuration = 3000
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"delay" | "typing" | "fire" | "wait" | "deleting">("delay");
  const [showFire, setShowFire] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "delay") {
      timeout = setTimeout(() => setPhase("typing"), delay * 1000);
    } 
    else if (phase === "typing") {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, speed * 1000);
      } else {
        setPhase("fire");
        setShowFire(true);
      }
    } 
    else if (phase === "fire") {
      // Show fire for 1.5 seconds at the end of typing
      timeout = setTimeout(() => {
        setShowFire(false);
        setPhase("wait");
      }, 1500);
    } 
    else if (phase === "wait") {
      // Wait before starting the next cycle
      timeout = setTimeout(() => {
        if (loop) setPhase("deleting");
      }, waitDuration);
    } 
    else if (phase === "deleting") {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          // Faster deletion
          setDisplayText(text.slice(0, displayText.length - 1));
        }, speed * 500); 
      } else {
        // Short pause before restart
        timeout = setTimeout(() => {
          setPhase("typing");
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, text, delay, speed, loop, waitDuration]);

  return (
    <span className={className}>
      {displayText}
      <FireSparkle active={showFire} />
    </span>
  );
};
