import { IoSearchCircleSharp } from "react-icons/io5";
import { BiSolidBookAdd } from "react-icons/bi";
import { useState } from "react";
import axios from "../../../../api/axios";

const SearchBook = ({ setBook }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookData, setBookData] = useState({});

  async function handleSearch() {
    try {
      const response = await axios.get(`/book/get-by-id/${searchTerm}`);
      if (response?.data) setBookData(response.data);
      setSearchTerm("");
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
          name="search-book"
          id="search-book"
          placeholder="search book"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IoSearchCircleSharp
          className="h-10 w-10 mt-1 hover:cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      <div className="flex justify-center">
        <table className="table-auto text-left">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3">
                Book ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-3">{bookData?.id}</td>
              <td className="px-6 py-3">{bookData?.title}</td>
              <td className="px-6 py-3">{bookData?.author}</td>
              {bookData?.state === "issued" || (
                <td>
                  <BiSolidBookAdd
                    className="hover:cursor-pointer"
                    onClick={() => setBook(bookData)}
                  />
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBook;
