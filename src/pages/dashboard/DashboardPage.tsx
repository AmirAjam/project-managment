import Layout from "@/components/layout/Layout";
import TodayDate from "./components/TodayDate";
import TodayStats from "./components/TodayStats";

const DashboardPage = () => {
  return (
    <>
      <Layout>
        <div className="md:flex gap-5 items-center">
          <div className="md:w-1/2">
            <TodayDate />
          </div>

          <div className="md:w-1/2">
            <TodayStats />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardPage;
