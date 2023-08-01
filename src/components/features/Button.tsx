import { useContext, useState } from "react";
import { ModeLightDarkContext } from "../../utils/ModeLightDark";

type ButtonProps = {
  title?: string;
  modeLightDarkActive?: boolean;
  modeLanguage?: boolean;
  className?: string;
};

/** Selected mode light or dark */
const choiceIcons = (status: boolean) => {
  const dark = (
    <svg
      className="h-6 w-6 text-black m-auto"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
    </svg>
  );

  const light = (
    <svg
      className="h-6 w-6 text-black m-auto"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <circle cx="12" cy="12" r="5" /> <line x1="12" y1="1" x2="12" y2="3" />{" "}
      <line x1="12" y1="21" x2="12" y2="23" />{" "}
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{" "}
      <line x1="1" y1="12" x2="3" y2="12" />{" "}
      <line x1="21" y1="12" x2="23" y2="12" />{" "}
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );

  if (!status) return <div className="m-auto">{dark}</div>;
  if (status) return <div className="m-auto">{light}</div>;
};

/** Language */
const totalLanguage: string[] = ["FR", "EN"];

export const Button = ({
  title = "",
  modeLightDarkActive = false,
  modeLanguage = false,
  className = "",
}: ButtonProps) => {
  const [statusLightDark, setStatusLightDark] = useState(true);
  const [languageSelected, setLanguageSelected] = useState("FR");

  const { toggleModeLightDark } = useContext(ModeLightDarkContext);

  return (
    <div>
      <button
        className={`w-20 h-10 border-4 border-lime-500/100 text-center pt-1 ${className}`}
        onClick={() => {
          if (modeLightDarkActive) {
            setStatusLightDark(!statusLightDark);
            toggleModeLightDark?.();
          }
          if (modeLanguage) {
            const findLanguage = totalLanguage.find(
              (language) => language !== languageSelected
            );
            setLanguageSelected(findLanguage as string);
          }
        }}>
        <div>{title && title}</div>
        <div>{modeLanguage && languageSelected} </div>
        <div>{modeLightDarkActive && choiceIcons(statusLightDark)}</div>
      </button>
    </div>
  );
};
