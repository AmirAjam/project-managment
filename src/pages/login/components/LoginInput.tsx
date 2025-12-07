type LoginInputProps = {
  id: string;
  placeholder: string;
};

const LoginInput = ({ placeholder, id }: LoginInputProps) => {
  return (
    <div className="text-sm">
      <label htmlFor={id} className="block pr-1.5">
        {placeholder}
      </label>
      <input
        type="text"
        id={id}
        className="outline-0 w-full border dark:border-primary-color border-gray-300 p-2 
        rounded-lg mt-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default LoginInput;
