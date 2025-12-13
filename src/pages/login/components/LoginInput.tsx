import { Controller, type Control } from "react-hook-form";

type LoginInputProps = {
  id: string;
  label: string;
  type: "text" | "password";
  autoFocus?: boolean;
  control: Control<any>;
  error?: string;
};

const LoginInput = ({
  id,
  label,
  type,
  autoFocus,
  error,
  control,
}: LoginInputProps) => {
  return (
    <Controller
      name={id}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <div className="relative text-sm mt-5 first:mt-0 md:text-gray-900">
          <input
            {...field}
            type={type}
            id={id}
            placeholder=" "
            autoFocus={autoFocus}
            className={`peer w-full md:bg-white py-3 px-2 mt-2 border border-gray-300 dark:border-gray-500 rounded-lg
              outline-none focus:border-primary-color bg-transparent
              ${error && "border-red-500!"}`}
          />

          <label
            htmlFor={id}
            className={`-top-2 text-xs text-primary-color bg-gray-300 dark:bg-dark p-1
            absolute cursor-text right-2 rounded-sm transition-all duration-200
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500
            peer-placeholder-shown:bg-transparent
            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary-color peer-focus:bg-gray-300 dark:peer-focus:bg-dark
            ${error ? "text-red-700!" : ""}`}
          >
            {label}
          </label>
        </div>
      )}
    />
  );
};

export default LoginInput;
