import { FC } from "react";

const DashboardHeader: FC = () => {
  return (
    <header
      data-controller="top-nav"
      className="z-10 bg-white px-4 py-3 drop-shadow-sm"
    >
      <div className="flex flex-row items-center">
        <div className="mr-auto hidden md:flex">
          <div className="relative">
            <a
              data-target="top-nav.button"
              data-action="top-nav#toggleMenu"
              href="#"
              className="flex flex-row items-center"
            >
              <span className="flex flex-col rounded-full border bg-slate-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 flex flex-col">
                <span className="w-20 truncate font-semibold leading-none tracking-wide">
                  ME
                </span>
              </span>
            </a>
          </div>
        </div>
        <form action="#">
          <div className="relative hidden md:flex">
            <div className="absolute right-2 top-0 inline-flex h-full w-10 items-center justify-center text-slate-400">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            <input
              dir="rtl"
              id="search"
              type="text"
              name="search"
              className="h-10 w-full rounded-lg mr-2 border-2 pl-4 pr-10 text-sm placeholder-slate-400 focus:border-slate-400 focus:outline-none sm:text-base"
              placeholder="جستجو ..."
            />
          </div>
        </form>
      </div>
    </header>
  );
};
export default DashboardHeader;
