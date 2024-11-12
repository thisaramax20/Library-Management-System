import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/hero2.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="relative bg-gradient-to-r from-blue-800 via-teal-700 to-blue-900 min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section (Text Content) */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Header */}
            <h1 className="text-7xl sm:text-8xl font-extrabold text-white leading-tight drop-shadow-2xl transition-transform transform hover:scale-105 hover:rotate-3">
              LibTrack
            </h1>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-100 transition-all duration-300 hover:text-gray-300">
              Revolutionizing Library Management
            </h2>

            {/* Introduction */}
            <p className="text-lg sm:text-xl text-gray-200 max-w-lg mx-auto lg:mx-0 transition-all duration-300 hover:text-gray-100">
              LibTrack simplifies and streamlines your library management with
              powerful tools to catalog books, track members, and generate
              insightful reports, all in one place.
            </p>

            {/* Features List with Icons */}
            <div className="space-y-6 mt-8">
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white transform hover:text-gray-100 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 12l6 6L18 6"
                  ></path>
                </svg>
                <span className="text-lg text-gray-200 hover:text-gray-100">
                  Effortless Cataloging & Organization
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white transform hover:text-gray-100 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12H9M12 15l-3-3 3-3"
                  ></path>
                </svg>
                <span className="text-lg text-gray-200 hover:text-gray-100">
                  Advanced Search & Filters
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white transform hover:text-gray-100 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 15l-5-5 5-5M19 15l-5-5 5-5"
                  ></path>
                </svg>
                <span className="text-lg text-gray-200 hover:text-gray-100">
                  Real-Time Member Tracking
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white transform hover:text-gray-100 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v18h14V3H5zM5 8h14"
                  ></path>
                </svg>
                <span className="text-lg text-gray-200 hover:text-gray-100">
                  Instant Overdue Alerts & Reminders
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button
                className="bg-teal-500 text-white text-lg font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-teal-600 transition-all transform hover:scale-110 hover:shadow-2xl"
                onClick={handleClick}
              >
                Start Now
              </button>
            </div>
          </div>

          {/* Right Section (Image & Visuals) */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-900 to-teal-800 rounded-xl opacity-30"></div>
            <img
              src={heroImg}
              alt="Library Management"
              className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
