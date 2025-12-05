import { Link } from "react-router";
import navbarItems from "./navbarItem";

const DesktopNavbar = () => {
  return (
    <nav>
      <ul>
        {navbarItems.map((item) => (
          <li>
            <item.icon size={18} />
            <Link to={item.link}></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
