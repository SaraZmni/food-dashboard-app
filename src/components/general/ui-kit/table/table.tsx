import { FC } from "react";

const Table: FC = () => {
  return (
    <div className="mt-8 flex flex-col" dir="rtl">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-slate-300">
              <thead className="bg-slate-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-slate-900 sm:pl-6"
                  >
                    نام غذا
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-slate-900 sm:pl-6"
                  >
                    تاریخ سفارش
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-slate-900 sm:pl-6"
                  >
                    وعده غذایی
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-right text-sm font-semibold text-slate-900"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 sm:pr-6">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="font-medium text-slate-900">قرمه سبزی</div>
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex flex-col items-start">
                      <div className="font-medium text-slate-900">سه شنبه</div>
                      <div className="text-slate-500">سیزده فروردین 20:30</div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex flex-col items-start">
                      <div className="font-medium text-slate-900">ناهار</div>
                    </div>
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a
                      className="text-blue-600 hover:text-blue-900"
                      href="/trips/1/edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>

                      <span className="sr-only">, Edit </span>
                    </a>
                  </td>
                  <td className="relative whitespace-nowrap py-4 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a
                      className="text-rose-600 hover:text-rose-900"
                      data-turbo-method="delete"
                      data-turbo-confirm="Are you sure?"
                      href="/trips/1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>

                      <span className="sr-only">, Delete</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
