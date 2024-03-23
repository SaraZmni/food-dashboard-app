import { FC, useState } from "react";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";

const Dashboard: FC = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "داشبورد", icon: <FaChartSimple />, gap: false },
    { title: "حساب کاربری", icon: <FaAddressBook />, gap: false },
    { title: "لیست غذا", icon: <FaBowlFood />, gap: true },
    { title: "افرودن غذا", icon: <FaCalendarDays />, gap: false },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? `w-64` : `w-20`
        } duration-300 relative h-screen bg-layout`}
      >
        <div
          className="absolute w-7 h-7 border-2  cursor-pointer -right-3 top-9  border-layout rounded-full text-center bg-white flex items-center justify-center"
          onClick={() => setOpen((prevState) => !prevState)}
        >
          {open ? <FaAngleLeft /> : <FaAngleRight />}
        </div>
        <ul className="font-vazir pt-6">
          {Menus.map((menu, index) => (
            <li
              className={`${
                open ? "w-10/12" : "w-2 justify-center"
              } w-10/12 text-white cursor-pointer text-md flex items-center mx-auto gap-x-4 hover:bg-crystal rounded-md px-5 py-3 ${
                menu.gap ? "mt-9" : " mt-2"
              }`}
              key={index}
            >
              <div>{menu.icon}</div>
              <span
                className={`text-sm ${
                  !open && "hidden"
                } origin-left duration-200`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home page</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
