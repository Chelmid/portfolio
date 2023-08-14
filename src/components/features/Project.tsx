import { CardProjet } from "./CardProject";

export const Project = () => {
  return (
    <div className="flex flex-wrap h-full py-10">
      <CardProjet
        title={"Évolution Perpétuelle"}
        namesBadge={["En cours", "Obtenir des compétences"]}
        description="En dehors du travail, mes projets personnels de développement me
        maintiennent à jour technologiquement. En créant des
        applications et explorant de nouveaux frameworks, je renforce ma
        maîtrise pratique tout en interagissant avec la communauté en
        ligne. Ces projets stimulent ma croissance, renforcent mon
        professionnalisme et nourrissent ma passion pour l'informatique."
      />
      <CardProjet
        title={"Exploration de Nextjs"}
        namesBadge={["Nextjs", "CSS", "Typescript"]}
        description="Ce projet avait pour objectif de plonger dans l'univers de Next.js. L'idée sous-jacente était de développer un site de notations, à l'image de La Fourchette, avec une touche personnelle. Pour réaliser cela, j'ai combiné les puissantes technologies de Firebase pour la gestion des données, le processus de connexion et d'inscription, ainsi que Next.js pour l'architecture du site. Le code source du projet est disponible sur mon GitHub"
      />
      <CardProjet
        title={"Découverte de Django"}
        namesBadge={["Python", "Django"]}
        description="Mon exploration de Django a abouti à la création d'un quizz sophistiqué, utilisant une API pour gérer thèmes et questions. Ce projet a renforcé ma maîtrise de Django et des intégrations d'API, tout en produisant un quizz interactif captivant. Pour plus d'informations et le code source, consultez la page dédiée sur mon GitHub."
      />
    </div>
  );
};
