import AddFoods from "@components/food/add-foods/add-foods";
import FoodTable from "@components/food/food-table/food-table";
import { FC, useState } from "react";

import { FaBowlFood } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";

const DashboardOffsetCards: FC = () => {
  const [componentToShowIndex, setComponentToShowIndex] = useState(-1);
  const dashboardCardData = [
    {
      title: "حساب کاربری",
      icon: <FaAddressBook />,
      description: "شما می توانید حساب کاربری خود را مشاهده و ویرایش کنید",
    },
    {
      title: "لیست غذا",
      icon: <FaBowlFood />,
      description: "شما می توانید لیست غذاهای سفارشی را ببینید",
    },
    {
      title: "افزودن غذا",
      icon: <FaCalendarDays />,
      description: "می توانید غذای جدید تعریف کرده و در سامانه مشاهده کنید",
    },
  ];

  const renderPages = () => {
    switch (componentToShowIndex) {
      case 1:
        return <FoodTable />;
      case 2:
        return <AddFoods />;
      default:
        return;
    }
  };

  return (
    <div>
      {componentToShowIndex === -1 && (
        <>
          <div className="bannerFondo bg-blue-400 h-96 font-vazir"></div>
          <div className="-mt-64 ">
            <div className="w-full text-center">
              <p className="text-sm tracking-widest text-white">سامانه تغذیه</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {dashboardCardData.map((card, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 sm:p-10 text-center cursor-pointer"
                    onClick={() => setComponentToShowIndex(index)}
                  >
                    <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-white hover:text-white hover:bg-secondary transition duration-500">
                      <div className="flex flex-col items-center">
                        {card.icon}
                        <div className="px-6 py-4">
                          <div className="space-y-5">
                            <div className="text-base font-semibold mb-2">
                              {card.title}
                            </div>
                            <p className="text-sm">{card.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {renderPages()}
    </div>
  );
};
export default DashboardOffsetCards;
