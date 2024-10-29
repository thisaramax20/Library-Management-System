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
      const response = await axios.post("/pre-order/save", {
        userId,
        bookId,
      });
      if (response.data) {
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
    <div>
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
            {preOrderList.length !== 0
              ? preOrderList.map((preOrder) => (
                  <tr key={preOrder.userId}>
                    <td className="px-6 py-4">{preOrder.userId}</td>
                    <td className="px-6 py-4">{preOrder.userName}</td>
                    <td className="px-6 py-4">{preOrder.bookId}</td>
                    <td className="px-6 py-4">{preOrder.bookTitle}</td>
                    <td>
                      <GiConfirmed
                        className="hover:cursor-pointer"
                        onClick={() =>
                          processIssue(preOrder.userId, preOrder.bookId)
                        }
                      />
                    </td>
                  </tr>
                ))
              : data.map((preOrder) => (
                  <tr key={preOrder.userId}>
                    <td className="px-6 py-4">{preOrder.userId}</td>
                    <td className="px-6 py-4">{preOrder.userName}</td>
                    <td className="px-6 py-4">{preOrder.bookId}</td>
                    <td className="px-6 py-4">{preOrder.bookTitle}</td>
                    <td>
                      <GiConfirmed
                        className="hover:cursor-pointer"
                        onClick={() =>
                          processIssue(preOrder.userId, preOrder.bookId)
                        }
                      />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button className="border-2 px-8 py-3 rounded-md text-white bg-slate-600 hover:bg-slate-900">
          Proceed with Issue
        </button>
      </div>
    </div>
  );
};

export default PreOrderList;
