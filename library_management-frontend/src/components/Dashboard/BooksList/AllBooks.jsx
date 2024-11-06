import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { MdAddBox } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import BookFormModel from "./BookFormModel";
import UpdateModel from "./UpdateModel";
import DeleteModel from "./DeleteModel";
const AllBooks = () => {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const triggerModel = () => setModel(!model);
  const [modelUpdate, setModelUpdate] = useState(false);
  const triggerModelUpdate = () => setModelUpdate(!modelUpdate);
  const [modelDelete, setModelDelete] = useState(false);
  const triggerModelDelete = () => setModelDelete(!modelDelete);
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get("/book/get-all");
        if (response?.data) setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBooks();
  }, []);
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-100 min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-5xl font-semibold text-center text-gray-800 leading-tight">
          Manage All The Books Here
        </h1>
      </div>

      {/* Modal Components */}
      {model && <BookFormModel closeModel={triggerModel} />}
      {modelUpdate && <UpdateModel closeModel={triggerModelUpdate} />}
      {modelDelete && <DeleteModel closeModel={triggerModelDelete} />}

      <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full max-w-screen-xl mx-auto">
        {/* Sidebar Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 mb-5 md:mb-0">
          <ul className="space-y-6">
            <li>
              <input
                type="text"
                placeholder="Search for books..."
                className="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 p-3 text-gray-700"
                aria-label="Search Books"
              />
            </li>
            <li
              onClick={triggerModel}
              className="flex items-center hover:bg-gray-100 p-3 rounded-md cursor-pointer transition"
            >
              <MdAddBox
                size={32}
                className="text-blue-600 hover:text-blue-800 transition"
                onClick={triggerModel}
                aria-label="Add New Book"
              />
              <span className="ml-3 text-gray-800 font-medium">
                Add New Book
              </span>
            </li>
            <li
              onClick={triggerModelUpdate}
              className="flex items-center hover:bg-gray-100 p-3 rounded-md cursor-pointer transition"
            >
              <FaEdit
                size={32}
                className="text-yellow-600 hover:text-yellow-800 transition"
                onClick={triggerModelUpdate}
                aria-label="Edit Books"
              />
              <span className="ml-3 text-gray-800 font-medium">Edit Books</span>
            </li>
            <li
              onClick={triggerModelDelete}
              className="flex items-center hover:bg-gray-100 p-3 rounded-md cursor-pointer transition"
            >
              <RiDeleteBin4Fill
                size={32}
                className="text-red-600 hover:text-red-800 transition"
                onClick={triggerModelDelete}
                aria-label="Delete Books"
              />
              <span className="ml-3 text-gray-800 font-medium">
                Delete Books
              </span>
            </li>
          </ul>
        </div>

        {/* Table Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 overflow-auto">
          <table className="table-auto w-full text-left text-gray-700">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 to-purple-200 text-gray-800">
                <th scope="col" className="px-4 py-2 font-semibold text-sm">
                  Book ID
                </th>
                <th scope="col" className="px-4 py-2 font-semibold text-sm">
                  Title
                </th>
                <th scope="col" className="px-4 py-2 font-semibold text-sm">
                  Author
                </th>
                <th scope="col" className="px-4 py-2 font-semibold text-sm">
                  Available
                </th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((book) => (
                  <tr
                    key={book.id}
                    className="hover:bg-indigo-50 cursor-pointer transition-colors duration-150"
                  >
                    <td className="px-4 py-2 border-t border-gray-300 text-sm">
                      {book.id}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300 text-sm">
                      {book.title}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300 text-sm">
                      {book.authorName}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300 text-sm">
                      {book.state}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center px-4 py-4 text-gray-500 text-sm"
                  >
                    No books available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
