import { SiJavascript, SiReact, SiTailwindcss, SiPhp } from "react-icons/si";

export const TechnosIcons = () => {
  return (
    <div className="flex m-auto w-9/12 py-10">
      <SiJavascript
        className="hover:text-white hover:scale-125 ease-in duration-300"
        size={64}
      />
      <SiReact
        className="hover:text-white hover:scale-125 ease-in duration-300"
        size={64}
      />
      <SiTailwindcss
        className="hover:text-white hover:scale-125 ease-in duration-300"
        size={64}
      />
      <SiPhp
        className="hover:text-white hover:scale-125 ease-in duration-300"
        size={64}
      />
    </div>
  );
};
