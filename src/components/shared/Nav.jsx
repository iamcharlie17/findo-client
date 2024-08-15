import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Nav = () => {
  const { user, loading, logout } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to={"/products"}>
        <li>
          <a>Products</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar container shadow-lg bg-transparent">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Findo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex md:gap-8 gap-2 mx-2">
            <Link to={"/my-cart"}>My Cart</Link>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
                My Account
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <button onClick={()=> logout()}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="py-2 px-4 bg-[#99A2C4] text-white font-semibold rounded-md"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
