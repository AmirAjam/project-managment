import { Link, NavLink } from "react-router";
import navbarItems from "./navbarItem";
import { useState } from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const MobileNavbar = () => {
  const [cout, setCount] = useState(1);

  return (
    <nav
      className="dark:bg-dark dark:border-0 border-gray-300 border-t fixed bottom-0 inset-x-0 h-15
       sm:hidden"
      dir="ltr"
    >
      <ul
        className={`flex justify-between items-center text-sm absolute bottom-0 inset-x-0 p-2 duration-500
            ${cout !== 1 ? "-left-155 right-155" : "left-0"}`}
      >
        {navbarItems.slice(0, 4).map((item) => (
          <li key={item.id} className=" ">
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex items-center flex-col gap-0.5 ${
                  isActive
                    ? "text-primary-color active"
                    : "text-gray-500 dark:text-gray-300"
                }`
              }
            >
              <item.icon size={18} />
              {item.title}
            </NavLink>
          </li>
        ))}
        <li
          onClick={() => setCount(2)}
          className="flex items-center justify-center flex-col gap-0.5 text-primary-color"
        >
          <HiOutlineChevronDoubleRight size={18} />
          <span className="mr-1">بعدی</span>
        </li>
      </ul>

      <ul
        className={`flex justify-between items-center text-sm absolute bottom-0 inset-x-0 p-2 duration-500
            ${cout !== 2 ? "left-155 -right-155" : "left-0"}`}
      >
        <li
          onClick={() => setCount(1)}
          className="flex items-center flex-col gap-0.5 text-primary-color"
        >
          <HiOutlineChevronDoubleRight className="rotate-180" size={18} />
          <span className="mr-1">قبلی</span>
        </li>
        {navbarItems.slice(4, 8).map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex items-center flex-col gap-0.5 ${
                  isActive ? "text-primary-color active" : "text-gray-500"
                }`
              }
            >
              <item.icon size={18} />
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
