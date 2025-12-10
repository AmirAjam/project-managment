import PrimaryButton from "@/components/ui/PrimaryButton";
import LoginInput from "./LoginInput";
import {
  loginSchema,
  type LoginFormData,
} from "@/features/auth/schema/login.schema";
import { useForm, type FieldError } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginFormItems = [
  {
    id: "email",
    label: "نام کاربری",
    type: "text",
  },
  {
    id: "password",
    label: "رمز عبور",
    type: "password",
  },
] as const;

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  const onError = (errors: FieldError<LoginFormData>) => {
    console.log("Err => ", errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="mt-6">
      {LoginFormItems.map((item, index: number) => (
        <LoginInput
          key={item.id}
          {...item}
          control={control}
          error={errors[item.id]?.message}
          autoFocus={index === 1 ? true : false}
        />
      ))}
      <div className="mt-8 w-24">
        <PrimaryButton type="submit" text="ورود" />
      </div>
    </form>
  );
};

export default LoginForm;
