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
    }
  };

  const scrollToBottom = () => {
    const bottom = document.body.scrollHeight;
    if (lenis) {
      lenis.scrollTo(bottom);
    }
  };

  return {
    scrollToId,
    scrollToTop,
    scrollToBottom,
    lenis: lenis,
  };
};
