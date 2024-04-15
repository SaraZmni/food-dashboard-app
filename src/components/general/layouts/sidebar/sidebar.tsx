import { FC, useState } from "react";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { FaBilibili } from "react-icons/fa6";

interface SidebarProps {
  sendActiveId: (id: number) => void;
}

const Sidebar: FC<SidebarProps> = ({ sendActiveId }) => {
  const [open, setOpen] = useState(true);
  const [activeId, setActiveId] = useState(0);
  const Menus = [
    { title: "داشبورد", icon: <FaChartSimple />, gap: false },
    { title: "لیست غذا", icon: <FaBowlFood />, gap: true },
    { title: "افرودن غذا", icon: <FaCalendarDays />, gap: false },
    { title: "حساب کاربری", icon: <FaAddressBook />, gap: false },
  ];
  return (
    <div
      className={`${
        open ? `w-64` : `w-20`
      } p-5 pt-8 duration-300 relative h-screen bg-layout`}
    >
      {/* Add Button */}
      <div
        className="absolute w-7 h-7 border-2  cursor-pointer -left-3 top-20  border-layout rounded-full text-center bg-white flex items-center justify-center"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        {open ? <FaAngleRight /> : <FaAngleLeft />}
      </div>
      {/* Title */}
      <div className="text-white flex justify-end gap-x-4 items-center">
        <h1
          className={`origin-left font-medium duration-300 ${
            !open && "scale-0"
          }`}
        >
          سامانه تغذیه
        </h1>
        <div>
          <FaBilibili className="text-3xl duration-500" />
        </div>
      </div>
      <ul className="pt-6">
        {Menus.map((menu, index) => (
          <li
            className={`${
              open ? "w-10/12" : "w-2 justify-center"
            } w-10/12 text-slate-100 hover:text-white active:bg-crystal cursor-pointer text-md flex justify-end items-center ${
              activeId === index ? "bg-crystal" : ""
            } mx-auto gap-x-4 hover:bg-crystal rounded-md px-5 py-3 ${
              menu.gap ? "mt-10" : " mt-2"
            }`}
            key={index}
            onClick={() => {
              sendActiveId(index), setActiveId(index);
            }}
          >
            <span
              className={`text-sm ${
                !open && "hidden"
              } origin-left duration-200`}
            >
              {menu.title}
            </span>
            <div>{menu.icon}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
