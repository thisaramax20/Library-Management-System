const ToggleNavbar = () => {
  return (
    <div className="flex justify-center items-center fixed top-14 left-0 right-0 z-50">
      <ul>
        <li>
          <a
            href="#"
            className="text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
          >
            Services
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ToggleNavbar;
