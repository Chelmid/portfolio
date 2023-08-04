export const CardProjet = () => {
  return (
    <div className="p-5 m-auto">
      <div>
        <button className="group relative block h-64 sm:h-80 lg:h-80 w-80">
          <span className="rounded-lg  absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="rounded-lg relative flex h-full transform items-end border-2  bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 ">
              <img
                className="object-cover object-center h-48 w-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
              <h2 className="mt-4 text-xl font-medium">Go around the world</h2>
              <h2 className="mt-4  font-medium ">Go around the world</h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                Go around the world
              </h2>

              <p className="mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, praesentium voluptatem omnis atque culpa
                repellendus.
              </p>

              <p className="mt-8 font-bold">Read more</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
