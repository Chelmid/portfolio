import { ReactNode, useContext } from "react";
import { ModeLightDarkContext } from "../../utils/ModeLightDark";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  const { ModeLightDark } = useContext(ModeLightDarkContext);
  return (
    <div className={ModeLightDark ? "mode-dark" : "mode-light"}>{children}</div>
  );
};
