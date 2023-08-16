import { useTranslation } from "react-i18next";
import { dataExperience } from "../../data/experience";
import { FlipCard } from "./FlipCard";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className="py-10 m-auto experience-zone">
      <div>
        {dataExperience?.map((item, index) => (
          <div
            className="-my-6 flex justify-center flex-wrap experience cursor-pointer md:w-full"
            key={index}>
            <div className="relative p-6 group w-9/12 sm:9/12 md:w-6/12">
              <div className="nameExperience font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                {index === 5
                  ? `${t("job.developer")} ${item.parcours.name}`
                  : `${t("job.developer")} ${item.parcours.name}`}
              </div>
              <div
                className={`flex flex-col items-start mb-1 dateExperience ${
                  index === 5 ? "" : "group-last:before:hidden"
                } before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[0rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[0rem] after:-translate-x-1/2 after:translate-y-1.5 before:top-0 after:top-6`}>
                <time className="left-0 translate-y-[-2px] translate-x-[-10px] inline-flex items-center justify-center text-xs font-semibold uppercase w-56 h-8 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  <div className="">
                    {`${t(`month.${item.parcours.date.start.month}`)} ${
                      item.parcours.date.start.year
                    } - ${t(`month.${item.parcours.date.end.month}`)} ${
                      item.parcours.date.end.year
                    }`}
                  </div>
                </time>
                <div className="text-xl font-bold text-slate-900 cityExperience">
                  {item.parcours.city}
                </div>
              </div>
              <div className="text-slate-500 descriptionExperience">
                {item.parcours.description}
              </div>
            </div>
            <FlipCard index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
