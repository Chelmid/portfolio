import { dataExperience } from "../../data/experience";
import { FlipCard } from "./FlipCard";

export const Experience = () => {
  return (
    <div className="py-10 m-auto ">
      <div>
        {dataExperience?.map((item, index) => (
          <div
            className="-my-6 flex flex-wrap experience sm:w-80 md:w-96 xl:w-full cursor-pointer"
            key={index}>
            <div className="relative pl-8 sm:pl-32 py-6 group xl:mr-20">
              <div className="nameExperience font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                {item.parcours.name}
              </div>
              <div
                className={`flex flex-col sm:flex-row items-start mb-1 ${
                  index < dataExperience?.length - 1
                    ? ""
                    : "group-last:before:hidden"
                } before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5`}>
                <time className="sm:absolute left-0 translate-y-[-2px] translate-x-[-10px] inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-8 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  {item.parcours.date}
                </time>
                <div className="text-xl font-bold text-slate-900 cityExperience">
                  {item.parcours.city}
                </div>
              </div>
              <div className="text-slate-500 descriptionExperience">
                {item.parcours.description}
              </div>
            </div>
            <FlipCard />
          </div>
        ))}
      </div>
    </div>
  );
};
