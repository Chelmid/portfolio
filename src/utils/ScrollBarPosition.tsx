import { ReactNode, createContext, useEffect, useState } from "react";

type ScrollBarPositionContextProps = {
  scrollPosition?: number;
  handleScrollReset?: (value: number) => void;
};

type ScrollBarPositionProviderProps = {
  children: ReactNode;
};

const ScrollBarPositionContext = createContext<ScrollBarPositionContextProps>(
  {}
);

const ScrollBarPositionProvider = ({
  children,
}: ScrollBarPositionProviderProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.scrollY);
  const handleScrollReset = (value: number) => setScrollPosition(value);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollBarPositionContext.Provider
      value={{ scrollPosition, handleScrollReset }}>
      {children}
    </ScrollBarPositionContext.Provider>
  );
};

/** Export for context */
export { ScrollBarPositionContext, ScrollBarPositionProvider };
