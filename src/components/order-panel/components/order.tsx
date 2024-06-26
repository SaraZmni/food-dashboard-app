import { FoodItemType } from "@components/food/food-item/food-item-type";
import { FC } from "react";

interface OrderProps extends FoodItemType {
  quantity: number;
  onRemoveItem: () => void;
}

const Order: FC<OrderProps> = ({
  imageSrc,
  imageAlt,
  title,
  price,
  meal,
  quantity,
  onRemoveItem,
}) => {
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5 p1-4">
        <div className="w-28">
          <img className="h-24" src={imageSrc} alt={imageAlt ?? ""} />
        </div>
        <div className="flex flex-col justify-between mr-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-red-500 text-xs">{meal}</span>
          <button
            className="font-semibold hover:text-red-500 text-gray-500 text-xs text-right w-10"
            onClick={() => onRemoveItem()}
          >
            حذف
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={quantity}
        />

        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${quantity}
      </span>
    </div>
  );
};
export default Order;
