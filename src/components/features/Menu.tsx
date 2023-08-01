import { Button } from "./Button";

export const Menu = () => {
  return (
    <div className="h-10 bg-[#7EAFF9]">
      <div className="flex flex-row float-left">
        <Button modeLanguage />
        <Button modeLightDarkActive />
      </div>
      <div className="flex flex-row float-right">
        <Button modeLanguage />
        <Button modeLightDarkActive />
      </div>
    </div>
  );
};
