export const curtainVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    opacity: 0,
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1], // Custom cinematic easing
    },
    // Esto es CLAVE: Elimina el clip-path al terminar la animación para no ocultar el menú desplegable
    transitionEnd: {
      clipPath: "none",
    }
  }
};
