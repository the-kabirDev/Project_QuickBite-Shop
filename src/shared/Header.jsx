import "../components/css/Header.css";
import { Link, NavLink } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>

              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-2xl ml-5">
            quickBite
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/menu" className="text-lg font-bold">
                Menu
              </NavLink>
            </li>

            <li>
              <summary className="text-lg font-bold">About us</summary>
            </li>
            <li>
              <a className="text-lg font-bold">Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <label htmlFor="cart-drawer" className="drawer-button">
            <i className="fa-solid fa-cart-shopping mr-5 text-2xl"></i>
          </label>

          {user ? (
            <>
              <button className="btn inline" onClick={signOut}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/sign-in"
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md animate-pulse text-md mr-12"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
