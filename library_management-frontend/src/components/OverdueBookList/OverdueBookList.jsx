import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { TiTick } from "react-icons/ti";

const OverdueBookList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/issue-books/get-overdue");
        if (response?.data) setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  async function markAsReturned(userId, bookId, issuedOn) {
    try {
      await axios.post("/issue-books/mark-received", {
        userId,
        bookId,
        issuedOn,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-slate-100 rounded-md shadow-md shadow-slate-400">
      <div className="flex justify-start">
        <h3 className="text-2xl font-bold p-2">Overdue Books List</h3>
      </div>

      <div className="flex justify-around">
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
              <th scope="col" className="px-6 py-3">
                Overdue
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((book) => (
              <tr className="border-b" key={book.userId}>
                <td className="px-6 py-4">{book.userName}</td>
                <td className="px-6 py-4">{book.bookId}</td>
                <td className="px-6 py-4">{book.bookTitle}</td>
                <td className="px-6 py-4">{book.fine}</td>
                <td className="px-6 py-4">
                  <TiTick
                    onClick={() =>
                      markAsReturned(data.userId, data.bookId, data.issuedOn)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end m-5">
        <button className="border-none text-red-500 hover:font-bold">
          See All
        </button>
      </div>
    </div>
  );
};

export default OverdueBookList;
