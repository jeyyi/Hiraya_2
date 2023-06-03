import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-200 border shadow-sm">
    <div className="navbar-start">
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle"
        htmlFor="my-drawer-2"
      >
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
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      <a className="btn btn-ghost normal-case text-xl" href="/">
        Dashboard
      </a>
    </div>
    <div className="navbar-end">
    <div className="badge badge-lg">₱ 000,000</div>
      <button className="btn btn-ghost btn-circle">
        <a href="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
             strokeLinecap="round"
             strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </a>
      </button>
    </div>
  </div>
  );
}

export default Navbar;
