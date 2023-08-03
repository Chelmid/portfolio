import { Experience } from "../features/Experience";
import { Profil } from "../features/Profil";
import { Project } from "../features/Project";
import { Section } from "./Section";

export const Body = () => {
  return (
    <>
      <Profil
        name="Michel LO"
        titleJob="job.developer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros sed imperdiet sodales. Nullam euismod nibh in purus molestie, porta congue turpis fermentum. Maecenas eget luctus urna, at malesuada purus. Sed cursus lorem nunc. Nulla malesuada odio sem, at euismod libero tincidunt vitae. Nam tincidunt diam mauris. Nulla viverra maximus justo sed fringilla."
      />

      <Section title="Les projets">
        <Project />
      </Section>
      <Section title="Les Technos">
        <Project />
      </Section>
      <Section title="Mon parcours">
        <Experience />
      </Section>
    </>
  );
};
