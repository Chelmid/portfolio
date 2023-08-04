import { Button } from "./Button";

type MenuProps = {
  activeButtons?: boolean;
};

export const Menu = ({ activeButtons = false }: MenuProps) => {
  return (
    <div className="flex relative justify-end z-10">
      <div className={`flex flex-row absolute`}>
        {activeButtons && (
          <>
            <Button modeGithub title="Git" />
            <Button modeLanguage />
            <Button modeLightDarkActive />
          </>
        )}
      </div>
    </div>
  );
};
