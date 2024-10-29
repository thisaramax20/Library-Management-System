import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import DashboardUser from "./components/DashboardUser/DashboardUser";
import NormalIssue from "./components/Dashboard/BookIssue/NormalIssue/NormalIssue";
import PreOrder from "./components/Dashboard/BookIssue/PreOrder/PreOrder";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/normal-issue" element={<NormalIssue />} />
          <Route path="/pre-order" element={<PreOrder />} />
          <Route path="/dashboard-user" element={<DashboardUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
