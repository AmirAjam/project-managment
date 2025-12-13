import type { Member } from "../member.types";

type MemberCardProps = {
  memberDetails: Member;
};

const MemberCard = ({ memberDetails }: MemberCardProps) => {
  return (
    <div className="border-1 dark:border-dark-border border-gray-300 p-3 rounded-lg">
      <div className="w-fit rounded-lg flex items-center">
        {memberDetails.image ? (
          <img
            src="../public/images/user/user.jpg"
            className="size-8.5 rounded-sm"
            alt="user"
          />
        ) : (
          <img
            src="../public/images/user/user.jpg"
            className="size-8.5 rounded-sm"
            alt="user"
          />
        )}
        <span className="mr-2 text-sm">{memberDetails.fullname}</span>
      </div>
    </div>
  );
};

export default MemberCard;
