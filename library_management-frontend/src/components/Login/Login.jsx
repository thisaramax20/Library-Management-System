import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("LB-0001");
  const [password, setPassword] = useState("");
  const handleClickPassword = (value) => {
    setPassword(value);
  };
  const handleClickUserName = (value) => {
    setUserName(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
        <div className="bg-slate-100 p-8 shadow-lg rounded-lg h-96 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
            <label
              htmlFor="username"
              className="mt-2 text-lg font-semibold text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="rounded-3xl bg-slate-200 p-2 m-2 w-64 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={userName}
              onChange={(e) => handleClickUserName(e.target.value)}
            />
            <label
              htmlFor="password"
              className="mt-2 text-lg font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-3xl bg-slate-200 p-2 m-2 w-64 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => handleClickPassword(e.target.value)}
            />
            <button
              className="m-6 py-3 px-12 rounded-3xl bg-red-500 text-white font-semibold transition-transform duration-200 hover:scale-105 hover:bg-red-600"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center bg-red-500 h-96 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-extrabold mb-4">Welcome to LibTrack</h2>
          <p className="mb-2">Don't have an account?</p>
          <p className="font-mono text-center">
            Visit us at our library and enhance your knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
