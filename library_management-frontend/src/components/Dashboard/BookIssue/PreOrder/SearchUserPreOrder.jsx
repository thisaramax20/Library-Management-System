import { IoSearchCircleSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import axios from "../../../../api/axios";
import { useState } from "react";

const SearchUserPreOrder = ({ setPreOrderList }) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  async function searchPreOrder() {
    try {
      const response = await axios.get(`pre-order/get-by-userId/${searchText}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center p-5 bg-gray-50">
      <div className="flex flex-row justify-center shadow-md shadow-slate-500 rounded-md p-5 mb-5 bg-white">
        <div className="flex items-center justify-center px-10">
          <input
            className="rounded-md p-2 m-2 bg-gray-200 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            type="text"
            name="search-user"
            id="search-user"
            placeholder="Search user"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IoSearchCircleSharp
            className="h-10 w-10 mt-1 text-blue-600 hover:cursor-pointer transition-transform transform hover:scale-110"
            onClick={searchPreOrder}
          />
        </div>
      </div>

      <div className="flex justify-center w-full">
        <table className="table-auto text-left bg-white shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-200">
              <th scope="col" className="px-6 py-3 font-semibold text-gray-700">
                User ID
              </th>
              <th scope="col" className="px-6 py-3 font-semibold text-gray-700">
                User Name
              </th>
              <th scope="col" className="px-6 py-3 font-semibold text-gray-700">
                Book ID
              </th>
              <th scope="col" className="px-6 py-3 font-semibold text-gray-700">
                Title
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((preOrder) => (
                <tr
                  key={preOrder.userId}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="px-6 py-4 border-b">{preOrder.userId}</td>
                  <td className="px-6 py-4 border-b">{preOrder.username}</td>
                  <td className="px-6 py-4 border-b">{preOrder.bookCode}</td>
                  <td className="px-6 py-4 border-b">{preOrder.title}</td>
                  <td className="px-6 py-4 border-b">
                    <IoIosAddCircle
                      className="hover:cursor-pointer text-green-500 hover:scale-125 transition-transform"
                      onClick={() => setPreOrderList(data)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchUserPreOrder;
