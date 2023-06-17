// framer motion variants
export const entryMotion = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {
      ease: "linear",
      duration: 0.9,
    },
  },
};

export const videoAnimeVariant = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [2, 1],
    transition: {
      ease: "linear",
      duration: 1,
      delay: 0.5,
    },
  },
};
export const navbarVariant = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0.5,
      delay: 1,
    },
  },
};

export const heroVariant = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 1.7,
    },
  },
};

export const wavingHandVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0.7,
      delay: 3,
    },
  },
};

export const wavingHandWhileHover = {
  scale: 1.5,
  transition: { type: "spring", duration: 0.5 },
};

export const navElementAnimation = {
  initial: {
    opacity: 0,
    width: 0,
  },
  animate: {
    opacity: 1,
    width: "100%",
    transition: {
      ease: "easeIn",
      duration: 0.2,
    },
  },
};

export const pageTransition = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeIn",
      duration: 1.7,
    },
  },
};

export const clipPathVariant = {
  initial: {
    clipPath: "circle(0% at 100% 0%)",
  },
  animate: {
    clipPath: "circle(100%)",
    transition: {
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

export const navLinksVariant = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "linear" },
  },
};
