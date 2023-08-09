import {
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiSymfony,
  SiMysql,
  SiJirasoftware,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import { IoLogoGitlab } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export const TechnosIcons = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap m-auto w-9/12 py-4">
      <div className="m-auto py-6">
        <h3 className="text-center p-6 font-semibold text-xl">Front</h3>
        <div className="flex flex-wrap">
          <SiReact
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="React"
          />
          <SiTypescript
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="Typescript"
          />
          <SiTailwindcss
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="Tailwindcss"
          />
          <FiMoreHorizontal
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 self-end cursor-pointer"
            size={32}
            title={t("icons.more")}
          />
        </div>
      </div>
      <div className="m-auto">
        <h3 className="text-center p-6 font-semibold text-xl">Back</h3>
        <div className="flex flex-wrap">
          <SiSymfony
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="Symfony"
          />
          <SiNodedotjs
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="Nodejs"
          />
          <SiMysql
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="MySQL"
          />
          <FiMoreHorizontal
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 self-end cursor-pointer"
            size={32}
            title={t("icons.more")}
          />
        </div>
      </div>
      <div className="m-auto py-6">
        <h3 className="text-center p-6 font-semibold text-xl">UI / UX</h3>
        <div className="flex flex-wrap">
          <SiFigma
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="Figma"
          />
          <SiAdobeillustrator
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="Adobe Illustrator"
          />
          <SiAdobephotoshop
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="Adobe Photoshop"
          />
          <FiMoreHorizontal
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 self-end cursor-pointer"
            size={32}
            title={t("icons.more")}
          />
        </div>
      </div>
      <div className="m-auto py-6">
        <h3 className="text-center p-6 font-semibold text-xl">Gestion</h3>
        <div className="flex flex-wrap">
          <SiJirasoftware
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="Jira software"
          />
          <IoLogoGitlab
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="Gitlab"
          />
          <SiAdobephotoshop
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 cursor-pointer"
            size={64}
            title="Adobe Photoshop"
          />
          <FiMoreHorizontal
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 self-end cursor-pointer"
            size={32}
            title={t("icons.more")}
          />
        </div>
      </div>
    </div>
  );
};
