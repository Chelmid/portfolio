import { useTranslation } from "react-i18next";
import imageNextjsReactjs from "../../assets/image/Nextjs_Reactjs.jpg";
import imageDjango from "../../assets/image/django-python.jpg";
import imageSkill from "../../assets/image/skills-words.jpg";
import { CardProjet } from "./CardProject";

export const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap h-full py-10">
      <CardProjet
        title={t("project.container0.name")}
        namesBadge={t("project.container0.badges", { returnObjects: true })}
        id={"0"}
        description={t("project.container0.description")}
        image={imageSkill}
        alt={"Skill"}
      />
      <CardProjet
        title={t("project.container1.name")}
        namesBadge={t("project.container1.badges", { returnObjects: true })}
        description={t("project.container1.description")}
        image={imageNextjsReactjs}
        alt={"Nextjs Reactjs"}
      />
      <CardProjet
        title={t("project.container2.name")}
        namesBadge={t("project.container2.badges", { returnObjects: true })}
        description={t("project.container2.description")}
        image={imageDjango}
        alt={"Django"}
      />
    </div>
  );
};
