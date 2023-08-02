import { Profil } from "../features/Profil";
import { Project } from "../features/Project";

export const Body = () => {
  return (
    <>
      <Profil
        name="Bonjour, Michel LO"
        titleJob="Je suis développeur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum eros sed imperdiet sodales. Nullam euismod nibh in purus molestie, porta congue turpis fermentum. Maecenas eget luctus urna, at malesuada purus. Sed cursus lorem nunc. Nulla malesuada odio sem, at euismod libero tincidunt vitae. Nam tincidunt diam mauris. Nulla viverra maximus justo sed fringilla."
      />
      <Project />
    </>
  );
};
