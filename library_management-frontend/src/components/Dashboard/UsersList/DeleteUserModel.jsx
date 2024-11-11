import { useState } from "react";
import axios from "../../../api/axios";
import Swal from "sweetalert2";
let user = {};
const DeleteUserModel = ({ closeModel }) => {
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  async function searchUser() {
    try {
      const response = await axios.get(`/user/get-by-username/${searchTerm}`);
      if (response?.data) {
        setName(response.data.name);
        user = response.data;
        setSearchTerm("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: "There is no one by that ID...!",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  function deleteUser() {
    if (!user.id) {
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
          const result = await axios.delete(`/user/delete/${user.username}`);
          if (result.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Admin has been deleted.",
              icon: "success",
            });
          }
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
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 h-auto">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Manage User
        </h2>

        <input
          type="text"
          placeholder="Search"
          className="rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="w-full mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 focus:outline-none focus:shadow-outline"
          onClick={searchUser}
        >
          Search
        </button>

        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          disabled
        />

        <button
          onClick={deleteUser}
          className="w-full mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 focus:outline-none focus:shadow-outline"
        >
          Delete User
        </button>

        <button
          onClick={closeModel}
          className="w-full bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded transition duration-200 focus:outline-none focus:shadow-outline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteUserModel;
