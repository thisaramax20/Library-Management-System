import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/hero2.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="m-5 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center mb-10">
            <div className="bg-blue-300/50 p-8 rounded-md w-72 h-72 flex flex-col justify-center items-center transform -rotate-45 shadow-lg">
              <h1 className="text-5xl font-bold rotate-45 text-center text-blue-800">
                LibTrack
              </h1>
              <h2 className="text-2xl font-bold rotate-45 text-center mt-6 font-mono text-blue-600">
                Simplify your book management with us
              </h2>
            </div>
          </div>

          <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">
              Welcome to LibTrack
            </h2>
            <p className="text-md font-mono mb-4 text-gray-700">
              LibTrack streamlines book management for librarians and students.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              Key Features:
            </h3>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Effortless Cataloging: Easily add and organize books.</li>
              <li>Advanced Search: Find titles quickly.</li>
              <li>Member Management: Track checkouts and overdue items.</li>
              <li>Reports & Analytics: Gain insights into library usage.</li>
              <li>Mobile Access: Manage your library on the go.</li>
            </ul>

            <p className="text-md font-mono text-gray-700">
              Join Us Today! Sign up for a free trial at your library and
              transform your library experience with LibTrack!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={heroImg}
            alt="hero"
            className="object-contain rounded-md shadow-lg shadow-blue-400 mb-6"
          />
          <button
            className="rounded-full bg-sky-500 text-white px-8 py-3 text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-sky-600"
            onClick={handleClick}
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
