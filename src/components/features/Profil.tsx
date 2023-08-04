import { useTranslation } from "react-i18next";
import { Menu } from "./Menu";

type PorfilProps = {
  name?: string;
  titleJob?: string;
  description?: string;
};

export const Profil = ({ name, titleJob, description }: PorfilProps) => {
  const { t } = useTranslation();
  return (
    <div className="m-auto w-9/12 pt-14 sm:pt-14">
      <div className="sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto shadow-xl rounded-lg ">
        <Menu activeButtons />
        <div className="rounded-t-lg h-48 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="flex justify-center flex-nowrap">
          <div className="w-64 h-64 relative -mt-24 border-4 border-white rounded-full overflow-hidden mr-2">
            <img
              className="object-cover object-center h-64"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
            />
          </div>
          <div className="ml-2">
            <h2 className="font-semibold text-5xl font-normal leading-normal mt-0 mb-0 text-center">
              {t(name)}
            </h2>
            <h3 className="text-center text-4xl">{t(titleJob)}</h3>
          </div>
        </div>
        <div className="text-center mt-2 p-10">
          <p className="">{t(description)}</p>
        </div>

        <div className="p-4 border-t mx-8 mt-2">
          <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
            Follow
          </button>
        </div>
      </div>
      {/* <div className="lg:flex flex-row  py-20">
        <div className="mx-auto  relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="rounded-full lg h-96 bg-auto bg-center sm:m-auto"
            src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/avatar.svg"
            alt="example"
          />
        </div>
        <div className="m-auto intro w-9/12 pl-10">
          <h1 className="lg:text-start text-5xl font-normal leading-normal mt-0 mb-0 sm:text-center">
            {`${t("Hello")} ${name}`}
          </h1>
          <h2 className="lg:text-start text-4xl font-normal leading-normal mt-0 mb-0 sm:text-center">
            {`${t(titleJob)}`}
          </h2>
          <p className="lg:text-start leading-normal mt-2 sm:text-center">
            {description}
          </p>
        </div>
      </div> */}
    </div>
  );
};
