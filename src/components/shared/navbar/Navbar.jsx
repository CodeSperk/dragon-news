import { Link, NavLink } from "react-router-dom";
import defaultUser from "../../../assets/user.png";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>
  </>

  return (
    <div className="navbar pt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
          <IoMenu className="text-4xl text-[var(--clr-heading)] hover:text-[var(--clr-secondary)]"/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            
              {navLinks}
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="">
          <img src={defaultUser} alt="User PP" className="w-10 h-10 mr-2"/>
        </div>
        <Link to="/login"><button className="py-2 px-6 bg-[var(--clr-heading)] text-white rounded-md border-2 hover:border-[var(--clr-heading)] hover:bg-transparent hover:text-[var(--clr-heading)] font-semibold">Login</button></Link>

      </div>
    </div>
  );
};

export default Navbar;
