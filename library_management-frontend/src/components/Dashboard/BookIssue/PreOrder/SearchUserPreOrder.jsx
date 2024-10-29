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
          onClick={searchPreOrder}
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
                Book ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((preOrder) => (
                <tr key={preOrder.userId}>
                  <td className="px-6 py-4">{preOrder.userId}</td>
                  <td className="px-6 py-4">{preOrder.username}</td>
                  <td className="px-6 py-4">{preOrder.bookCode}</td>
                  <td className="px-6 py-4">{preOrder.title}</td>
                  <td>
                    <IoIosAddCircle
                      className="hover:cursor-pointer"
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
