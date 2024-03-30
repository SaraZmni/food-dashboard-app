import { FC } from "react";

import { FaBowlFood } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";

const DashboardOffsetCards: FC = () => {
  return (
    <div>
      <div className="bannerFondo bg-blue-500 h-96 font-vazir"></div>

      <div className="-mt-64 ">
        <div className="w-full text-center">
          <p className="text-sm tracking-widest text-white">سامانه تغذیه</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          <div className="p-2 sm:p-10 text-center cursor-pointer">
            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-white hover:text-white hover:bg-secondary transition duration-500">
              <div className="flex flex-col items-center">
                <FaBowlFood />

                <div className="px-6 py-4">
                  <div className="space-y-5">
                    <div className="text-base font-semibold mb-2">لیست غذا</div>
                    <p className="text-sm">
                      شما می توانید لیست غذاهای سفارشی را ببینید
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 sm:p-10 text-center cursor-pointer">
            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-white text-slate-700 hover:bg-secondary hover:text-white transition duration-500">
              <div className="flex flex-col items-center">
                <FaCalendarDays />
                <div className="px-6 py-4">
                  <div className="space-y-5">
                    <div className="text-base font-semibold mb-2">
                      افزودن غذا
                    </div>
                    <p className="text-sm">
                      می توانید غذای جدید تعریف کرده و در سامانه مشاهده کنید
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-white text-slate-700 hover:bg-secondary hover:text-white transition duration-500">
              <div className="flex flex-col items-center">
                <FaAddressBook />

                <div className="px-6 py-4 ">
                  <div className="space-y-5">
                    <div className="text-base font-semibold  mb-2">
                      حساب کاربری
                    </div>
                    <p className="text-sm">
                      شما می توانید حساب کاربری خود را مشاهده و ویرایش کنید
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardOffsetCards;
