import { getTodayDateJalali } from "@/utils/utils";

const TodayDate = () => {
  return (
    <h2 className="font-Vazirmatn-Bold text-xl text-center md:text-3xl">
      {getTodayDateJalali()}
    </h2>
  );
};

export default TodayDate;
