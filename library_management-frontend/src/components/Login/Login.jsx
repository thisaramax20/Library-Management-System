import { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClickPassword = (value) => {
    setPassword(value);
  };
  const handleClickUserName = (value) => {
    setUsername(value);
  };
  async function handleSubmit() {
    if (username === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "You must enter a valid username & password...!",
      });
      return;
    }
    let url = "";
    if (username.startsWith("AD")) {
      url = "/admin/validate-login";
    } else if (username.startsWith("US")) {
      url = "/user/validate-login";
    }
    try {
      const response = await axios.post(url, null, {
        params: {
          username,
          password,
        },
      });
      if (response.status === 200) {
        const data = response.data;
        if (data.auth === "yes") {
          if (data.type === "US") {
            navigate(`/dashboard-user?name=${data.name}&username=${username}`);
          } else if (data.type === "AD") {
            navigate(`/dashboard?name=${data.name}`);
          }
          localStorage.setItem("token", JSON.stringify(data));
        } else if (data.message === "password incorrect") {
          Swal.fire({
            icon: "error",
            title: "Sorry...",
            text: "Your password is incorrect!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Sorry...",
            text: "Check your credentials again...!",
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
        <div className="bg-slate-100 p-8 shadow-lg rounded-lg h-96 flex flex-col justify-center">
          <div className="flex flex-col items-center">
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
              value={username}
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
              type="submit"
              className="m-6 py-3 px-12 rounded-3xl bg-red-500 text-white font-semibold transition-transform duration-200 hover:scale-105 hover:bg-red-600"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
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
