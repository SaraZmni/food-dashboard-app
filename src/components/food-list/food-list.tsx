import { FoodItem } from "@components/food-item";
import { FC } from "react";

const FoodList: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
      <FoodItem />
    </div>
  );
};
export default FoodList;
