import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .min(6, "ایمیل یا نام کاربری وارد شده اشتباه می باشد.")
    .required("وارد کردن نام کاربری الزامی است."),

  password: yup
    .string()
    .min(6, "نام کاربری یا رمزعبور وارد شده اشتباه می باشد.")
    .required("وارد کردن رمزعبور الزامی می باشد."),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
