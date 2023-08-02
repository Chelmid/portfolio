import { createContext, useState } from "react";

export const DARK = "#58c7fa";
export const LIGHT = "#0044aa";

type ModeLightDark = {
  ModeLightDark?: boolean;
  toggleModeLightDark?: () => void;
};

/** Context */
const ModeLightDarkContext = createContext<ModeLightDark>({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ModeLightDarkProvider = (props: any) => {
  const [ModeLightDark, setModeLightDark] = useState(false);
  const toggleModeLightDark = () => {
    setModeLightDark(!ModeLightDark);
  };

  return (
    <>
      <ModeLightDarkContext.Provider
        value={{ ModeLightDark, toggleModeLightDark }}>
        {props.children}
      </ModeLightDarkContext.Provider>
    </>
  );
};

/** Export for context */
export { ModeLightDarkContext, ModeLightDarkProvider };