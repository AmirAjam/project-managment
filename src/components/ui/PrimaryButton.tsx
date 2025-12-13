import type { ReactNode } from "react";

type pimaryButtonProps = {
  text: string;
  type?: "submit" | "reset" | "button";
  icon?: ReactNode;
};

const PrimaryButton = ({ text, type = "button", icon }: pimaryButtonProps) => {
  return (
    <button
      type={type}
      className="w-full text-gray-100 dark:text-gray-300 bg-primary-color py-1.5 rounded-lg 
      cursor-pointer duration-200 hover:bg-[#26478a] flex items-center justify-center gap-5"
    >
      {text}
      {icon && icon}
    </button>
  );
};

export default PrimaryButton;
