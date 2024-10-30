import { useState } from "react";
import axios from "../../../api/axios";

const UserFormModel = ({ closeModel }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [guardianNic, setGuardianNic] = useState("");
  const [dob, setDob] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/user/save", {
        name,
        address,
        email,
        nic,
        guardianNic,
        dob,
      });
      if (response?.status === 201) {
        closeModel();
        alert("User added successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed bg-slate-300 shadow-lg shadow-slate-400 p-8 rounded-md w-96 h-auto">
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="dob"
          >
            DOB
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
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
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="guardian-nic"
          >
            Guardian NIC
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="text"
            id="guardian-nic"
            value={guardianNic}
            onChange={(e) => setGuardianNic(e.target.value)}
          />
        </form>

        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md bg-slate-300 p-2 hover:scale-105"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default UserFormModel;
