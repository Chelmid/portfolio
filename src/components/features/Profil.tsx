import { useTranslation } from "react-i18next";

type PorfilProps = {
  name?: string;
  titleJob?: string;
  description?: string;
};

export const Profil = ({ name, titleJob, description }: PorfilProps) => {
  const { t } = useTranslation();
  return (
    <div className="m-auto w-9/12 pt-14 sm:pt-14">
      <div className="lg:flex flex-row  py-20">
        <div className="">
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
      </div>
    </div>
  );
};
