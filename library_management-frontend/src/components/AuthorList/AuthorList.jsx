import axios from "../../api/axios";
import { useEffect, useState } from "react";
import AuthorModel from "./AuthorModel";
import { useNavigate } from "react-router-dom";

const AuthorList = () => {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const triggerModel = () => setModel(!model);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAuthors() {
      try {
        const response = await axios.get("/author/get-first-five");
        if (response?.data) setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAuthors();
  }, []);

  return (
    <div>
      {model && <AuthorModel closeModel={triggerModel} />}
      <div
        className={`bg-slate-100 rounded-md shadow-lg transition-transform duration-200 ${
          model ? "blur-sm" : ""
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h3 className="text-2xl font-bold text-gray-800">Author List</h3>
          <button
            className="rounded-md bg-slate-300 px-4 py-2 hover:bg-slate-400 transition-colors duration-200"
            onClick={triggerModel}
          >
            Add New Author
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
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
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="px-6 py-4 border-b">{author.id}</td>
                  <td className="px-6 py-4 border-b">{author.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end m-5">
          <button
            className="border-none text-red-500 hover:font-bold transition-all duration-200"
            onClick={() => navigate("/all-authors")}
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorList;
