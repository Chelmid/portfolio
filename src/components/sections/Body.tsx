import { useContext } from "react";
import { Button } from "../features/Button";
import { Experience } from "../features/Experience";
import { Profil } from "../features/Profil";
import { Project } from "../features/Project";
import { TechnosIcons } from "../features/TechnoIcons";
import { Section } from "./Section";
import { BsArrowUpCircle } from "react-icons/bs";
import { ScrollBarPositionContext } from "../../utils/ScrollBarPosition";

export const Body = () => {
  const { scrollPosition } = useContext(ScrollBarPositionContext);
  console.log(scrollPosition);
  return (
    <>
      <Profil
        name="Michel LO"
        titleJob="job.developer"
        description="job.description.intro"
      />

      <Section title="Les projets">
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
      <Button icons={<BsArrowUpCircle size={40} className="" />} />
    </>
  );
};
