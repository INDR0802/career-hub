import { Link } from "react-router-dom";

let links = (
  <>
    <li>
      <a>Statistics</a>
    </li>
    <li>
      <a>Applied Jobs</a>
    </li>
    <li>
      <a>Blog</a>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 bg-white z-10">
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
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl font-extrabold">CareerHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6">
          Start Applying
        </a>
      </div>
    </div>
  );
};

export default Navbar;
