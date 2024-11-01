import { useState } from "react";
import axios from "../../api/axios";
let author = {};
export const UpdateAuthorModel = ({ closeModel }) => {
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  async function searchBook() {
    try {
      const response = await axios.get(`/author/get-by-id/${searchTerm}`);
      if (response?.data) {
        setName(response.data.name);
        author = response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/author/update`, {
        ...author,
        name,
      });
      if (response.status === 200) {
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
        <input
          type="text"
          placeholder="search"
          className="rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300 p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={searchBook}
        ></button>
        <form>
          <label htmlFor="name">Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
