type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="font-Vazirmatn-Bold text-xl">{title}</h2>;
};

export default SectionTitle;
