import { useState } from "react";
import ProceedIssue from "./ProceedIssue";
import SearchBook from "./SearchBook";
import SearchUser from "./SearchUser";
import { useNavigate } from "react-router-dom";

const NormalIssue = () => {
  const [user, setUser] = useState({});
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  return (
    <div className="container">
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
      <div>
        <h2 className="text-2xl">Normal Issue</h2>
        <SearchUser setUser={setUser} />
        <SearchBook setBook={setBook} />
        <ProceedIssue user={user} book={book} />
      </div>
    </div>
  );
};

export default NormalIssue;
