import { FC } from "react";

import Card from "@components/card/card";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import Title from "../title/title";

interface CardType {
  id: number;
  pos: number;
  name: string;
  date: string;
}

const Slider: FC = () => {
  const data = [
    { id: 1, pos: 1, name: "شنبه", date: "1402/01/01" },
    { id: 2, pos: 2, name: "یکشنبه", date: "1402/01/02" },
    { id: 3, pos: 3, name: "دوشنبه", date: "1402/01/03" },
    { id: 4, pos: 4, name: "سه شنبه", date: "1402/01/04" },
    { id: 5, pos: 5, name: "چهارشنبه", date: "1402/01/05" },
    { id: 6, pos: 6, name: "پنج شنبه", date: "1402/01/06" },
    { id: 7, pos: 7, name: "جمعه", date: "1402/01/07" },
  ];

  return (
    <>
      <div className="flex justify-end my-20 mx-10 font-vazir">
        <Title titleName={"انتخاب زمان"} width={12} />

        <div className="flex space-x-3">
          {" "}
          <div
            className="w-10 h-10 text-2xl flex items-center justify-center cursor-pointer rounded-lg bg-primary hover:bg-secondary hover:text-white"
            // onClick={() => handleLeftClick()}
          >
            <FaAngleLeft />
          </div>
          <div
            className="w-10 h-10 text-2xl flex items-center justify-center cursor-pointer rounded-lg bg-primary hover:bg-secondary hover:text-white"
            // onClick={() => handleRightClick()}
          >
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-10">
        {data.map((item: CardType) => (
          <Card
            key={item.id}
            name={item.name}
            pos={item.pos}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
};
export default Slider;
