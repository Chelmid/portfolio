import { Experience } from "../features/Experience";
import { Profil } from "../features/Profil";
import { Project } from "../features/Project";
import { TechnosIcons } from "../features/TechnoIcons";
import { Section } from "./Section";

export const Body = () => {
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
          <Experience />
        </div>
      </Section>
    </>
  );
};
