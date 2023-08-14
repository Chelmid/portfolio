import { breakLine } from "../../utils/string";
import { Menu } from "./Menu";

type PorfilProps = {
  name?: string;
  titleJob?: string;
  description?: string;
};

export const Profil = ({ name, titleJob, description }: PorfilProps) => {
  let descriptionwithBreaksLines;
  if (description)
    descriptionwithBreaksLines = breakLine(description, ".", "\n");

  return (
    <div className="section m-auto w-11/12 mt-14 sm:mt-14 shadow-xl">
      <div className="mx-auto">
        <Menu activeButtons />
        <div className="rounded-t-lg h-48 overflow-hidden bar-profil"></div>
        <div className="flex justify-center flex-wrap">
          <div className="w-64 h-64 relative -mt-24 border-4 border-white rounded-full overflow-hidden mr-2">
            <img
              className="object-cover object-center h-64"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
            />
          </div>
          <div className="ml-2">
            <h2 className="font-semibold text-5xl font-normal leading-normal mt-0 mb-0 text-center">
              {name}
            </h2>
            <h3 className="text-center text-4xl">{titleJob}</h3>
          </div>
        </div>
        <div className="text-center font-sembold p-10 w-3/4 m-auto">
          {descriptionwithBreaksLines}
        </div>
      </div>
    </div>
  );
};
