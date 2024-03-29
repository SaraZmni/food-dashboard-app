import { Table } from "@components/general/ui-kit/table";
import { FC } from "react";

const FoodTable: FC = () => {
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6 lg:p-8">
        <Table />
      </div>
    </div>
  );
};

export default FoodTable;
