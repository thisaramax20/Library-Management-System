import { useState } from "react";
import PreOrderList from "./PreOrderList";
import SearchUserPreOrder from "./SearchUserPreOrder";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const PreOrder = () => {
  const [preOrderList, setPreOrderList] = useState([]);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center p-5 bg-gray-50 min-h-screen">
      <RiDashboardHorizontalFill
        size={50}
        className="mb-4 hover:cursor-pointer text-blue-600 transition-transform transform hover:scale-110"
        onClick={() => navigate("/dashboard")}
      />
      <span className="text-lg text-gray-600 mb-8">Go Back</span>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Pre Order Books Issue
      </h1>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-5 border border-gray-300 transition-transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Search for Users
        </h2>
        <SearchUserPreOrder setPreOrderList={setPreOrderList} />
      </div>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 border border-gray-300 transition-transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Pre Order List
        </h2>
        <PreOrderList preOrderList={preOrderList} />
      </div>
    </div>
  );
};

export default PreOrder;
