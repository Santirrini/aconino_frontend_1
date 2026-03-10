export const curtainReveal = {
  hidden: { scaleY: 1, opacity: 1 },
  visible: { scaleY: 0, opacity: 0, transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] } }
};

export const morphingGradient = {
  initial: { backgroundPosition: '0% 50%' },
  animate: { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], transition: { duration: 8, repeat: Infinity } }
};
