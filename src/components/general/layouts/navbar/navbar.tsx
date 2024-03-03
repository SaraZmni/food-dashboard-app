import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.styles.css";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="text-white ">
      <nav className="px-4 py-2 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-900">
          Design <span className="text-orange-400">DK</span>
        </a>

        {/* navitems for lg devices */}
        <ul className="md:flex gap-12 text-lg hidden">
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

        {/* menu icons */}
        <div className="text-white lg:flex gap-4 items-center hidden ">
          <button className="text-gray-800 px-2 py-1 text-sm rounded hover:text-secondary transition-all duration-200 ease-in">
            Login
          </button>
          <button className="bg-light text-secondary px-8 py-1 font-medium rounded hover:bg-secondary hover:text-white transition-all duration-200 ease-in">
            Create Account
          </button>

          <div className="flex items-center text-gray-700 hover:text-secondary transition relative">
            <div className="text-xl">
              <FaBagShopping />
            </div>
            <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-secondary text-white text-xs">
              8
            </span>
          </div>
        </div>

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
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
