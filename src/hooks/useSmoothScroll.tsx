import { useLenis } from "lenis/react";

export const useSmoothScroll = () => {
  const lenis = useLenis();

  const scrollToId = (id: string, offset: number = -120) => {
    const target = document.getElementById(id);
    if (target && lenis) {
      lenis.scrollTo(target, { offset });
    }
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Fallback
    }
  };

  const scrollToElement = (el: HTMLElement | null, offset: number = 0) => {
    if (el && lenis) {
      lenis.scrollTo(el, { offset });
    }
  };

  return {
    scrollToId,
    scrollToTop,
    scrollToElement,
  };
};
