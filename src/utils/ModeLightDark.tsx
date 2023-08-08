import { ReactNode, createContext, useState } from "react";

type ModeLightDarkProps = {
  ModeLightDark?: boolean;
  toggleModeLightDark?: () => void;
};
type ModeLightDarkProviderProps = {
  children: ReactNode;
};

/** Context */
const ModeLightDarkContext = createContext<ModeLightDarkProps>({});

const ModeLightDarkProvider = ({ children }: ModeLightDarkProviderProps) => {
  const [ModeLightDark, setModeLightDark] = useState(false);
  const toggleModeLightDark = () => {
    setModeLightDark((current) => !current);
  };

  return (
    <>
      <ModeLightDarkContext.Provider
        value={{ ModeLightDark, toggleModeLightDark }}>
        {children}
      </ModeLightDarkContext.Provider>
    </>
  );
};

/** Export for context */
export { ModeLightDarkContext, ModeLightDarkProvider };
