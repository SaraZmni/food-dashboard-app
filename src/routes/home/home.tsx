import { FC } from "react";
import Banner from "@components/general/layouts/banner/banner";
import Card from "@components/card/card";
import { Tabs, Tab } from "@components/general/ui-kit/Tabs/tabs";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FoodItem } from "@components/food-item";

const Home: FC = () => {
  const data = [
    { id: 1, pos: 1, name: "شنبه", date: "1402/01/01" },
    { id: 2, pos: 2, name: "یکشنبه", date: "1402/01/02" },
    { id: 3, pos: 3, name: "دوشنبه", date: "1402/01/03" },
    { id: 4, pos: 4, name: "سه شنبه", date: "1402/01/04" },
    { id: 5, pos: 5, name: "چهارشنبه", date: "1402/01/05" },
    { id: 6, pos: 6, name: "پنج شنبه", date: "1402/01/06" },
    { id: 7, pos: 7, name: "جمعه", date: "1402/01/07" },
  ];
  interface CardType {
    id: number;
    pos: number;
    name: string;
    date: string;
  }
  return (
    <>
      <Banner />

      <div className="flex justify-end my-20 mx-10 font-vazir">
        {/* <h1 className="text-xl my-1 mx-auto">انتخاب زمان</h1> */}

        <div className="relative w-1/12 h-6 my-2 text-xl mx-auto flex items-center justify-center">
          {/* <div className="absolute right-0 w-3 h-60 bg-red-700 top-1/2 transform -translate-y-1/2"></div> */}
          انتخاب زمان
          <div className="absolute right-0 w-1/2 h-1.5 bg-secondary -bottom-3 transform -translate-x-1/2"></div>
        </div>

        <div className="flex space-x-3">
          {" "}
          <div
            className="w-10 h-10 text-2xl flex items-center justify-center cursor-pointer rounded-lg bg-primary hover:bg-secondary hover:text-white"
            // onClick={() => handleLeftClick()}
          >
            <FaAngleLeft />
          </div>
          <div
            className="w-10 h-10 text-2xl flex items-center justify-center cursor-pointer rounded-lg bg-primary hover:bg-secondary hover:text-white"
            // onClick={() => handleRightClick()}
          >
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-10">
        {data.map((item: CardType) => (
          <Card
            key={item.id}
            name={item.name}
            pos={item.pos}
            date={item.date}
          />
        ))}
      </div>

      {/*------------------------------ Tabs -----------------------------*/}
      <div className="flex justify-between mx-10 my-32 font-vazir">
        <div className=" w-3/4">
          <Tabs>
            <Tab label="شام">
              <div className="py-4">
                <h2 className="text-lg font-medium mb-2">Tab 1 Content</h2>
                <FoodItem />
              </div>
            </Tab>
            <Tab label="ناهار">
              <div className="py-4">
                <h2 className="text-lg font-medium mb-2">Tab 2 Content</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                  harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                  quia. Quo neque error repudiandae fuga? Ipsa laudantium
                  molestias eos sapiente officiis modi at sunt excepturi
                  expedita sint? Sed quibusdam recusandae alias error harum
                  maxime adipisci amet laborum.
                </p>
              </div>
            </Tab>
            <Tab label="صبحانه">
              <div className="py-4">
                <h2 className="text-lg font-medium mb-2">Tab 3 Content</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil, eveniet aliquid culpa
                  officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                  harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                  quia. Quo neque error repudiandae fuga? Ipsa laudantium
                  molestias eos sapiente officiis modi at sunt excepturi
                  expedita sint? Sed quibusdam recusandae alias error harum
                  maxime adipisci amet laborum.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className="relative w-1/5 h-6 my-2 text-xl mx-auto text-center">
          مشاهده و سفارش غذا
          <div className="absolute right-0 w-1/2 h-1.5 bg-secondary -bottom-3 transform -translate-x-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
