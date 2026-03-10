export const headerContainerVariants = {
  transparent: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderBottom: "1px solid rgba(243, 244, 246, 1)", // gray-100
    backdropFilter: "blur(0px)",
    y: 0,
  },
  glass: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderBottom: "1px solid rgba(243, 244, 246, 0.5)",
    backdropFilter: "blur(20px)",
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};
