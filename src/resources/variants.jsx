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
      duration: .5,
      delay: 1.8,
    },
  },
};

export const heroVariant = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate:{
    y: 0,
    opacity:1,
    transition: {
      duration: 1,
      delay: 2.5,
    },
  }
};
