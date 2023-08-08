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
        className={`flex flex-row absolute ${
          scrollPosition !== undefined && scrollPosition > 70 ? "test" : ""
        }`}>
        {activeButtons && (
          <>
            <Button icons={<SiGithub size={40} title="Github" />} />
            <Button
              icons={
                <SiLinkedin
                  size={40}
                  title="Linkedin"
                  className="rounded-full"
                />
              }
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
