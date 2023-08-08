import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

type ButtonProps = {
  title?: string;
  modeLightDarkActive?: boolean;
  modeLanguage?: boolean | string;
  link?: string;
  icons?: ReactNode | string;
  toggleModeLightDark?: () => void;
};

/** Language */
const totalLanguage: string[] = ["FR", "EN"];

export const Button = ({
  title = "",
  modeLightDarkActive = false,
  modeLanguage = false,
  link = "",
  icons = "",
  toggleModeLightDark,
}: ButtonProps) => {
  const [languageSelected, setLanguageSelected] = useState("FR");

  const { t, i18n } = useTranslation();

  return (
    <div className="m-2">
      <button
        title={(title && t(title)) || (modeLanguage ? t(languageSelected) : "")}
        className={`w-10 h-10 text-center rounded-full bg-white transition ease-in-out translate-y-1 hover:scale-125 duration-300 hover:text-blue-500`}
        onClick={() => {
          if (modeLightDarkActive) {
            toggleModeLightDark?.();
          }
          if (modeLanguage) {
            const findLanguage = totalLanguage.find(
              (language) => language !== languageSelected
            );
            setLanguageSelected(findLanguage as string);
            i18n.changeLanguage(findLanguage?.toLowerCase());
          }
          if (link) {
            window.open(link, "_blank");
          }
        }}>
        <div className="font-bold text-xl">{title && title}</div>
        <div className="flex justify-center">{icons && icons}</div>
        <div className="font-bold text-xl">
          {modeLanguage && languageSelected}
        </div>
      </button>
    </div>
  );
};
