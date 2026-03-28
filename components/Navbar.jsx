import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../constants";

const Navbar = ({ theme, setTheme }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-primary shadow-lg"
            : "bg-gray-100 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          {/* Monogram avatar */}
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #915eff, #00cea8)" }}>
            SB
          </div>
          <p className={`text-[18px] font-bold cursor-pointer flex gap-1 ${isDark ? "text-white" : "text-gray-900"}`}>
            Sekhar&nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop links */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-white"
                  : isDark ? "text-secondary" : "text-gray-500"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Theme toggle */}
          <li>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                isDark ? "border-gray-600 hover:border-white text-white" : "border-gray-300 hover:border-gray-600 text-gray-700"
              }`}
              title="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="text-lg"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <button
            className="w-[28px] h-[28px] object-contain flex flex-col gap-1 justify-center cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <span className={`block w-full h-0.5 transition-all ${isDark ? "bg-white" : "bg-gray-800"}`} />
            <span className={`block w-full h-0.5 transition-all ${isDark ? "bg-white" : "bg-gray-800"}`} />
            <span className={`block w-full h-0.5 transition-all ${isDark ? "bg-white" : "bg-gray-800"}`} />
          </button>

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 ${isDark ? "bg-black-200" : "bg-white"} absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title
                      ? "text-white"
                      : isDark ? "text-secondary" : "text-gray-500"
                  }`}
                  onClick={() => { setActive(nav.title); setToggle(false); }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
