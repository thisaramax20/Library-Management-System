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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name=""
          id="username"
          className="rounded-md bg-slate-400"
          value={userName}
          onChange={(e) => {
            handleClickUserName(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name=""
          id="password"
          className="rounded-md bg-slate-400"
          value={password}
          onChange={(e) => {
            handleClickPassword(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
