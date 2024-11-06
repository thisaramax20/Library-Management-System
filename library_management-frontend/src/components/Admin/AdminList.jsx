import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { MdAddBox } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import AdminModel from "./AdminModel";
import DeleteAdminModel from "./DeleteAdminModel";
import UpdateAdminModel from "./UpdateAdminModel";

const AdminList = () => {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const [modelUpdate, setModelUpdate] = useState(false);
  const [modelDelete, setModelDelete] = useState(false);
  const triggerModelDelete = () => setModelDelete(!modelDelete);
  const triggerModelUpdate = () => setModelUpdate(!modelUpdate);
  const triggerModel = () => setModel(!model);
  useEffect(() => {
    async function fetchAdmins() {
      try {
        const response = await axios.get("/admin/get-all");
        if (response?.data) setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAdmins();
  }, []);
  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-indigo-100 to-purple-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-5xl font-semibold text-center text-gray-800 leading-tight">
          Manage Admin Details
        </h1>
      </div>

      {/* Modal Components */}
      {model && <AdminModel closeModel={triggerModel} />}
      {modelUpdate && <UpdateAdminModel closeModel={triggerModelUpdate} />}
      {modelDelete && <DeleteAdminModel closeModel={triggerModelDelete} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Sidebar Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-full border border-gray-200">
          <ul className="space-y-6">
            <li>
              <input
                type="text"
                placeholder="Search Admin"
                className="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 p-3 text-gray-700"
              />
            </li>
            <li
              onClick={triggerModel}
              className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded-md cursor-pointer"
            >
              <MdAddBox
                size={32}
                className="text-blue-600 hover:text-blue-800 transition"
              />
              <span className="text-lg font-medium text-gray-700">
                Add New Admin
              </span>
            </li>
            <li
              onClick={triggerModelUpdate}
              className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded-md cursor-pointer"
            >
              <FaEdit
                size={32}
                className="text-yellow-600 hover:text-yellow-800 transition"
              />
              <span className="text-lg font-medium text-gray-700">
                Edit Admin Details
              </span>
            </li>
            <li
              onClick={triggerModelDelete}
              className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded-md cursor-pointer"
            >
              <RiDeleteBin4Fill
                size={32}
                className="text-red-600 hover:text-red-800 transition"
              />
              <span className="text-lg font-medium text-gray-700">
                Delete Admin
              </span>
            </li>
          </ul>
        </div>

        {/* Table Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <table className="table-auto w-full text-left text-gray-700">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 to-purple-200 text-gray-800">
                <th
                  scope="col"
                  className="px-6 py-3 border-b text-sm font-semibold"
                >
                  Admin ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-b text-sm font-semibold"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-b text-sm font-semibold"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-b text-sm font-semibold"
                >
                  DOB
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-b text-sm font-semibold"
                >
                  NIC
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((author) => (
                <tr
                  key={author.id}
                  className="hover:bg-indigo-50 transition-colors duration-200 ease-in-out"
                >
                  <td className="px-6 py-4 border-b text-sm">{author.id}</td>
                  <td className="px-6 py-4 border-b text-sm">{author.name}</td>
                  <td className="px-6 py-4 border-b text-sm">
                    {author.address}
                  </td>
                  <td className="px-6 py-4 border-b text-sm">{author.dob}</td>
                  <td className="px-6 py-4 border-b text-sm">{author.nic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminList;
