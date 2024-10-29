import { useNavigate } from "react-router-dom";

const BookIssueModel = ({ closeModel }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed bg-slate-300 shadow-lg shadow-slate-400 p-8 rounded-md w-96 h-auto">
        <button
          onClick={() => navigate("/normal-issue")}
          className="rounded-md bg-slate-700 p-2 m-2 hover:scale-105"
        >
          Normal Issue
        </button>
        <button
          onClick={() => navigate("/pre-order")}
          className="rounded-md bg-slate-700 p-2 m-2 hover:scale-105"
        >
          Pre Order Book Issue
        </button>
        <button
          className="text-red-400 m-2 hover:scale-105"
          onClick={closeModel}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookIssueModel;
