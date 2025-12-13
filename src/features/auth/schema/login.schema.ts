import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("وارد کردن نام کاربری الزامی است.")
    .min(6, "نام کاربری یا رمزعبور وارد شده اشتباه می باشد."),

  password: yup
    .string()
    .required("وارد کردن رمزعبور الزامی می باشد.")
    .min(6, "نام کاربری یا رمزعبور وارد شده اشتباه می باشد."),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
