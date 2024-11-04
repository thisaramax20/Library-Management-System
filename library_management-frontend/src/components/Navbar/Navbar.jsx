import { useState } from "react";
import ToggleNavbar from "./ToggleNavbar";
import { BiBookReader } from "react-icons/bi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <ToggleNavbar show={show} toggleShow={toggleShow} />
      <nav className="bg-white shadow-lg border-b border-gray-300 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <BiBookReader className="h-8 w-8 mr-3 text-gray-800 dark:text-white" />
            <span className="ml-3 text-3xl font-bold text-gray-800 dark:text-white">
              LibTrack
            </span>
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="navbar-default"
            aria-expanded={show}
            onClick={toggleShow}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2 5h16M2 10h16M2 15h16"
              />
            </svg>
          </button>

          <div
            className={`hidden w-full md:flex md:items-center md:w-auto ${
              show ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 bg-white md:bg-transparent rounded-lg">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200 dark:text-white dark:hover:bg-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200 dark:text-white dark:hover:bg-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200 dark:text-white dark:hover:bg-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200 dark:text-white dark:hover:bg-blue-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200 dark:text-white dark:hover:bg-blue-500"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
