import Button from "../Button";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import AuthorModel from "./AuthorModel";

const AuthorList = () => {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const triggerModel = () => setModel(!model);

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
        className={`bg-slate-100 rounded-md shadow-md shadow-slate-400 ${
          model ? "blur-sm" : ""
        }`}
      >
        <div className="flex justify-evenly">
          <h3 className="text-2xl font-bold p-2">Author List</h3>
          <div className="m-2">
            <button
              className="rounded-md bg-slate-300 p-2 hover:scale-105"
              onClick={triggerModel}
            >
              Add New Author
            </button>
          </div>
        </div>

        <div className="flex justify-around">
          <table className="table-auto text-left">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  Author ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((author) => (
                <tr key={author.id}>
                  <td className="px-6 py-4">{author.id}</td>
                  <td className="px-6 py-4">{author.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end m-5">
          <button className="border-none text-red-500 hover:font-bold">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthorList;
