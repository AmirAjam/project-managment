import type { Member } from "../member.types";
import MemberCard from "./MemberCard";

const MemberList = () => {
  const members: Member[] = [
    {
      username: "",
      fullname: "امیرحسین عجم",
      image: "string",
      role: "string",
    },
    {
      username: "",
      fullname: "مهدی دهقان",
      role: "string",
    },
  ];
  return (
    <section className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((item) => (
        <MemberCard memberDetails={item} />
      ))}
    </section>
  );
};

export default MemberList;
