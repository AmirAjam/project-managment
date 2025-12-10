import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <section className="-mt-16">
      <img
        src="../public/images/login/mobile-shape.png"
        className="absolute inset-0 h-screen w-full"
        alt="backGround"
      />
      <div className="container mt-[50vh] relative z-20">
        <h1 className="text-2xl font-Vazirmatn-Bold mr-1.5">ورود</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
