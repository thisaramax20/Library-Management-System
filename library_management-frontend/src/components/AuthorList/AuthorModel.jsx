import { useState } from "react";
import axios from "../../api/axios";

const AuthorModel = ({ closeModel }) => {
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/author/save", { name });
      if (response.status === 201) {
        setName("");
        closeModel();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-slate-200 shadow-lg rounded-lg p-6 w-80 mx-4">
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
          Enter Name
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 mr-2"
            >
              Proceed
            </button>
            <button
              onClick={closeModel}
              className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthorModel;
