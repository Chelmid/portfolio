import { Button } from "./Button";

export const Menu = () => {
  return (
    <div>
      <div className={`flex flex-row lg:float-right`}>
        <Button modeLanguage />
        <Button modeLightDarkActive />
      </div>
    </div>
  );
};
