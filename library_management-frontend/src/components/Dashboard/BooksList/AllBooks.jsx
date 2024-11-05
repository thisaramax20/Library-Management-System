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
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Manage All The Books Here
        </h1>
      </div>

      {model && <BookFormModel closeModel={triggerModel} />}
      {modelUpdate && <UpdateModel closeModel={triggerModelUpdate} />}
      {modelDelete && <DeleteModel closeModel={triggerModelDelete} />}

      <div className="grid grid-cols-1 m-5 md:flex md:justify-between">
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 mb-5 md:mb-0">
          <ul className="space-y-4">
            <li>
              <input
                type="text"
                placeholder="Search..."
                className="rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 w-full"
                aria-label="Search Books"
              />
            </li>
            <li className="flex items-center">
              <MdAddBox
                size={30}
                className="hover:cursor-pointer text-blue-600"
                onClick={triggerModel}
                aria-label="Add New Book"
              />
              <span className="ml-2 text-gray-800">Add New Book</span>
            </li>
            <li className="flex items-center">
              <FaEdit
                size={30}
                className="hover:cursor-pointer text-yellow-600"
                onClick={triggerModelUpdate}
                aria-label="Edit Books"
              />
              <span className="ml-2 text-gray-800">Edit Books</span>
            </li>
            <li className="flex items-center">
              <RiDeleteBin4Fill
                size={30}
                className="hover:cursor-pointer text-red-600"
                onClick={triggerModelDelete}
                aria-label="Delete Books"
              />
              <span className="ml-2 text-gray-800">Delete Books</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 overflow-auto">
          <table className="table-auto text-left w-full">
            <thead>
              <tr className="bg-gray-200">
                <th
                  scope="col"
                  className="px-4 py-2 font-semibold text-gray-700"
                >
                  Book ID
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 font-semibold text-gray-700"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 font-semibold text-gray-700"
                >
                  Author
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 font-semibold text-gray-700"
                >
                  Available
                </th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((book) => (
                  <tr
                    key={book.id}
                    className="hover:bg-gray-100 cursor-pointer transition duration-150"
                  >
                    <td className="px-4 py-2 border-t border-gray-300">
                      {book.id}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      {book.title}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      {book.authorName}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      {book.state}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center px-4 py-4 text-gray-500"
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
