import { useNavigate } from "react-router-dom";

const BookIssueModel = ({ closeModel }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Book Issue Options
        </h2>

        <button
          onClick={() => navigate("/normal-issue")}
          className="w-full rounded-3xl bg-blue-500 text-white font-semibold py-2 m-2 hover:bg-blue-600 transition duration-200"
        >
          Normal Issue
        </button>

        <button
          onClick={() => navigate("/pre-order")}
          className="w-full rounded-3xl bg-blue-600 text-white font-semibold py-2 m-2 hover:bg-blue-700 transition duration-200"
        >
          Pre Order Book Issue
        </button>

        <button
          className="text-red-500 hover:underline m-2"
          onClick={closeModel}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookIssueModel;
