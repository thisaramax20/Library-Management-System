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
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-center text-blue-600">
          Manage All The Users Here
        </h1>
      </div>

      {model && <UserFormModel closeModel={triggerModel} />}
      {modelUpdate && <UpdateUserModel closeModel={triggerModelUpdate} />}
      {modelDelete && <DeleteUserModel closeModel={triggerModelDelete} />}

      <div className="grid grid-cols-1 m-5 md:flex justify-around">
        <div className="bg-white p-5 rounded-lg shadow-lg h-96 flex flex-col justify-between">
          <input
            type="text"
            placeholder="Search Users"
            className="rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 mb-4"
          />
          <ul className="flex flex-col space-y-4">
            <li
              className="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer"
              onClick={triggerModel}
            >
              <MdAddBox size={30} className="text-blue-600" />
              <span className="text-lg font-semibold">Add New User</span>
            </li>
            <li
              className="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer"
              onClick={triggerModelUpdate}
            >
              <FaEdit size={30} className="text-blue-600" />
              <span className="text-lg font-semibold">Edit User Details</span>
            </li>
            <li
              className="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer"
              onClick={triggerModelDelete}
            >
              <RiDeleteBin4Fill size={30} className="text-red-600" />
              <span className="text-lg font-semibold">Delete Users</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg">
          <table className="table-auto w-full text-left">
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
              {data.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 border-b">{user.id}</td>
                  <td className="px-6 py-4 border-b">{user.name}</td>
                  <td className="px-6 py-4 border-b">
                    {user.countOfBooksIssued}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
