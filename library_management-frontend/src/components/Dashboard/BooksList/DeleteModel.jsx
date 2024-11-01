import { useState } from "react";
import axios from "../../../api/axios";
let book = {};
const DeleteModel = ({ closeModel }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  async function searchBook() {
    try {
      const response = await axios.get(`/book/get-by-id/${searchTerm}`);
      if (response?.data) {
        setTitle(response.data.title);
        book = response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteBook() {
    try {
      await axios.delete(`/book/delete/${book.bookCode}`);
      alert("Book deleted successfully!");
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
          onClick={searchBook}
        ></button>

        <label
          className="block text-gray-700 text-sm font-bold mb-2 mt-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
          type="text"
          id="title"
          name="title"
          placeholder="title"
          value={title}
          disabled
        />
        <button
          onClick={deleteBook}
          className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete Book
        </button>
      </div>
    </div>
  );
};

export default DeleteModel;
