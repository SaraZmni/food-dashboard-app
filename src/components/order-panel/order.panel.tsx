import CreditCart from "@components/credit-cart/credit-cart";
import { FC } from "react";
import { useOrderBox } from "store/order-box";

const OrderPanel: FC = () => {
  const totalPrice = useOrderBox((state) => state.invoice.totalPrice);
  const items = useOrderBox((state) => state.items);

  return (
    <>
      <CreditCart />
      <div>{totalPrice}</div>
      {items.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </>
  );
};
export default OrderPanel;
