import { useState } from "react";
import axios from "../../../api/axios";
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
      await axios.put(`/user/update`, {
        ...user,
        name,
        address,
        email,
        nic,
        guardianNic,
        dob,
      });
      alert("User updated successfully!");
      closeModel();
    } catch (error) {
      console.error(error);
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
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed bg-slate-300 shadow-lg shadow-slate-400 p-8 rounded-md w-96 h-auto">
        <input
          type="text"
          placeholder="search"
          className="rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300 p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={searchUser}
        ></button>
        <form>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="text"
            id="address"
            name="address"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="nic"
          >
            NIC
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="text"
            id="nic"
            name="nic"
            placeholder="nic"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="guardianNic"
          >
            Guardian NIC
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="text"
            id="guardian-nic"
            name="guardian-nic"
            placeholder="guardian nic"
            value={guardianNic}
            onChange={(e) => setGuardianNic(e.target.value)}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="dob"
          >
            Date of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="date"
            id="dob"
            name="dob"
            placeholder="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserModel;
