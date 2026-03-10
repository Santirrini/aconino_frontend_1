import { useState, useEffect } from "react";

export function useCurtainReveal() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // La animación se ejecutará siempre que el componente se monte
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return { isRevealed };
}
