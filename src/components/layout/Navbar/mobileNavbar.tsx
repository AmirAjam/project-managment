import { Link } from "react-router";
import navbarItems from "./navbarItem";

const mobileNavbar = () => {
  return (
    <nav className="dark:bg-bg-dark">
      <ul>
        {navbarItems.map((item) => (
          <li>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default mobileNavbar;
