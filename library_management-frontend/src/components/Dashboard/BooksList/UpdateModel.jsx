import { useState } from "react";
import axios from "../../../api/axios";
const categoryList = [
  {
    id: 1,
    name: "Fiction",
  },
  {
    id: 2,
    name: "Education",
  },
  {
    id: 3,
    name: "Social",
  },
];
let book = {};
const UpdateModel = ({ closeModel }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  async function searchBook() {
    try {
      const response = await axios.get(`/book/get-by-id/${searchTerm}`);
      if (response?.data) {
        console.log(response);

        setTitle(response.data.title);
        setCategory(response.data.category);
        book = response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/book/update`, {
        ...book,
        title,
        category,
      });
      if (response.status === 200) {
        setTitle("");
        closeModel();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Book
        </h2>

        <input
          type="text"
          placeholder="Search"
          className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
          onClick={searchBook}
        >
          Search
        </button>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="mt-6"
        >
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            type="text"
            id="title"
            name="title"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="category"
          >
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categoryList.map((data) => (
              <option key={data.id} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>

          <div className="flex justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
              type="submit"
            >
              Update
            </button>
            <button
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 ml-2"
              onClick={closeModel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModel;
