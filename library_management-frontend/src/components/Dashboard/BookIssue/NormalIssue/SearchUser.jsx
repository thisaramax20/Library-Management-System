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
      if (response?.data) setUserList(response.data);
      setSearchText("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="grid grid-rows-2">
      <div className="flex justify-center">
        <input
          className="rounded-md p-2 m-2 bg-gray-200 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          type="text"
          name="search-user"
          id="search-user"
          placeholder="search user"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IoSearchCircleSharp
          className="h-10 w-10 mt-1 hover:cursor-pointer"
          onClick={searchUser}
        />
      </div>

      <div className="flex justify-center">
        <table className="table-auto text-left">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                NIC
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-3">{userList?.id}</td>
              <td className="px-6 py-3">{userList.name}</td>
              <td className="px-6 py-3">{userList.nic}</td>
              <td>
                <IoMdPersonAdd
                  className="hover:cursor-pointer"
                  onClick={() => setUser(userList)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchUser;
