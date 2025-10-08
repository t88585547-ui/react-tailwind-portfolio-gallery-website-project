import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="top-0 w-full fixed mt-2 z-50">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-6 py-1 bg-white lg:w-[800px] absolute left-1/2 -translate-x-1/2 rounded-full shadow-[2px_10px_13px_-2px_rgba(50,_50,_93,_0.25)] sm:w-[300px]">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="https://i.pinimg.com/736x/4c/25/f1/4c25f149a63c2b56830f61e17b21215c.jpg"
              className="w-10 h-10 rounded-full border-2 border-solid border-gray-300 dark:border-gray-500"
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-8 text-gray-900 font-semibold">
          <li className="hover:text-red-500 hover:[text-shadow:_7px_5px_10px_#ff9999] transition">
            {<Link to="/">Home</Link>}
          </li>
          <li className="hover:text-red-500 hover:[text-shadow:_7px_5px_10px_#ff9999] transition">
            {<Link to="/gallery">Work</Link>}
          </li>
          <li className="hover:text-red-500 hover:[text-shadow:_7px_5px_10px_#ff9999] transition">
            {<Link to="/contact">Contact</Link>}
          </li>
        </ul>

        {/* Right controls: Theme toggle + Burger */}
        <div className="flex items-center space-x-3 pl-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>

          {/* Burger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        } z-50`}
      >
        <div className="flex p-4 justify-between">
          <img
            src="https://i.pinimg.com/736x/4c/25/f1/4c25f149a63c2b56830f61e17b21215c.jpg"
            className="w-10 h-10 rounded-full border-2 border-solid border-gray-300 dark:border-gray-500"
            alt="logo"
          />
          <button
            className="p-2 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="border-b border-gray-400 dark:border-gray-600 mx-3"></div>

        <ul className="flex flex-col items-center space-y-8 mt-10 bg-gray-100 dark:bg-gray-900 rounded-2xl m-2 p-6">
          <li className="w-full hover:text-red-400 transition">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="w-full text-left"
            >
              Home
            </Link>
          </li>
          <li className="w-full hover:text-red-400 transition">
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="w-full text-left"
            >
              Work
            </Link>
          </li>
          <li className="w-full hover:text-red-400 transition">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-left"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
