import { FoodItem } from "@components/food/food-item";
import { FC } from "react";

const FoodList: FC = () => {
  return (
    <div className="py-4 flex justify-around my-8">
      <FoodItem />
      <FoodItem />
      <FoodItem />
    </div>
  );
};
export default FoodList;
