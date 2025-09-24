import { useRef, useState, useEffect } from "react";

interface UseHorizontalScrollReturn {
  gridRef: React.RefObject<HTMLDivElement | null>;
  scrollPosition: number;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scroll: (direction: "left" | "right") => void;
}

export const useHorizontalScroll = (): UseHorizontalScrollReturn => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (gridRef.current) {
      const container = gridRef.current.parentElement;
      if (!container) return;

      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (container) {
          setScrollPosition(container.scrollLeft);
        }
      }, 500);
    }
  };

  const handleScroll = () => {
    const container = gridRef.current?.parentElement;
    if (container) {
      setScrollPosition(container.scrollLeft);
    }
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = gridRef.current?.parentElement
    ? scrollPosition <
      gridRef.current.parentElement.scrollWidth -
        gridRef.current.parentElement.clientWidth
    : false;

  useEffect(() => {
    const container = gridRef.current?.parentElement;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return {
    gridRef,
    scrollPosition,
    canScrollLeft,
    canScrollRight,
    scroll,
  };
};
