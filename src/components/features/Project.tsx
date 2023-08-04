import { CardProjet } from "./CardProject";

export const Project = () => {
  return (
    <div className="flex flex-wrap h-full py-10">
      <CardProjet namesBadge={["Javascriot", "css"]} />
      <CardProjet namesBadge={["PHP", "Symfony"]} />
      <CardProjet />
    </div>
  );
};
