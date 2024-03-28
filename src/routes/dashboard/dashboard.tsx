import { FC, useState } from "react";
import AddFoods from "@components/add-foods/add-foods";
import FoodTable from "@components/food-table/food-table";
import Sidebar from "@components/general/layouts/sidebar/sidebar";
import { Sample } from "@components/sample";
import PathHinter from "@components/general/layouts/path-hinter/path-hinter";
import DashboardHeader from "@components/general/layouts/dashboard-header/dashboard-header";

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
      <main
        role="main"
        className="-ml-64 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0"
      >
        <DashboardHeader />
        <div className="p-7 text-2xl font-semibold flex-1 h-screen bg-slate-100 flex flex-grow flex-col">
          <PathHinter />
          {renderPages()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
