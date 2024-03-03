import { FC } from "react";

const Banner: FC = () => {
  return (
    <div className="grid grid-cols-3 bg-primary mt-3 rounded-lg md:size-auto mx-8">
      <div></div>
      <div className="row-auto flex flex-col justify-center items-center">
        <h3 className="tracking-wide text-orange-600 text-lg ml-6">
          $0 delivery for 30 days!&nbsp;&nbsp;&nbsp;🎉
        </h3>
        <h5 className="text-xs text-gray-500">
          $0 delivery fee for orders over $10 for 30 days
        </h5>
      </div>
      <div className="flex justify-end items-end pb-4 pr-4">
        <a className="font-hairline text-orange-500" href="">
          Learn More <i className="ml-3 fa fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};
export default Banner;
