type pimaryButtonProps = {
  text: string;
  type: "submit" | "reset" | "button";
};

const PrimaryButton = ({ text, type }: pimaryButtonProps) => {
  return (
    <button
      type={type}
      className="w-full bg-primary-color py-1 rounded-lg cursor-pointer duration-200 hover:bg-[#26478a]"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
