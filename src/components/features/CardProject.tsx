import { Bagde } from "./Badge";

type CardProjetProps = {
  namesBadge?: string[];
};

export const CardProjet = ({ namesBadge }: CardProjetProps) => {
  return (
    <div className="p-5 m-auto cardProjet">
      <div>
        <button className="group relative block h-64 sm:h-80 lg:h-80 w-96">
          <span className="rounded-lg absolute inset-0 card-absolute"></span>

          <div className="card-border rounded-lg relative flex h-full transform items-end transition-transform group-hover:-translate-x-3 group-hover:-translate-y-3">
            <div className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 w-full">
              <img
                className="object-cover object-center h-48 w-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
              <h2 className="mt-4 text-xl font-medium">Go around the world</h2>
              <Bagde namesBadge={namesBadge} />
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity top-[-10px] group-hover:absolute group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                Go around the world
              </h2>

              <p className="mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, praesentium voluptatem omnis atque culpa Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Cupiditate,
                praesentium voluptatem omnis atque culpa repellendus. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                praesentium voluptatem omnis atque culpa
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
