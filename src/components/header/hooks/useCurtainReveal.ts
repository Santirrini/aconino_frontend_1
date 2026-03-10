import { useState, useEffect } from "react";

export function useCurtainReveal() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedAconino");
    
    if (!hasVisited) {
      sessionStorage.setItem("hasVisitedAconino", "true");
      const timer = setTimeout(() => setIsRevealed(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsRevealed(true);
    }
  }, []);

  return { isRevealed };
}
