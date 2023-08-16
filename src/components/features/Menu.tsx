import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ModeLightDarkContext } from "../../utils/ModeLightDark";
import { ScrollBarPositionContext } from "../../utils/ScrollBarPosition";
import { Button } from "./Button";

type MenuProps = {
  activeButtons?: boolean;
};

export const Menu = ({ activeButtons = false }: MenuProps) => {
  const { scrollPosition } = useContext(ScrollBarPositionContext);
  const { toggleModeLightDark, ModeLightDark } =
    useContext(ModeLightDarkContext);
  const { t } = useTranslation();

  return (
    <div className="flex relative justify-end z-10 bouton-top-profile">
      <div
        className={`${
          scrollPosition !== undefined && scrollPosition > 60
            ? "scrollbarRight md:block flex flex-row fixed top-0 right-0 transition duration-500 ease-linear bg-indigo-200 h-16 md:h-full rounded-full"
            : "flex flex-row absolute"
        }`}>
        {activeButtons && (
          <>
            <Button
              icons={<SiGithub size={36} title="Github" />}
              link="https://github.com/Chelmid"
              classname="button-with-icon mt-0 md:mt-2"
            />
            <Button
              icons={
                <SiLinkedin
                  size={36}
                  title="Linkedin"
                  className="rounded-full"
                />
              }
              classname="button-with-icon mt-0 md:mt-2"
              link="https://www.linkedin.com/in/michel-l-b47070134/"
            />
            <Button modeLanguage classname="button-without-icon mt-0 md:mt-2" />
            <Button
              classname="button-without-icon mt-0 md:mt-2"
              icons={
                ModeLightDark ? (
                  <MdNightlight size={32} title={t("lighting.dark")} />
                ) : (
                  <MdLightMode size={32} title={t("lighting.light")} />
                )
              }
              modeLightDarkActive
              toggleModeLightDark={toggleModeLightDark}
            />
          </>
        )}
      </div>
    </div>
  );
};
