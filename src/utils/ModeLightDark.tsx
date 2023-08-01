import { createContext, useState } from "react";

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
