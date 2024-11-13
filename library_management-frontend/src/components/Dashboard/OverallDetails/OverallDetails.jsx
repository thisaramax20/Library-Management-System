import BriefDetailCard from "./BriefDetailCard";
import axios from "../../../api/axios";
import { useEffect, useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const details = [
  {
    name: "Total Visitors",
    number: 1223,
  },
  {
    name: "Borrowed Books",
    number: 730,
  },
  {
    name: "Overdue Books",
    number: 201,
  },
];

const OverallDetails = () => {
  const [data, setData] = useState(details);
  const name = JSON.parse(localStorage.getItem("token")).name;
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/issue-books/get-counts");
        if (response?.data !== null) {
          setData([
            {
              name: "Total Visitors",
              number: response.data?.totalVisitors || 0,
            },
            {
              name: "Borrowed Books",
              number: response.data.borrowed || 0,
            },
            {
              name: "Overdue Books",
              number: response.data.overdue || 0,
            },
          ]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-5">
        <div className="flex-grow">
          <h1 className="text-5xl font-bold text-gray-800">
            Hello, <span className="text-red-600">{name}!</span>
          </h1>
          <h4 className="text-2xl mt-2 text-gray-600">
            {new Date().getDate()}.{new Date().getMonth() + 1}.
            {new Date().getFullYear()} | {new Date().getHours()}:
            {new Date().getMinutes().toString().padStart(2, "0")}
          </h4>
        </div>
        <RiAdminFill
          size={50}
          className="text-cyan-900 cursor-pointer hover:scale-110 transform duration-200"
          onClick={() => navigate("/all-admins")}
        />
        <RiLogoutBoxLine
          size={50}
          className="cursor-pointer text-red-600 transition-transform duration-200 hover:scale-110"
          onClick={handleLogout}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {data.map((card) => (
          <BriefDetailCard
            name={card.name}
            number={card.number}
            key={card.name}
          />
        ))}
      </div>
    </div>
  );
};

export default OverallDetails;
