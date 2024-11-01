import { useState } from "react";
import axios from "../../api/axios";
let author = {};
const DeleteAuthorModel = ({ closeModel }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  async function searchAuthor() {
    try {
      const response = await axios.get(`/author/get-by-id/${searchTerm}`);
      if (response?.data) {
        setName(response.data.name);
        author = response.data;
      }
      setSearchTerm("");
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteAuthor() {
    try {
      await axios.delete(`/author/delete-by-id/${author.authorId}`);
      alert("Author deleted successfully");
      setSearchTerm("");
      closeModel();
    } catch (error) {
      console.error(error);
    }
  }
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
          onClick={searchAuthor}
        ></button>

        <label
          className="block text-gray-700 text-sm font-bold mb-2 mt-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
          type="text"
          id="title"
          name="title"
          placeholder="title"
          value={name}
          disabled
        />
        <button
          onClick={deleteAuthor}
          className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete Author
        </button>
      </div>
    </div>
  );
};

export default DeleteAuthorModel;
