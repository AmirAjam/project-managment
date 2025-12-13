import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <section
      className="-mt-16 md:h-screen md:mt-0 md:flex items-center bg-center
    bg-[url(../public/images/login/desktop-shape-small.png)]"
    >
      <div className="md:hidden">
        <img
          src="../public/images/login/mobile-shape.png"
          className="hidden dark:block absolute inset-0 h-screen w-full"
          alt="background"
        />
        <img
          src="../public/images/login/mobile-shape-light.png"
          className="dark:hidden absolute inset-0 h-screen w-full"
          alt="background"
        />
      </div>

      <div
        className="container mt-[50vh] relative z-20 md:mt-0
        md:bg-[#5882C1]/50 rounded-lg md:py-10 md:w-1/3 md:backdrop-blur-sm md:text-white"
      >
        <h1 className="text-2xl font-Vazirmatn-Bold mr-1.5">ورود</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
