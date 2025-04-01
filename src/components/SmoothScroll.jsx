import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjusts smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
