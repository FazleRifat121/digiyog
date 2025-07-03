import { NavLink } from "react-router";
import logo from "/logo.svg";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-800 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green-800 font-bold" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            isActive ? "text-green-800 font-bold" : ""
          }
        >
          Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive ? "text-green-800 font-bold" : ""
          }
        >
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink>Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar container mx-auto p-4 bg-transparent">
      <div className="navbar-start">
        <a>
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-4 text-xl">{links}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
