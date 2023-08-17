import { breakLine } from "../../utils/fonctionUtils";
import { Badge } from "./Badge";

type CardProjetProps = {
  namesBadge?: string[];
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
};

export const CardProjet = ({
  namesBadge = [],
  title = "",
  description = "",
  image = "",
  alt = "",
}: CardProjetProps) => {
  return (
    <div className="cardProjet py-8 px-10">
      <>
        <button className="group relative block h-96 w-96">
          <span className="rounded-lg absolute inset-0 card-absolute"></span>

          <div className="card-border rounded-lg relative flex h-full transform items-end transition-transform group-hover:-translate-x-4 group-hover:-translate-y-4 hover:h-96 transition duration-200 ease-linear">
            <div className="absolute top-0 p-4 transition-opacity group-hover:absolute group-hover:opacity-0 w-full">
              <img
                className="object-cover object-center h-60 w-full"
                src={image}
                alt={alt}
              />
              <h2 className="my-4 text-xl font-medium">{title}</h2>
              <Badge namesBadge={namesBadge} />
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity top-[-15px] group-hover:absolute group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h2>

              <div className="mt-4 text-none text-sm sm:text-base">
                {breakLine(description, ".", ["\n", "\n"])}
              </div>
            </div>
          </div>
        </button>
      </>
    </div>
  );
};
