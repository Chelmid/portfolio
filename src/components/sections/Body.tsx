import { useContext } from "react";
import { Button } from "../features/Button";
import { Experience } from "../features/Experience";
import { Profil } from "../features/Profil";
import { Project } from "../features/Project";
import { TechnosIcons } from "../features/TechnoIcons";
import { Section } from "./Section";
import { BsArrowUpCircle } from "react-icons/bs";
import { ScrollBarPositionContext } from "../../utils/ScrollBarPosition";
import { useTranslation } from "react-i18next";

export const Body = () => {
  const { scrollPosition, handleScrollReset } = useContext(
    ScrollBarPositionContext
  );
  const { t } = useTranslation();
  return (
    <>
      <Profil
        name="Michel LO"
        titleJob={`${t("job.developer")}`}
        description={`${t("job.description.intro")}`}
      />

      <Section title={`${t("section.project")}`}>
        <Project />
      </Section>
      <Section title="Les Technos">
        <TechnosIcons />
      </Section>
      <Section title="Mon parcours">
        <div className="flex">
          <Experience />
        </div>
      </Section>
      {scrollPosition && (
        <div
          className={`${
            scrollPosition > 60
              ? "fixed bottom-0 right-0 transition duration-500 ease-linear delay-100 opacity-100 z-50 rounded-full bg-indigo-200 md:bg-transparent"
              : ""
          }`}>
          <Button
            icons={<BsArrowUpCircle size={40} />}
            classname="button-bottom"
            action={() => {
              handleScrollReset?.(0);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
      )}
    </>
  );
};
