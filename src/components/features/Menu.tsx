import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { Button } from "./Button";
import { useContext } from "react";
import { ModeLightDarkContext } from "../../utils/ModeLightDark";
import { ScrollBarPositionContext } from "../../utils/ScrollBarPosition";

type MenuProps = {
  activeButtons?: boolean;
};

export const Menu = ({ activeButtons = false }: MenuProps) => {
  const { scrollPosition } = useContext(ScrollBarPositionContext);

  const { toggleModeLightDark, ModeLightDark } =
    useContext(ModeLightDarkContext);
  return (
    <div className="flex relative justify-end z-10">
      <div
        className={`${
          scrollPosition !== undefined && scrollPosition > 60
            ? "sm:block flex flex-row fixed top-0 right-0 transition duration-1000 ease-linear delay-100 bg-fuchsia-400 h-full h-16 sm:h-full rounded-full "
            : "flex flex-row absolute"
        }`}>
        {activeButtons && (
          <>
            <Button icons={<SiGithub size={40} title="Github" />} link="" />
            <Button
              icons={
                <SiLinkedin
                  size={40}
                  title="Linkedin"
                  className="rounded-full"
                />
              }
              link=""
            />
            <Button modeLanguage />
            <Button
              icons={
                ModeLightDark ? (
                  <MdNightlight size={32} title="dark" />
                ) : (
                  <MdLightMode size={32} title="light" />
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
