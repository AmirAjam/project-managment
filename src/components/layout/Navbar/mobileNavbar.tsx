import { Link } from "react-router";
import navbarItems from "./navbarItem";
import { useState } from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const MobileNavbar = () => {
  const [cout, setCount] = useState(1);

  return (
    <nav className="dark:bg-bg-dark fixed bottom-0 inset-x-0 h-14" dir="ltr">
      <ul
        className={`flex justify-between items-center text-sm absolute bottom-0 inset-x-0 p-2 duration-500
            ${cout !== 1 ? "-left-80 right-80" : "left-0"}`}
      >
        {navbarItems.slice(0, 4).map((item) => (
          <li key={item.link} className="flex items-center flex-col gap-0.5 ">
            <item.icon size={18} />
            <Link to={item.link}>{item.title}</Link>
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
            ${cout !== 2 ? "left-80 -right-80" : "left-0"}`}
      >
        <li
          onClick={() => setCount(1)}
          className="flex items-center flex-col gap-0.5 text-primary-color"
        >
          <HiOutlineChevronDoubleRight className="rotate-180" size={18} />
          <span className="mr-1">قبلی</span>
        </li>
        {navbarItems.slice(4, 8).map((item) => (
          <li key={item.link} className="flex items-center flex-col gap-0.5">
            <item.icon size={18} />
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
