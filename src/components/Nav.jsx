import React, { useState } from "react";
import { navLinks } from "../constants";
import { FaFaceSmile } from "react-icons/fa6";
import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav
      id="navbar"
      className="w-[80%] fixed top-5 px-6 py-2 rounded-full flex justify-between items-center 
      bg-cream border-2 border-accentOrange-300 z-50 drop-shadow-lg"
    >
      <div className="m-2 text-accentOrange-300/70 min-w-max">
        <a
          href="/"
          className="flex items-center bg-gradient-to-r from-accentOrange-300 via-accentOrange-300/80 to-accentOrange-300/70 bg-clip-text
          font-young_serif text-3xl lowercase"
        >
          <span className="text-transparent">Linda V</span>
          <FaFaceSmile size="23" />
        </a>
      </div>

      <ul
        className="nav-items sm:flex hidden justify-between items-center list-none font-josefinsans text-accentOrange-300
          lowercase font-semibold gap-[0.8rem]"
      >
        {navLinks.map((link, i) => (
          <li
            key={link.id}
            className="nav-item text-center drop-shadow-md leading-3"
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 items-center justify-end text-accentOrange-300">
        <button
          onClick={() => {
            setMenuToggle(!menuToggle);
          }}
          className="menu-button"
        >
          <BiMenuAltRight size="25" />
        </button>
        <div
          className={`${menuToggle ? "flex" : "hidden"} 
          bg-cream rounded-3xl absolute top-[4.5rem] right-0 p-5 bg-opacity-90
          mx-4 border-accentOrange-300 border-[1px]`}
        >
          <ul
            className="list-none flex flex-col font-josefinsans
            lowercase font-semibold text-xl gap-3 text-center"
          >
            {navLinks.map((link, i) => (
              <li key={link.id} className="drop-shadow-md">
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
