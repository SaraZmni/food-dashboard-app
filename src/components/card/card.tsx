import { FC } from "react";

interface CardProps {
  pos: number;
  name: string;
  date: string;
}

const Card: FC<CardProps> = ({ pos, name, date }) => {
  return (
    <div className="flex flex-col pt-8 w-52 h-50 md:p10 md:h-60 bg-primary items-center drop-shadow-md rounded-lg font-vazir hover:bg-secondary group transition cursor-pointer">
      <span className="w-20 h-20 rounded-full flex items-center justify-center bg-white text-gray-900 text-lg">
        {pos}
      </span>
      <h6 className="mt-4 group-hover:text-white"> {name}</h6>
      <span className="mt-3 text-xs group-hover:text-white">{date}</span>
    </div>
  );
};
export default Card;
