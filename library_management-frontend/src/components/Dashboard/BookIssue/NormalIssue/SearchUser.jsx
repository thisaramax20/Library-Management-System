import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { useState } from "react";
import axios from "../../../../api/axios";

const SearchUser = ({ setUser }) => {
  const [searchText, setSearchText] = useState("");
  const [userList, setUserList] = useState({});

  async function searchUser() {
    try {
      const response = await axios.get(`/user/get-by-username/${searchText}`);
      if (response?.data) setUserList([response.data]);
      setSearchText("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center shadow-md shadow-slate-500 rounded-md p-5 bg-white">
      <div className="flex justify-center mb-5">
        <input
          className="rounded-md px-4 py-2 m-2 bg-gray-200 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:shadow-md transition duration-200"
          type="text"
          name="search-user"
          id="search-user"
          placeholder="Search user"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IoSearchCircleSharp
          className="h-10 w-10 mt-1 hover:cursor-pointer text-blue-500 hover:text-blue-700 transition duration-200"
          onClick={searchUser}
          aria-label="Search User"
        />
      </div>

      <div className="overflow-auto w-full">
        <table className="table-auto text-left w-full bg-gray-100 rounded-lg">
          <thead>
            <tr className="bg-gray-300">
              <th scope="col" className="px-6 py-3 text-gray-800 font-semibold">
                User ID
              </th>
              <th scope="col" className="px-6 py-3 text-gray-800 font-semibold">
                User Name
              </th>
              <th scope="col" className="px-6 py-3 text-gray-800 font-semibold">
                NIC
              </th>
              <th scope="col" className="px-6 py-3 text-gray-800 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0 ? (
              userList.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-200 transition duration-200"
                >
                  <td className="px-6 py-3">{user.id}</td>
                  <td className="px-6 py-3">{user.name}</td>
                  <td className="px-6 py-3">{user.nic}</td>
                  <td className="px-6 py-3">
                    <IoMdPersonAdd
                      className="text-blue-500 hover:text-blue-700 hover:scale-105 transition duration-200"
                      onClick={() => setUser(user)}
                      aria-label="Add User"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-3 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchUser;
