import { useState } from "react";
import axios from "../../../api/axios";
import Swal from "sweetalert2";
let user = {};
const UpdateUserModel = ({ closeModel }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [email, setEmail] = useState(user.email);
  const [nic, setNic] = useState(user.nic);
  const [guardianNic, setGuardianNic] = useState(user.guardian_nic);
  const [dob, setDob] = useState(user.dob);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await axios.put(`/user/update`, {
        ...user,
        name,
        address,
        email,
        nic,
        guardianNic,
        dob,
      });
      if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "OK...",
          text: "Changes has been updated...!",
        });
      }
      closeModel();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }
  async function searchUser() {
    try {
      const response = await axios.get(`/user/get-by-username/${searchTerm}`);
      if (response?.data) {
        user = response.data;
        setName(user.name);
        setAddress(user.address);
        setEmail(user.email);
        setNic(user.nic);
        setGuardianNic(user.guardianNic);
        setDob(user.dob);
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
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 h-auto">
        <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
          User Management
        </h2>

        <input
          type="text"
          placeholder="Search"
          className="rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="w-full mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline transition duration-200"
          onClick={searchUser}
        >
          Search
        </button>

        <form onSubmit={handleSubmit}>
          <label
            className="block text-gray-700 text-sm font-semibold mb-2 mt-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="nic"
          >
            NIC
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            type="text"
            id="nic"
            name="nic"
            placeholder="Enter NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="guardianNic"
          >
            Guardian NIC
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            type="text"
            id="guardian-nic"
            name="guardian-nic"
            placeholder="Enter Guardian NIC"
            value={guardianNic}
            onChange={(e) => setGuardianNic(e.target.value)}
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="dob"
          >
            Date of Birth
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />

          <div className="flex justify-between mt-4">
            <button
              className="rounded-3xl px-4 py-2 bg-blue-500 text-white font-semibold transition duration-200 hover:bg-blue-700"
              type="submit"
            >
              Update
            </button>
            <button
              className="rounded-3xl px-4 py-2 bg-red-500 text-white font-semibold transition duration-200 hover:bg-red-700"
              type="button"
              onClick={closeModel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserModel;
