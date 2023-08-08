import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { Button } from "./Button";
import { useContext, useEffect, useState } from "react";
import { ModeLightDarkContext } from "../../utils/ModeLightDark";

type MenuProps = {
  activeButtons?: boolean;
};

export const Menu = ({ activeButtons = false }: MenuProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { toggleModeLightDark, ModeLightDark } =
    useContext(ModeLightDarkContext);
  return (
    <div className="flex relative justify-end z-10">
      <div
        className={`flex flex-row absolute ${
          scrollPosition > 70 ? "test" : ""
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
