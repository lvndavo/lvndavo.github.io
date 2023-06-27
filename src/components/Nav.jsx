import React, { useState } from "react";
import { navLinks, HamburgerIcon } from "../constants";
import logo from "../assets/logo.png";

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className="w-full px-6 py-2 flex justify-between items-center bg-darkBlue bg-opacity-20 border-b-[1px] border-offWhite">
      <img src={logo} className="w-[170px]" />
      <div>
        <ul
          className="sm:flex hidden justify-between list-none font-josefinsans text-offWhite text-[1.5rem] 
          lowercase font-bold mt-3"
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
      </div>
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
          bg-black rounded-xl absolute top-[4.5rem] right-0 p-5 bg-opacity-50
          mx-4`}
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
