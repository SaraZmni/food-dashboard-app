import { FC } from "react";

const CreditCart: FC = () => {
  return (
    <div className="min-h-screen py-6 flex flex-col sm:py-12 border">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">Credit Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCart;
