import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Adds Lenis smooth scrolling for both wheel and anchor link clicks.
 * Call once (e.g. inside App or Layout component).
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      gestureOrientation: "vertical",
      duration: 1.0,
      easing: (t) => t,
    });

    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (!href) return;

        const target = document.querySelector(href);
        if (target) {
          lenis.scrollTo(target as HTMLElement, { offset: 0 });
        }
      });
    });

    // requestAnimationFrame loop
    const onRaf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(onRaf);
    };
    requestAnimationFrame(onRaf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
