import { SiJavascript, SiReact, SiTailwindcss, SiPhp } from "react-icons/si";

export const TechnosIcons = () => {
  return (
    <div className="flex flex-wrap m-auto w-9/12 py-10">
      <div className="m-auto">
        <h3 className="text-center p-6">Front</h3>
        <div className="flex">
          <SiJavascript
            className="hover:text-white hover:scale-125 ease-in duration-300 mx-4"
            size={64}
          />
          <SiReact
            className="hover:text-white hover:scale-125 ease-in duration-300 mx-4"
            size={64}
          />
          <SiTailwindcss
            className="hover:text-white hover:scale-125 ease-in duration-300 mx-4"
            size={64}
          />
          <SiPhp
            className="hover:text-white hover:scale-125 ease-in duration-300 mx-4"
            size={64}
          />
        </div>
      </div>
      <div className="m-auto p-6">
        <h3 className="text-center">Back</h3>
        <div className="flex">
          <SiJavascript
            className="hover:text-white hover:scale-125 ease-in duration-300 mx-4"
            size={64}
          />
          <SiReact
            className="hover:text-white hover:scale-125 ease-in duration-300 mx-4"
            size={64}
          />
          <SiTailwindcss
            className="hover:text-white hover:scale-125 ease-in duration-300 mx-4"
            size={64}
          />
          <SiPhp
            className="hover:text-white hover:scale-125 ease-in duration-300 mx-4"
            size={64}
          />
        </div>
      </div>
    </div>
  );
};
