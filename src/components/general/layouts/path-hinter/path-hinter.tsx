import { FC } from "react";
import { FaAngleLeft } from "react-icons/fa6";

const PathHinter: FC = () => {
  return (
    <div
      className="mb-4 flex rounded-lg border border-slate-200 bg-slate-50 px-5 py-3 text-slate-700 dark:border-slate-700 dark:bg-slate-800"
      aria-label="Breadcrumb"
      dir="rtl"
    >
      <ol className="inline-flex items-center space-x-1">
        <li>
          <div className="flex items-center">
            <a
              className="text-sm font-medium text-slate-700 hover:text-slate-400 dark:text-slate-400 dark:hover:text-white"
              href="/"
            >
              داشبورد
            </a>
            {/* <svg
              className="ml-1 h-6 w-6 text-slate-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg> */}
            <FaAngleLeft className="mx-2 h-4 w-4 text-slate-400" />
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-400 dark:hover:text-white">
              افزودن غذا
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
};
export default PathHinter;
