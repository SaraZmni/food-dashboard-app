import { FC } from "react";

type TitleProps = {
  titleName: string;
  width: number;
};

const Title: FC<TitleProps> = ({ titleName, width = 2 }) => {
  return (
    <div
      className={`relative w-1/${width} h-6 my-2 text-xl mx-auto text-center`}
    >
      {titleName}
      <div className="absolute right-0 w-1/2 h-1.5 bg-secondary -bottom-3 transform -translate-x-1/2"></div>
    </div>
  );
};
export default Title;
