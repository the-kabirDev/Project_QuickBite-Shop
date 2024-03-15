import "../components/css/Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 fixed z-[1000]">
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
                <a>menu</a>
              </li>
              <li>
                <a>our special</a>
              </li>
              <li>
                <a>about us</a>
                <ul className="p-2">
                  <li>
                    <a>gallery</a>
                  </li>
                  <li>
                    <a>location</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">quickBite</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg font-bold">menu</a>
            </li>
            <li>
              <a className="text-lg font-bold">our special</a>
            </li>
            <li>
              <details>
                <summary className="text-lg font-bold">about us</summary>
                <ul className="p-2">
                  <li>
                    <a className="text-lg font-bold">gallery</a>
                  </li>
                  <li>
                    <a className="text-lg font-bold">location</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-lg font-bold">contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-md">sign in</a>
        </div>
      </div>
    </>
  );
};

export default Header;
