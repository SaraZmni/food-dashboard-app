import { FC, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.styles.css";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
// import logo from "@static/images/favicon.png";
import { useOrderBox } from "store/order-box";
import { OrderBoxItem } from "store/order-box/types";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const foodItems = useOrderBox((store) => store.items);
  const totalItems = calculateTotalFoods(foodItems);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // navItems
  const navItems = [
    { path: "/", link: "خانه" },
    { path: "/dashboard", link: "داشبورد" },
    { path: "/login", link: "لاگین" },
    { path: "/contact", link: "تماس با ما" },
  ];
  return (
    <header className="text-white ">
      <nav className="px-4 py-1 max-w-7xl mx-auto flex justify-between items-center">
        {/* menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden font-vazir">
          <div className="flex items-center text-gray-700 hover:text-secondary transition relative">
            <div className="text-xl" onClick={() => navigate("/order")}>
              <FaBagShopping />
            </div>
            <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-secondary text-white text-xs">
              {totalItems}
            </span>
          </div>
          <button className="text-gray-800 px-2 py-1 text-sm rounded hover:text-secondary transition-all duration-200 ease-in">
            ثبت نام
          </button>
          <button className="bg-light text-secondary px-8 py-1 font-medium rounded hover:bg-secondary hover:text-white transition-all duration-200 ease-in">
            ساخت حساب کاربری
          </button>
        </div>

        {/* navitems for lg devices */}
        <ul className="md:flex gap-12 text-lg hidden font-vazir">
          {navItems.map(({ path, link }) => (
            <li className="text-gray-800 text-sm" key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Logo */}
        {/* <img src={logo} alt="" width={50} height={50} /> */}

        {/* mobile menu btn, display mobile screen */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/* menu items only for mobile */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-blue-950" key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

const calculateTotalFoods = (foodItems: OrderBoxItem[]) => {
  return foodItems.reduce((total, item) => total + item.quantity, 0);
};
export default Navbar;
