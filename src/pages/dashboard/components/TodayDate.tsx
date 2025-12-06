import { getTodayDateJalali } from "@/utils/utils";

const TodayDate = () => {
  return (
    <h2 className="font-Vazirmatn-Bold text-xl text-center pt-3">
      {getTodayDateJalali()}
    </h2>
  );
};

export default TodayDate;
