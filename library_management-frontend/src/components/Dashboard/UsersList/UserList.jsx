import { useEffect, useState } from "react";
import UserFormModel from "./UserFormModel";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [model, setModel] = useState(false);
  const triggerModel = () => setModel(!model);
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/user/get-first-5");
        if (response?.data !== null) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {model && <UserFormModel closeModel={triggerModel} />}
      <div
        className={`bg-slate-100 rounded-md shadow-lg transition-transform duration-200 ${
          model ? "blur-sm" : ""
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h3 className="text-2xl font-bold text-gray-800">Users List</h3>
          <button
            className="rounded-md bg-slate-300 px-4 py-2 hover:bg-slate-400 transition-colors duration-200"
            onClick={triggerModel}
          >
            Add New User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3 border-b">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3 border-b">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3 border-b">
                  Books Issued
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
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

        <div className="flex justify-end m-5">
          <button
            className="border-none text-red-500 hover:font-bold transition-all duration-200"
            onClick={() => navigate("/all-users")}
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
