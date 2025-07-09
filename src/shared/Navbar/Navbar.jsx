import { Link } from "react-router";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto p-4 bg-transparent">
      <div className="navbar-start">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
