import { useState, useEffect } from "react";

export function useHideOnScroll() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Always show near top
      if (currentScroll < 50) {
        setHidden(false);
      } else if (currentScroll > lastScroll) {
        // Scrolling down → hide
        setHidden(true);
      } else {
        // Scrolling up → show
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return hidden;
}
