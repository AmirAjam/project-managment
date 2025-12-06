import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { HiOutlineShieldExclamation } from "react-icons/hi";
import { LuTimer } from "react-icons/lu";

const TodayStats = () => {
  const todayStatsItem = [
    { id: 1, title: "تسک‌های امروز", value: 10, icon: LuClipboardList },
    { id: 2, title: "انجام شده ", value: 2, icon: IoCheckmarkDoneSharp },
    {
      id: 3,
      title: "انجام نشده ",
      value: 7,
      icon: HiOutlineShieldExclamation,
    },
    { id: 4, title: "زمان کل امروز", value: "00:00", icon: LuTimer },
  ];
  return (
    <div className="flex justify-between mt-5 gap-1 text-xs lg:text-sm">
      {todayStatsItem.map((item) => (
        <div className="flex flex-col items-center gap-1">
          <div
            className="border dark:border-gray-600 border-gray-300 p-2 rounded-lg 
          text-gray-500 dark:text-gray-300 w-fit"
          >
            <item.icon size="22" />
          </div>
          <span className="">{item.title}</span>
          <span className="font-Vazirmatn-Bold">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default TodayStats;
