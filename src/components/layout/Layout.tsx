import Header from "@/components/layout/Header/Header";
import DesktopNavbar from "@/components/layout/Navbar/DesktopNavbar";
import MobileNavbar from "@/components/layout/Navbar/MobileNavbar";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="container">
        <DesktopNavbar />
        <div className="mt-18 mx-auto sm:mr-24 md:mr-48!">{children}</div>
      </div>
      <MobileNavbar />
    </>
  );
};

export default Layout;
