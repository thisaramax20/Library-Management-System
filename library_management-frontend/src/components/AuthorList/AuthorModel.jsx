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
      <div className="fixed bg-slate-300 shadow-lg shadow-slate-400 p-8 rounded-md w-96 h-auto">
        <form>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>

        <button
          onClick={handleSubmit}
          className="rounded-md bg-slate-300 p-2 hover:scale-105"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default AuthorModel;
