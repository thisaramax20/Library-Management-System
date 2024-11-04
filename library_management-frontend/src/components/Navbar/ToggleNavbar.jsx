const ToggleNavbar = ({ show, toggleShow }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity ${
        show ? "block" : "hidden"
      } z-50`}
      onClick={toggleShow}
    >
      <div
        className="absolute top-0 right-0 bg-white rounded-lg shadow-lg w-64 p-4 z-60"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="flex items-center justify-end text-gray-500 hover:bg-gray-200 rounded-md p-2"
          onClick={toggleShow}
        >
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
              d="M6 6l8 8M6 14L14 6"
            />
          </svg>
        </button>
        <ul className="mt-4 flex flex-col space-y-2">
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-700 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToggleNavbar;
