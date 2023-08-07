import {
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiSymfony,
  SiMysql,
} from "react-icons/si";

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
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="React"
          />
          <SiTailwindcss
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="Tailwindcss"
          />
          <SiTailwindcss
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="Tailwindcss"
          />
          <FiMoreHorizontal
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 self-end"
            size={32}
            title={t("more")}
          />
        </div>
      </div>
      <div className="m-auto">
        <h3 className="text-center p-6 font-semibold text-xl">Back</h3>
        <div className="flex flex-wrap">
          <SiSymfony
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="Symfony"
          />
          <SiMysql
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="MySQL"
          />
          <SiMysql
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="MySQL"
          />
          <FiMoreHorizontal
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 self-end"
            size={32}
            title="and more ..."
          />
        </div>
      </div>
      <div className="m-auto py-6">
        <h3 className="text-center p-6 font-semibold text-xl">UI / UX</h3>
        <div className="flex flex-wrap">
          <SiFigma
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="Figma"
          />
          <SiAdobeillustrator
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="Adobe Illustrator"
          />
          <SiAdobephotoshop
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="Adobe Photoshop"
          />
          <FiMoreHorizontal
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 self-end"
            size={32}
            title="and more ..."
          />
        </div>
      </div>
      <div className="m-auto py-6">
        <h3 className="text-center p-6 font-semibold text-xl">UI / UX</h3>
        <div className="flex flex-wrap">
          <SiFigma
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="Figma"
          />
          <SiAdobeillustrator
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="Adobe Illustrator"
          />
          <SiAdobephotoshop
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6"
            size={64}
            title="Adobe Photoshop"
          />
          <FiMoreHorizontal
            className="hover:text-blue-500 hover:scale-125 ease-in duration-200 mx-6 self-end"
            size={32}
            title="and more ..."
          />
        </div>
      </div>
    </div>
  );
};
