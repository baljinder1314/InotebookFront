import React from "react";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  let location = useLocation();

  return (
    <div className="absolute top-0 text-white z-10 w-full bg-black grid grid-cols-2 justify-center items-center grid-rows-1">
      <Link
        to="/app/notes"
        className={`text-center font-semibold text-2xl md:text-3xl ${
          location.pathname === "/app/notes" ? "bg-indigo-700" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/app/about"
        className={`text-center font-semibold text-2xl md:text-3xl ${
          location.pathname === "/app/about" ? "bg-indigo-700" : ""
        }`}
      >
        About
      </Link>
    </div>
  );
}

export default Navbar;
