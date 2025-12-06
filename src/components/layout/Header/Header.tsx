import { Link } from "react-router";

import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi2";
import { useThemeStore } from "@/store/theme.store";

const Header = () => {
  const { toggleTheme } = useThemeStore();
  return (
    <header className="py-3 border-b dark:border-gray-600 border-gray-300 fixed inset-x-0">
      <div className="container flex justify-between items-center">
        <Link to="/">Logo</Link>
        <div className="flex items-center gap-4">
          <div onClick={toggleTheme} className="cursor-pointer">
            <FaRegMoon className="block dark:hidden" />
            <HiOutlineSun className="text-2xl dark:block hidden" />
          </div>
          <div className="cursor-pointer">
            <IoNotificationsOutline className="text-xl mt-0.5" />
          </div>
          <div className="cursor-pointer">
            <AiOutlineUser className="text-xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
