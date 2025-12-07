import LoginInput from "./LoginInput";

const LoginFormItems = [{ id: "1", placeholder: "نام کاربری" }];

const LoginForm = () => {
  return (
    <form className="mt-8">
      {LoginFormItems.map((item) => (
        <LoginInput key={item.id} {...item} />
      ))}
    </form>
  );
};

export default LoginForm;
