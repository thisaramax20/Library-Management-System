import { useState } from "react";
import axios from "../../api/axios";
import Swal from "sweetalert2";

let admin = {};
const UpdateAdminModel = ({ closeModel }) => {
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  async function searchAdmin() {
    try {
      const response = await axios.get(`/admin/get-by-id/${searchTerm}`);
      if (response?.data) {
        setName(response.data.name);
        admin = response.data;
      } else {
        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: "There is no one by that ID...!",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong...!",
      });
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/admin/update`, {
        ...admin,
        name,
      });
      if (response.status === 200) {
        setName("");
        Swal.fire({
          icon: "success",
          title: "OK...",
          text: "Changes has been updated...!",
        });
        closeModel();
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-slate-200 shadow-lg rounded-lg p-6 w-96 mx-4">
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
          Search and Update
        </h2>

        <input
          type="text"
          placeholder="Search"
          className="rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 w-full mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition duration-150"
          onClick={searchAdmin}
        >
          Search
        </button>

        <form className="mt-6" onSubmit={(e) => handleSubmit(e)}>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />

          <div className="flex justify-between mt-4">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition duration-150 mr-2">
              Update
            </button>
            <button
              onClick={closeModel}
              className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 rounded transition duration-150 ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAdminModel;
