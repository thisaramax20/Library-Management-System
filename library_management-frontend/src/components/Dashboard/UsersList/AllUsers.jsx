import { useEffect, useState } from "react";
import UserFormModel from "./UserFormModel";
import { MdAddBox } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import UpdateUserModel from "./UpdateUserModel";
import DeleteUserModel from "./DeleteUserModel";
import axios from "../../../api/axios";

const AllUsers = () => {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const triggerModel = () => setModel(!model);
  const [modelUpdate, setModelUpdate] = useState(false);
  const triggerModelUpdate = () => setModelUpdate(!modelUpdate);
  const [modelDelete, setModelDelete] = useState(false);
  const triggerModelDelete = () => setModelDelete(!modelDelete);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/user/get-all");
        if (response?.data) setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);
  return (
    <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-100 min-h-screen">
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-center text-blue-600">
          Manage All The Users Here
        </h1>
      </div>

      {/* Modal Components */}
      {model && <UserFormModel closeModel={triggerModel} />}
      {modelUpdate && <UpdateUserModel closeModel={triggerModelUpdate} />}
      {modelDelete && <DeleteUserModel closeModel={triggerModelDelete} />}

      <div className="flex flex-col md:flex-row md:justify-between gap-8 max-w-screen-xl mx-auto">
        {/* Sidebar Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 mb-5 md:mb-0">
          <input
            type="text"
            placeholder="Search Users"
            className="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 p-3 mb-4"
            aria-label="Search Users"
          />
          <ul className="flex flex-col space-y-6">
            <li
              className="flex items-center space-x-2 hover:bg-blue-100 p-3 rounded cursor-pointer transition duration-200"
              onClick={triggerModel}
            >
              <MdAddBox size={32} className="text-blue-600" />
              <span className="text-lg font-semibold text-gray-800">
                Add New User
              </span>
            </li>
            <li
              className="flex items-center space-x-2 hover:bg-blue-100 p-3 rounded cursor-pointer transition duration-200"
              onClick={triggerModelUpdate}
            >
              <FaEdit size={32} className="text-blue-600" />
              <span className="text-lg font-semibold text-gray-800">
                Edit User Details
              </span>
            </li>
            <li
              className="flex items-center space-x-2 hover:bg-blue-100 p-3 rounded cursor-pointer transition duration-200"
              onClick={triggerModelDelete}
            >
              <RiDeleteBin4Fill size={32} className="text-red-600" />
              <span className="text-lg font-semibold text-gray-800">
                Delete Users
              </span>
            </li>
          </ul>
        </div>

        {/* Table Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 overflow-auto">
          <table className="table-auto w-full text-left text-gray-700">
            <thead>
              <tr className="bg-blue-200">
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold text-gray-700"
                >
                  User ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold text-gray-700"
                >
                  User Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold text-gray-700"
                >
                  Books Issued
                </th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                  >
                    <td className="px-6 py-4 border-b">{user.id}</td>
                    <td className="px-6 py-4 border-b">{user.name}</td>
                    <td className="px-6 py-4 border-b">
                      {user.countOfBooksIssued}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center px-6 py-4 text-gray-500"
                  >
                    No users available
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

export default AllUsers;
