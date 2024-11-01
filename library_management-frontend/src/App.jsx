import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import DashboardUser from "./components/DashboardUser/DashboardUser";
import NormalIssue from "./components/Dashboard/BookIssue/NormalIssue/NormalIssue";
import PreOrder from "./components/Dashboard/BookIssue/PreOrder/PreOrder";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Reports from "./components/Dashboard/Reports/Reports";
import AllBooks from "./components/Dashboard/BooksList/AllBooks";
import AllUsers from "./components/Dashboard/UsersList/AllUsers";
import AllAuthors from "./components/AuthorList/AllAuthors";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
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
          <Route path="/dashboard-user" element={<DashboardUser />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/all-books" element={<AllBooks />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/all-authors" element={<AllAuthors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
