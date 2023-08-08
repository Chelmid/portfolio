import { ReactNode, createContext, useEffect, useState } from "react";

type ScrollBarPositionContextProps = {
  scrollPosition?: number;
  handleScroll?: () => void;
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollBarPositionContext.Provider value={{ scrollPosition }}>
      {children}
    </ScrollBarPositionContext.Provider>
  );
};

/** Export for context */
export { ScrollBarPositionContext, ScrollBarPositionProvider };
