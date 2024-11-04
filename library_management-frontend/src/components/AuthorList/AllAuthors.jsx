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
    <div className="flex flex-col items-center p-5 bg-gray-50 min-h-screen">
      <div className="mb-5">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Manage All The Books Here
        </h1>
      </div>

      {model && <AuthorModel closeModel={triggerModel} />}
      {modelUpdate && <UpdateAuthorModel closeModel={triggerModelUpdate} />}
      {modelDelete && <DeleteAuthorModel closeModel={triggerModelDelete} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-slate-200 p-5 rounded-md shadow-lg h-full">
          <ul className="space-y-4">
            <li>
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300 p-2"
              />
            </li>
            <li className="flex items-center space-x-2">
              <MdAddBox
                size={30}
                className="hover:cursor-pointer text-blue-600"
                onClick={triggerModel}
              />
              <span>Add New Author</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEdit
                size={30}
                className="hover:cursor-pointer text-yellow-600"
                onClick={triggerModelUpdate}
              />
              <span>Edit Author Details</span>
            </li>
            <li className="flex items-center space-x-2">
              <RiDeleteBin4Fill
                size={30}
                className="hover:cursor-pointer text-red-600"
                onClick={triggerModelDelete}
              />
              <span>Delete Authors</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-200 p-5 rounded-md shadow-lg">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-gray-300 text-gray-700">
                <th scope="col" className="px-6 py-3 border-b">
                  Author ID
                </th>
                <th scope="col" className="px-6 py-3 border-b">
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((author) => (
                <tr
                  key={author.id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="px-6 py-4 border-b">{author.id}</td>
                  <td className="px-6 py-4 border-b">{author.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllAuthors;
