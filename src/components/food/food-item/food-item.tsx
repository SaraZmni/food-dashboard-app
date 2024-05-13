import { FC } from "react";
// import food from "@static/images/tumbnail/food.png";
import { FoodItemType } from "./food-item-type";

interface FoodItemProps extends FoodItemType {
  addOrderBoxItem: () => void;
}

const FoodItem: FC<FoodItemProps> = ({
  title,
  meal,
  imageSrc,
  imageAlt,
  price,
  addOrderBoxItem,
}) => {
  console.log("addOrderBoxItem", addOrderBoxItem);
  return (
    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative w-1/4">
      <span className="bg-red-100 border border-secondary rounded-full text-secondary text-sm poppins px-4 py-1 inline-block mb-4 ">
        {meal}
      </span>
      <img
        className="w-64 mx-auto transform transition duration-300 hover:scale-105"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-gray-900 poppins text-lg">{title}</h1>
        <p className="text-gray-500 poppins text-sm text-center">
          توضیحات
          {/* {description.slice(0, 50)} */}
        </p>
        <h2 className="text-gray-900 poppins text-2xl font-bold">{price}</h2>
        <button
          className="bg-secondary text-white text-sm px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
          onClick={() => addOrderBoxItem()}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
