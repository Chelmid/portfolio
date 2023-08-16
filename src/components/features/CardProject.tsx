import { Badge } from "./Badge";

type CardProjetProps = {
  id?: string;
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
    <div className="p-5 m-auto cardProjet">
      <div>
        <button className="group relative block h-64 sm:h-80 lg:h-80 w-96">
          <span className="rounded-lg absolute inset-0 card-absolute"></span>

          <div className="card-border rounded-lg relative flex h-full transform items-end transition-transform group-hover:-translate-x-3 group-hover:-translate-y-3">
            <div className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 w-full">
              <img
                className="object-cover object-center h-48 w-full"
                src={image}
                alt={alt}
              />
              <h2 className="mt-4 text-xl font-medium">{title}</h2>
              <Badge namesBadge={namesBadge} />
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity top-[-10px] group-hover:absolute group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h2>

              <p className="mt-4 text-sm sm:text-base">{description}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
