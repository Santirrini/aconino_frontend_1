import { useScrollDetection } from "./useScrollDetection";
import { useMobileMenu } from "./useMobileMenu";
import { useCurtainReveal } from "./useCurtainReveal";
import { useGlassmorphism } from "./useGlassmorphism";

export function useHeader() {
  const scroll = useScrollDetection();
  const mobile = useMobileMenu();
  const curtain = useCurtainReveal();
  const glass = useGlassmorphism();

  return {
    isScrolled: scroll.isScrolled,
    mobileMenu: mobile,
    isRevealed: curtain.isRevealed,
    glassStyles: glass.glassStyles,
  };
}
