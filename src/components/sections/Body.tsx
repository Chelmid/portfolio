import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowUpCircle } from "react-icons/bs";
import { ScrollBarPositionContext } from "../../utils/ScrollBarPosition";
import { Button } from "../features/Button";
import { Experience } from "../features/Experience";
import { Profil } from "../features/Profil";
import { Project } from "../features/Project";
import { TechnosIcons } from "../features/TechnoIcons";
import { Section } from "./Section";

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
      <Section title={t("section.technologies")}>
        <TechnosIcons />
      </Section>
      <Section title={t("section.experience")}>
        <div className="flex">
          <Experience />
        </div>
      </Section>
      {scrollPosition && (
        <div
          className={`${
            scrollPosition !== undefined &&
            scrollPosition > 60 &&
            "scrollbar-md fixed bottom-2 sm:bottom-none right-2 sm:right-none transition duration-500 ease-linear delay-100 opacity-100 z-50 rounded-full md:bg-transparent"
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
