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
    <div>
      <div className="m-5">
        <h1 className="text-4xl font-bold text-center">
          Manage All The Users Here
        </h1>
      </div>
      {model && <UserFormModel closeModel={triggerModel} />}
      {modelUpdate && <UpdateUserModel closeModel={triggerModelUpdate} />}
      {modelDelete && <DeleteUserModel closeModel={triggerModelDelete} />}
      <div className="grid grid-cols-1 m-5 md:flex justify-around">
        <div className="bg-slate-200 p-5 rounded-md shadow-md h-96">
          <ul>
            <li className="m-8">
              <input
                type="text"
                placeholder="search"
                className="rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300 p-2"
              />
            </li>
            <li className="m-8">
              <MdAddBox size={30} onClick={triggerModel} /> Add New User
            </li>
            <li className="m-8">
              <FaEdit size={30} onClick={triggerModelUpdate} /> Edit User
              Details
            </li>
            <li className="m-8">
              <RiDeleteBin4Fill size={30} onClick={triggerModelDelete} /> Delete
              Users
            </li>
          </ul>
        </div>

        <div className="bg-slate-200 p-5 rounded-md shadow-md">
          <table className="table-auto text-left">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Books Issued
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.countOfBooksIssued}</td>
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
