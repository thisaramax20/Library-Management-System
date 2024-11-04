import { useState } from "react";
import ProceedIssue from "./ProceedIssue";
import SearchBook from "./SearchBook";
import SearchUser from "./SearchUser";
import { useNavigate } from "react-router-dom";
import { RiDashboardHorizontalFill } from "react-icons/ri";

const NormalIssue = () => {
  const [user, setUser] = useState({});
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-5 bg-gray-100 rounded-lg shadow-md">
      <RiDashboardHorizontalFill
        size={50}
        className="mb-4 hover:cursor-pointer hover:text-blue-600 transition duration-200"
        onClick={() => navigate("/dashboard")}
        aria-label="Go Back to Dashboard"
      />
      <span className="text-lg text-gray-600">Go Back</span>

      <div className="mt-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Normal Issue
        </h2>

        <div className="flex flex-col space-y-4">
          <SearchUser setUser={setUser} />
          <SearchBook setBook={setBook} />
          <ProceedIssue user={user} book={book} />
        </div>
      </div>
    </div>
  );
};

export default NormalIssue;
