import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { MdAddBox } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import AuthorModel from "./AuthorModel";
import { UpdateAuthorModel } from "./UpdateAuthorModel";
import DeleteAuthorModel from "./DeleteAuthorModel";
const AllAuthors = () => {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const triggerModel = () => setModel(!model);
  const [modelUpdate, setModelUpdate] = useState(false);
  const triggerModelUpdate = () => setModelUpdate(!modelUpdate);
  const [modelDelete, setModelDelete] = useState(false);
  const triggerModelDelete = () => setModelDelete(!modelDelete);
  useEffect(() => {
    async function fetchAuthors() {
      try {
        const response = await axios.get("/author/get-all");
        if (response?.data) setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAuthors();
  }, []);
  return (
    <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-100 min-h-screen">
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-center text-blue-600">
          Manage All The Authors Here
        </h1>
      </div>

      {/* Modal Components */}
      {model && <AuthorModel closeModel={triggerModel} />}
      {modelUpdate && <UpdateAuthorModel closeModel={triggerModelUpdate} />}
      {modelDelete && <DeleteAuthorModel closeModel={triggerModelDelete} />}

      <div className="flex flex-col md:flex-row md:justify-between gap-8 max-w-screen-xl mx-auto">
        {/* Sidebar Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 mb-5 md:mb-0">
          <input
            type="text"
            placeholder="Search Authors"
            className="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 p-3 mb-4"
            aria-label="Search Authors"
          />
          <ul className="flex flex-col space-y-6">
            <li
              className="flex items-center space-x-2 hover:bg-blue-100 p-3 rounded cursor-pointer transition duration-200"
              onClick={triggerModel}
            >
              <MdAddBox size={32} className="text-blue-600" />
              <span className="text-lg font-semibold text-gray-800">
                Add New Author
              </span>
            </li>
            <li
              className="flex items-center space-x-2 hover:bg-blue-100 p-3 rounded cursor-pointer transition duration-200"
              onClick={triggerModelUpdate}
            >
              <FaEdit size={32} className="text-yellow-600" />
              <span className="text-lg font-semibold text-gray-800">
                Edit Author Details
              </span>
            </li>
            <li
              className="flex items-center space-x-2 hover:bg-blue-100 p-3 rounded cursor-pointer transition duration-200"
              onClick={triggerModelDelete}
            >
              <RiDeleteBin4Fill size={32} className="text-red-600" />
              <span className="text-lg font-semibold text-gray-800">
                Delete Authors
              </span>
            </li>
          </ul>
        </div>

        {/* Table Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 overflow-auto">
          <table className="table-auto w-full text-left text-gray-700">
            <thead>
              <tr className="bg-gray-300">
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold text-gray-700"
                >
                  Author ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold text-gray-700"
                >
                  Name
                </th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((author) => (
                  <tr
                    key={author.id}
                    className="hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                  >
                    <td className="px-6 py-4 border-b">{author.id}</td>
                    <td className="px-6 py-4 border-b">{author.name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="2"
                    className="text-center px-6 py-4 text-gray-500"
                  >
                    No authors available
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

export default AllAuthors;
