import { IoSearchCircleSharp } from "react-icons/io5";
import { BiSolidBookAdd } from "react-icons/bi";
import { useState } from "react";
import axios from "../../../../api/axios";
import Swal from "sweetalert2";

const SearchBook = ({ setBook }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookData, setBookData] = useState({});

  async function handleSearch() {
    try {
      const response = await axios.get(`/book/get-by-id/${searchTerm}`);
      if (response?.data) {
        setBookData(response.data);
        setSearchTerm("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: "There is no book by that ID...!",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center shadow-md shadow-slate-500 rounded-md p-5 my-5 bg-white">
      <div className="flex items-center mb-5">
        <input
          className="rounded-md p-2 m-2 bg-gray-200 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
          type="text"
          name="search-book"
          id="search-book"
          placeholder="Search book"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IoSearchCircleSharp
          className="h-10 w-10 hover:cursor-pointer text-blue-500 hover:text-blue-700 transition duration-200"
          onClick={handleSearch}
          aria-label="Search Book"
        />
      </div>

      <div className="overflow-auto w-full">
        <table className="table-auto text-left w-full bg-gray-100 rounded-lg">
          <thead>
            <tr className="bg-gray-300">
              <th scope="col" className="px-6 py-3 text-gray-800 font-semibold">
                Book ID
              </th>
              <th scope="col" className="px-6 py-3 text-gray-800 font-semibold">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-gray-800 font-semibold">
                Author
              </th>
              <th scope="col" className="px-6 py-3 text-gray-800 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bookData ? (
              <tr className="hover:bg-gray-200 transition duration-200">
                <td className="px-6 py-3">{bookData.id}</td>
                <td className="px-6 py-3">{bookData.title}</td>
                <td className="px-6 py-3">{bookData.authorName}</td>
                {bookData.state !== "issued" && (
                  <td className="px-6 py-3">
                    <BiSolidBookAdd
                      className="text-blue-500 hover:text-blue-700 hover:scale-105 transition duration-200"
                      onClick={() => setBook(bookData)}
                      aria-label="Add Book"
                    />
                  </td>
                )}
              </tr>
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-3 text-gray-500">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBook;
