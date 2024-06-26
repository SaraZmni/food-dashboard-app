// import CreditCart from "@components/credit-cart/credit-cart";
import { FC } from "react";
import Order from "./components/order";
import { useOrderBox } from "store/order-box";

import { useNavigate } from "react-router-dom";

const OrderPanel: FC = () => {
  const navigate = useNavigate();

  const items = useOrderBox((state) => state.items);
  const totalPrice = useOrderBox((state) => state.invoice.totalPrice);
  const { removeOrderBoxItem } = useOrderBox((state) => state.actions);

  return (
    <>
      {/* <CreditCart />
      <div>{totalPrice}</div>
      {items.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })} */}

      <div className="container mx-auto mt-10 font-vazir" dir="rtl">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">لیست سفارشات</h1>
              <h2 className="font-semibold text-2xl">3 آیتم</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                جزییات سفارش
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                تعداد
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                قیمت
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                جمع کل
              </h3>
            </div>
            {items.map((item) => (
              <Order
                key={item.id}
                {...item}
                onRemoveItem={() => removeOrderBoxItem(item)}
              />
            ))}

            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
              onClick={() => navigate("/")}
            >
              بازگشت به صفحه سفارشات
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
            </a>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              خلاصه سفارشات
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase"> 3 آیتم</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                استاندارد خرید
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                کد تخفیف
              </label>
              <input
                type="text"
                id="promo"
                placeholder="لطفا کد خود را وارد کنید"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              تغییر
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>مجموع هزینه</span>
                <span>{totalPrice}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                تسویه حساب
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderPanel;
