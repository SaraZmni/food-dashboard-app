import { FC, useState } from "react";
import AddFoods from "@components/food/add-foods/add-foods";
import FoodTable from "@components/food/food-table/food-table";
import Sidebar from "@components/general/layouts/sidebar/sidebar";
// import { Sample } from "@components/sample";
import PathHinter from "@components/general/layouts/path-hinter/path-hinter";
import EditProfile from "@components/edit-profile/edit-profile";
import DashboardHeader from "@routes/dashboard/components/dashboard-header/dashboard-header";
import DashboardOffsetCards from "./components/dashboard-offset-cards/dashboard-offset-cards";

const Dashboard: FC = () => {
  const [activeId, setActiveId] = useState(0);

  const reciveActiveId = (id: number) => {
    setActiveId(id);
  };

  const renderPages = () => {
    switch (activeId) {
      case 0:
        // return <Sample />;
        return <DashboardOffsetCards />;
      case 1:
        return <FoodTable />;
      case 2:
        return <AddFoods />;
      case 3:
        return <EditProfile />;
      default:
        return;
    }
  };
  return (
    <div className="flex font-vazir">
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
      <aside className="sticky top-0 h-screen">
        <Sidebar sendActiveId={reciveActiveId} />
      </aside>
    </div>
  );
};

export default Dashboard;
