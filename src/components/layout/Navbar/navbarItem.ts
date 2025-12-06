import {
  HiOutlineSquares2X2,
  HiOutlineSquaresPlus,
  HiOutlineUsers,
  HiOutlineCalendarDateRange,
} from "react-icons/hi2";
import { MdAddTask } from "react-icons/md";
import { TbChartHistogram } from "react-icons/tb";
import { BsEmojiSmile } from "react-icons/bs";
import { LuTimer } from "react-icons/lu";

const navbarItems = [
  { id: 1, title: "داشبورد", link: "/", icon: HiOutlineSquares2X2 },
  { id: 2, title: "تسک‌ها", link: "/tasks", icon: MdAddTask },
  { id: 3, title: "پروژه‌ها", link: "/projects", icon: HiOutlineSquaresPlus },
  { id: 4, title: "تایمر", link: "/timers", icon: LuTimer },
  { id: 5, title: "ایشیو", link: "/issue", icon: BsEmojiSmile },
  { id: 6, title: "گزارش", link: "/report", icon: TbChartHistogram },
  { id: 7, title: "اعضا", link: "/members", icon: HiOutlineUsers },
  {
    id: 8,
    title: "تقویم",
    link: "/calendar",
    icon: HiOutlineCalendarDateRange,
  },
];

export default navbarItems;
