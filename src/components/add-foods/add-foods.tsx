import { FC } from "react";

const AddFoods: FC = () => {
  return (
    <div className="rounded-lg bg-white shadow font-vazir">
      <section className="max-w-4xl p-6 mx-auto dark:bg-gray-800 mt-2">
        <h1 className="text-xl font-bold text-sm font-medium text-slate-700  dark:text-sm font-medium text-slate-700">
          افزودن غذا
        </h1>

        <form action="">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
                htmlFor="username"
              >
                نام غذا
              </label>
              <input
                id="username"
                type="text"
                className="w-full h-10 mt-2 pl-5 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                آدرس ایمیل
              </label>
              <input
                id="emailAddress"
                type="email"
                className=" w-full h-10 mt-2 pl-5 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                غذا
              </label>
              <input
                id="emailAddress"
                type="email"
                className=" w-full h-10 mt-2 pl-5 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                انتخاب وعده غذایی
              </label>
              <div className="space-y-4 -mt-2 max-lg:mt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md bg-secondary text-white text-sm tracking-wider font-medium outline-none border-2 border-secondary mr-4"
                >
                  وعده صبحانه
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-md bg-transparent text-gray-400 text-sm tracking-wider font-medium outline-none border-2 border-gray-300 mr-4"
                >
                  وعده ناهار
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-md bg-transparent text-gray-400 text-sm tracking-wider font-medium outline-none border-2 border-gray-300"
                >
                  وعده شام
                </button>
              </div>
            </div>

            <div>
              <label
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
                htmlFor="password"
              >
                رمز عبور
              </label>
              <input
                id="password"
                type="password"
                className=" w-full h-10 mt-2 pl-5 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                تایید رمز عبور
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                className=" w-full h-10 mt-2 pl-5 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                انتخاب غذا
              </label>
              <select className="block w-full pl-5 h-10 mt-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>قرمه سبزی</option>
                <option>قیمه</option>
                <option>جوجه کباب</option>
                <option>کباب کوبیده</option>
              </select>
            </div>
            <div>
              <label
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                انتخاب تاریخ
              </label>
              <input
                id="date"
                type="date"
                className=" w-full h-10 mt-2 pl-5 pr-4 text-gray-600 bg-white border text-sm placeholder-slate-400 border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                توضیحات
              </label>
              <textarea
                id="textarea"
                className="block w-full px-4 py-2 h-36 max-h-36 min-h-36 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label className="block mt-2 text-sm font-medium text-sm font-medium text-slate-700">
                انتخاب تصویر
              </label>
              <div className="mt-3 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-sm font-medium text-slate-700"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-sm font-medium text-slate-700">
                      or drag and drop
                    </p>
                  </div>
                  <p className="text-xs text-sm font-medium text-slate-700">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-10">
            <button className="hover:shadow-form w-full rounded-md bg-success py-3 px-8 text-center font-semibold text-sm font-medium text-white outline-none">
              ذخیره
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddFoods;
