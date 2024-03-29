import { FC } from "react";

const DashboardHeader: FC = () => {
  return (
    <header
      data-controller="top-nav"
      className="z-10 bg-white px-4 py-3 drop-shadow-sm"
    >
      <div className="flex flex-row items-center">
        <form action="#">
          <div className="relative hidden md:flex">
            <div className="absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center text-slate-400">
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
              id="search"
              type="text"
              name="search"
              className="h-10 w-full rounded-lg border-2 pl-10 pr-4 text-sm placeholder-slate-400 focus:border-slate-400 focus:outline-none sm:text-base"
              placeholder="Search..."
            />
          </div>

          <div className="flex md:hidden">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center border-transparent"
            >
              <svg
                className="h-6 w-6 text-slate-500"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </a>
          </div>
        </form>

        <div className="ml-auto hidden md:flex">
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
            <div
              data-target="top-nav.menu"
              data-transition-enter="transition ease-out duration-100"
              data-transition-enter-start="transform opacity-0 scale-95"
              data-transition-enter-end="transform opacity-100 scale-100"
              data-transition-leave="transition ease-in duration-75"
              data-transition-leave-start="transform opacity-100 scale-100"
              data-transition-leave-end="transform opacity-0 scale-95"
              className="absolute right-0 mt-2 hidden w-56 origin-top-right divide-y divide-slate-100 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="p-1" role="none">
                <a
                  className="block rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-200"
                  role="menuitem"
                  href="/users/edit"
                >
                  Account Settings
                </a>
                <a
                  href="#"
                  className="block rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-200"
                  role="menuitem"
                  id="menu-item-0"
                >
                  Integrations
                </a>
              </div>
              <div className="p-1" role="none">
                <a
                  role="menuitem"
                  className="block rounded-md px-4 py-2 text-sm text-slate-700 hover:bg-slate-200"
                  data-turbo-method="delete"
                  href="/users/sign_out"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          data-action="top-nav#toggleSmallMenu"
          className="focus:shadow-outline ml-auto flex rounded-lg focus:outline-none md:hidden"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
            <path
              data-target="top-nav.openIcon"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              data-target="top-nav.closeIcon"
              className="hidden"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
export default DashboardHeader;
