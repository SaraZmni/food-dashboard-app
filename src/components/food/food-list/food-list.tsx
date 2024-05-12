import { FC } from "react";
import { FoodItem } from "@components/food/food-item";
import foodImg from "@static/images/tumbnail/food.png";
import { useOrderBox } from "store/order-box";

const Foods = [
  {
    id: 1,
    title: "قرمه سبزی",
    meal: "شام",
    imageSrc: foodImg,
    imageAlt: "قرمه سبزی",
    price: 2000,
  },
  {
    id: 2,
    title: "قرمه سبزی",
    meal: "شام",
    imageSrc: foodImg,
    imageAlt: "قرمه سبزی",
    price: 4000,
  },
  {
    id: 3,
    title: "قرمه سبزی",
    meal: "شام",
    imageSrc: foodImg,
    imageAlt: "قرمه سبزی",
    price: 1000,
  },
];

const FoodList: FC = () => {
  const { addOrderBoxItem } = useOrderBox((store) => store.actions);

  return (
    <div className="py-4 flex justify-around my-8">
      {Foods.map((food) => (
        <FoodItem
          key={food.id}
          {...food}
          addOrderBoxItem={() => addOrderBoxItem(food)}
        />
      ))}
    </div>
  );
};
export default FoodList;
