import Layout from "@/components/layout/Layout";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionTitle from "@/components/ui/SectionTitle";
import { MemberList } from "@/features/members";
import { HiOutlinePlus } from "react-icons/hi";

const MembersPage = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <SectionTitle title="اعضا" />
        <div className="w-36">
          <PrimaryButton text="افزودن عضو" icon={<HiOutlinePlus />} />
        </div>
      </div>
      <MemberList />
    </Layout>
  );
};

export default MembersPage;
