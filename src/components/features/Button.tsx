import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

type ButtonProps = {
  title?: string;
  modeLightDarkActive?: boolean;
  modeLanguage?: boolean | string;
  link?: string;
  icons?: ReactNode | string;
  classname?: string;
  toggleModeLightDark?: () => void;
  action?: () => void;
};

/** Language */
const totalLanguage: string[] = ["FR", "EN"];

export const Button = ({
  title = "",
  modeLightDarkActive = false,
  modeLanguage = false,
  link = "",
  icons = "",
  classname = "",
  toggleModeLightDark,
  action,
}: ButtonProps) => {
  const [languageSelected, setLanguageSelected] = useState("FR");

  const { t, i18n } = useTranslation();

  return (
    <div className="my-3 mx-2">
      <button
        title={
          (title && t(title)) ||
          (modeLanguage ? t(`language.${languageSelected}`) : "")
        }
        className={`w-10 h-10 text-center rounded-full transition ease-in-out translate-y-1 hover:scale-125 duration-300 ${classname}`}
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
          if (action) {
            action();
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
