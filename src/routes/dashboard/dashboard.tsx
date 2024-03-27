import { FC, useState } from "react";
import AddFoods from "@components/add-foods/add-foods";
import FoodTable from "@components/food-table/food-table";
import Sidebar from "@components/general/layouts/sidebar/sidebar";
import { Sample } from "@components/sample";
import PathHinter from "@components/general/layouts/path-hinter/path-hinter";

const Dashboard: FC = () => {
  const [activeId, setActiveId] = useState(0);

  const reciveActiveId = (id: number) => {
    setActiveId(id);
  };

  const renderPages = () => {
    switch (activeId) {
      case 0:
        return <Sample />;
      case 1:
        return <FoodTable />;
      case 2:
        return <AddFoods />;
      default:
        return;
    }
  };
  return (
    <div className="flex font-vazir">
      <Sidebar sendActiveId={reciveActiveId} />
      <div className="p-7 text-2xl font-semibold flex-1 h-screen bg-slate-100 flex flex-grow flex-col">
        <PathHinter />
        {renderPages()}
      </div>
    </div>
  );
};

export default Dashboard;
