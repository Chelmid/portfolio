import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  title: string;
};

export const Section = ({ children, title }: SectionProps) => {
  return (
    <div className="py-20 border-t-2 section">
      <h3 className="text-center text-4xl font-normal leading-normal">
        {title}
      </h3>
      {children}
    </div>
  );
};
