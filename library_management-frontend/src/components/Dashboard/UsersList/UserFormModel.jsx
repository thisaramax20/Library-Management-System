import { useState } from "react";
import axios from "../../../api/axios";
import Swal from "sweetalert2";

const UserFormModel = ({ closeModel }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [guardianNic, setGuardianNic] = useState("");
  const [dob, setDob] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    if (
      name === undefined ||
      name === "" ||
      address === undefined ||
      address === "" ||
      email === undefined ||
      email === "" ||
      dob === undefined ||
      dob === "" ||
      nic === undefined ||
      nic === ""
    ) {
      return;
    }
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
        Swal.fire({
          icon: "success",
          title: "OK!",
          text: "User has been saved...!",
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
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
            User Information
          </h2>

          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Name"
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-2 mt-4"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            aria-label="Address"
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-2 mt-4"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-2 mt-4"
            htmlFor="dob"
          >
            DOB
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            aria-label="Date of Birth"
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-2 mt-4"
            htmlFor="nic"
          >
            NIC
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="nic"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            aria-label="NIC"
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-2 mt-4"
            htmlFor="guardian-nic"
          >
            Guardian NIC
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="guardian-nic"
            value={guardianNic}
            onChange={(e) => setGuardianNic(e.target.value)}
            aria-label="Guardian NIC"
          />

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="rounded-3xl px-4 py-2 bg-green-500 text-white font-semibold transition-transform duration-200 hover:scale-105"
            >
              Proceed
            </button>
            <button
              type="button"
              onClick={closeModel}
              className="rounded-3xl px-4 py-2 bg-red-500 text-white font-semibold transition-transform duration-200 hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormModel;
