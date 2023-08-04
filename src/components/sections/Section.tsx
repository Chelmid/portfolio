import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  title: string;
};

export const Section = ({ children, title }: SectionProps) => {
  return (
    <div className="section">
      <div className="m-auto w-9/12">
        <div className="sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto shadow-xl rounded-lg py-10">
          <h3 className="text-center text-4xl font-normal leading-normal py-6">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
};
