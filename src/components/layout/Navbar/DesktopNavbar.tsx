import { Link, NavLink } from "react-router";
import navbarItems from "./navbarItem";

const DesktopNavbar = () => {
  return (
    <div className="">
      <nav className="dark:bg-dark bg-gray-200 w-fit inset-y-0 top-18 bottom-6 sm:block hidden py-3 fixed rounded-lg px-4 overflow-y-auto">
        <ul className="text-sm ">
          {navbarItems.map((item) => (
            <li className="mt-6 first:mt-0 relative">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `group flex flex-col items-center gap-0.5 ${
                    isActive
                      ? "text-primary-color active"
                      : "text-gray-500 dark:text-gray-300"
                  }`
                }
              >
                <item.icon className="mx-auto" size={20} />
                {item.title}
                <span className="hidden group-[.active]:block absolute -right-4.5 bg-primary-color w-2 h-10 top-0 rounded-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
