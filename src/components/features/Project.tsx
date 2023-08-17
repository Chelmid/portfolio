import { useTranslation } from "react-i18next";
import imageDjango from "../../assets/image/django-python.png";
import imageNextjsReactjs from "../../assets/image/nextjs_reactjs.png";
import imageReactTailwindcssTypescript from "../../assets/image/react_tailwindcss_typescript_vite.png";
import imageSkill from "../../assets/image/skills-words.jpg";
import { CardProjet } from "./CardProject";

export const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap h-full py-10 justify-center">
      <div className="flex flex-wrap justify-center">
        <CardProjet
          title={t("project.container0.name")}
          namesBadge={t("project.container0.badges", { returnObjects: true })}
          description={t("project.container0.description")}
          image={imageSkill}
          alt={"Skill"}
        />
        <CardProjet
          title={t("project.container1.name")}
          namesBadge={t("project.container1.badges", { returnObjects: true })}
          description={t("project.container1.description")}
          image={imageReactTailwindcssTypescript}
          alt={"Portfolio"}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <CardProjet
          title={t("project.container2.name")}
          namesBadge={t("project.container2.badges", { returnObjects: true })}
          description={t("project.container2.description")}
          image={imageNextjsReactjs}
          alt={"Nextjs Reactjs"}
        />
        <CardProjet
          title={t("project.container3.name")}
          namesBadge={t("project.container3.badges", { returnObjects: true })}
          description={t("project.container3.description")}
          image={imageDjango}
          alt={"Django"}
        />
      </div>
    </div>
  );
};
