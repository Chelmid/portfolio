import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { Button } from "./Button";
import { useContext } from "react";
import { ModeLightDarkContext } from "../../utils/ModeLightDark";
import { ScrollBarPositionContext } from "../../utils/ScrollBarPosition";
import { useTranslation } from "react-i18next";

type MenuProps = {
  activeButtons?: boolean;
};

export const Menu = ({ activeButtons = false }: MenuProps) => {
  const { scrollPosition } = useContext(ScrollBarPositionContext);
  const { toggleModeLightDark, ModeLightDark } =
    useContext(ModeLightDarkContext);
  const { t } = useTranslation();

  return (
    <div className="flex relative justify-end z-10">
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
              link=""
              classname="button-with-icon"
            />
            <Button
              icons={
                <SiLinkedin
                  size={36}
                  title="Linkedin"
                  className="rounded-full"
                />
              }
              classname="button-with-icon"
              link=""
            />
            <Button modeLanguage classname="button-without-icon" />
            <Button
              classname="button-without-icon"
              icons={
                ModeLightDark ? (
                  <MdNightlight size={32} title={t("dark")} />
                ) : (
                  <MdLightMode size={32} title={t("light")} />
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
