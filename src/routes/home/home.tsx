import { FC } from "react";
import Banner from "@components/general/layouts/banner/banner";
import { Tabs, Tab } from "@components/general/ui-kit/tabs/tabs";

import { FoodList } from "@components/food-list";
import { Slider } from "@components/general/ui-kit/slider";
import Title from "@components/general/ui-kit/title/title";
// import OrderPanel from "@components/order-panel/order.panel";

const Home: FC = () => {
  return (
    <div className="flex font-vazir">
      <main
        role="main"
        className="flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0"
      >
        {" "}
        <Banner />
        <Slider />
        {/*------------------------------ Tabs -----------------------------*/}
        <div className="flex flex-row-reverse justify-between mx-10 mt-32 font-vazir">
          {/* Title */}
          <Title titleName={"مشاهده و سفارش غذا"} width={5} />
          <div className="w-3/4">
            <Tabs>
              <Tab label="شام">
                <FoodList />
              </Tab>
              <Tab label="ناهار">
                <FoodList />
              </Tab>
              <Tab label="صبحانه">
                <FoodList />
              </Tab>
            </Tabs>
          </div>
        </div>
      </main>
      <aside className="sticky top-0 h-screen border">
        <OrderPanel />
      </aside>
    </div>
  );
};

export default Home;
