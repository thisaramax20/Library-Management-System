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
    <div className="bg-slate-100 rounded-md shadow-lg p-4">
      <div className="flex justify-start mb-4">
        <h3 className="text-2xl font-bold text-gray-800">Overdue Books List</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
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
              <th scope="col" className="px-6 py-3 border-b">
                Overdue
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((book) => (
              <tr
                key={book.userId}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-6 py-4 border-b">{book.userId}</td>
                <td className="px-6 py-4 border-b">{book.userName}</td>
                <td className="px-6 py-4 border-b">{book.bookCode}</td>
                <td className="px-6 py-4 border-b">{book.bookTitle}</td>
                <td className="px-6 py-4 border-b">
                  <TiTick
                    className="cursor-pointer text-green-500 hover:text-green-700 transition-colors duration-200"
                    onClick={() =>
                      markAsReturned(book.userId, book.bookId, book.issuedOn)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end m-5">
        <button className="border-none text-red-500 hover:font-bold transition-all duration-200">
          See All
        </button>
      </div>
    </div>
  );
};

export default OverdueBookList;
