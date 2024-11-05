import { useEffect, useState } from "react";
import axios from "../../../../api/axios";
import { GiConfirmed } from "react-icons/gi";

const PreOrderList = ({ preOrderList }) => {
  const [data, setData] = useState([]);
  async function getAllPreOrders() {
    try {
      const response = await axios.get("/pre-order/get-all");
      if (response.data) setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function processIssue(userId, bookId) {
    try {
      const response = await axios.post("/issue-books/save", {
        userId,
        bookId,
      });
      if (response.statusCode === 200) {
        alert("Issue processed successfully!");
        getAllPreOrders();
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllPreOrders();
  }, []);

  return (
    <div className="flex flex-col items-center p-5 bg-gray-50 my-5">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-md p-6">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th scope="col" className="px-6 py-3 border-b">
                User ID
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                User Name
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                Book ID
              </th>
              <th scope="col" className="px-6 py-3 border-b">
                Title
              </th>
              <th scope="col" className="px-6 py-3 border-b"></th>{" "}
            </tr>
          </thead>
          <tbody>
            {(preOrderList.length > 0 ? preOrderList : data).map((preOrder) => (
              <tr
                key={preOrder.userId}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="px-6 py-4 border-b">{preOrder.userId}</td>
                <td className="px-6 py-4 border-b">{preOrder.userName}</td>
                <td className="px-6 py-4 border-b">{preOrder.bookCode}</td>
                <td className="px-6 py-4 border-b">{preOrder.bookTitle}</td>
                <td className="px-6 py-4 border-b text-center">
                  <GiConfirmed
                    className="text-green-500 hover:text-green-700 hover:cursor-pointer transition-colors"
                    onClick={() =>
                      processIssue(preOrder.userId, preOrder.bookCode)
                    }
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

export default PreOrderList;
