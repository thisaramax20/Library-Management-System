import { useState } from "react";
import axios from "../../api/axios";
import Swal from "sweetalert2";

let admin = {};
const DeleteAdminModel = ({ closeModel }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  async function searchAuthor() {
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
      setSearchTerm("");
    } catch (error) {
      console.error(error);
    }
  }
  function deleteAuthor() {
    if (!admin.id) {
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await axios.delete(`/admin/delete/${admin.username}`);
          if (result.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          setSearchTerm("");
          closeModel();
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "error",
            text: "Oops.",
            icon: "Something went wrong...!",
          });
        }
      }
    });
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-slate-200 shadow-lg rounded-lg p-6 w-96 mx-4">
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
          Delete Author
        </h2>

        <input
          type="text"
          placeholder="Search"
          className="rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition duration-150 mb-4"
          onClick={searchAuthor}
        >
          Search
        </button>

        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          type="text"
          id="name"
          name="name"
          placeholder="Author Name"
          value={name}
          disabled
          required
        />

        <button
          onClick={deleteAuthor}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded transition duration-150 mb-4"
        >
          Delete Author
        </button>

        <button
          onClick={closeModel}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 rounded transition duration-150"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteAdminModel;
