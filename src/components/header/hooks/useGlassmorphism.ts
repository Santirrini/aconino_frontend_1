import { useScrollDetection } from "./useScrollDetection";

export function useGlassmorphism() {
  const { isScrolled, scrollY } = useScrollDetection(50);

  const blurValue = isScrolled ? Math.min(20, scrollY / 10) : 0;
  
  const glassStyles = isScrolled ? {
    backdropFilter: `blur(${blurValue}px)`,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)"
  } : {
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)"
  };

  return { isScrolled, glassStyles };
}
