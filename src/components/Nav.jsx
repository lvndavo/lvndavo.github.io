import React, { useState } from "react";
import { navLinks, HamburgerIcon } from "../constants";
import logo from "../assets/logo.png";

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav
      className="w-[95%] fixed top-5 px-6 py-2 rounded-xl flex justify-between bg-green500 
    bg-opacity-95 border-[1px] border-offWhite z-50"
    >
      <a href="/">
        <img src={logo} className="w-[120px]" alt="Linda Vo logo" />
      </a>
      <ul
        className="sm:flex hidden justify-between items-center list-none font-josefinsans text-offWhite text-[1.5rem] 
          lowercase font-bold"
      >
        {navLinks.map((link, i) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`${
                i === navLinks.length - 1 ? "mr-0" : "mr-5"
              } nav-item`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 items-center justify-end">
        <button
          onClick={() => {
            setMenuToggle(!menuToggle);
          }}
        >
          <HamburgerIcon alt="menu" />
        </button>
        <div
          className={`${menuToggle ? "flex" : "hidden"} 
          bg-green500 rounded-xl absolute top-[4.5rem] right-0 p-5 bg-opacity-90
          mx-4 border-offWhite border-[1px]`}
        >
          <ul
            className="list-none flex flex-col text-offWhite font-josefinsans
            lowercase font-bold text-xl gap-3 text-center"
          >
            {navLinks.map((link, i) => (
              <li key={link.id}>
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
