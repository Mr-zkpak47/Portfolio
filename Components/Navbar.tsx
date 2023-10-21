"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <header
      id="header"
        className={`sm:px-0 md:px-20 px-20 w-full mx-auto shadow fixed px-0 top-0 z-50 border-y border-slate-100
 ${currentTheme === "dark" ? "bg-stone-800" : "bg-white"} 
       `}
      >
        <div className="justify-between md:items-center md:flex">
          <div className="flex items-center justify-between">
            <Link to="home">
              <div>
                <h2
                  className="sm:ml-5 cursor-pointer my-5 text-2xl font-bold"
                  id="logo"
                >
                  PORTFOLIO
                </h2>
              </div>
            </Link>
            <div className="sm:mr-5 md:hidden flex space-x-2">
              <span className="sm:visible md:collapse">
                {currentTheme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className={`p-2 bg-slate-100 rounded-xl transition-all`}
                  >
                    <RiSunLine color="black" />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("dark")}
                    className="p-2 bg-slate-900 rounded-xl"
                  >
                    <RiMoonFill color="white" />
                  </button>
                )}
              </span>
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose className="transition-all" size={30} /> : <IoMdMenu className="transition-all" size={30} />}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 transition ease-in-out delay-150
            md:mt-0  ${navbar ? "block" : "hidden"}`}
            >
              <div id="links-flex" className="md:flex sm:flex items-center sm:items-center sm:justify-center
               justify-center md:space-x-6 md:space-y-0 sm:flex-col md:flex-row">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <Link
                      key={idx}
                      to={item.page}
                      id="links"
                      className={`block lg:inline-block text-neutral-900 cursor-pointer hover:text-red-500 font-bold text-lg sm:mx-auto sm:flex w-full
                      sm:py-5 sm:border-1 sm:border-b sm:border-red-900 md:border-0
                      sm:align-center sm:justify-center
                      ${
                        currentTheme === "dark"
                          ? "text-red-800 hover:text-red-500"
                          : "text-slate-900"
                      }`}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <span id="mode" className="sm:collapse md:visible">
                  {currentTheme === "dark" ? (
                    <button
                      onClick={() => setTheme("light")}
                      className={`p-2 bg-slate-100 rounded-xl`}
                    >
                      <RiSunLine color="black" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setTheme("dark")}
                      className="p-2 bg-slate-900 rounded-xl"
                    >
                      <RiMoonFill color="white" />
                    </button>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
