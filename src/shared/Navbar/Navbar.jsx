import logo from "/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto p-4 bg-transparent">
      <div className="navbar-start">
        <a>
          <img src={logo} alt="logo" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
