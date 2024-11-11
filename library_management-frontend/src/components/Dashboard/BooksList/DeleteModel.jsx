import { useState } from "react";
import axios from "../../../api/axios";
import Swal from "sweetalert2";
let book = {};
const DeleteModel = ({ closeModel }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  const [bookFound, setBookFound] = useState(false);
  async function searchBook() {
    try {
      const response = await axios.get(`/book/get-by-id/${searchTerm}`);
      if (response?.data) {
        setTitle(response.data.title);
        book = response.data;
        setBookFound(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: "There is no one by that ID...!",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  function deleteBook() {
    if (!book.id) {
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`/book/delete/${book.bookCode}`);
          Swal.fire({
            title: "Deleted!",
            text: "Book has been deleted.",
            icon: "success",
          });
          closeModel();
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "error",
            text: "Oops.",
            icon: "Something went wrong...!",
          });
        }
      }
    });
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Delete Book
        </h2>

        <input
          type="text"
          placeholder="Search for a book..."
          className="shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 ${
            !searchTerm ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={searchBook}
          disabled={!searchTerm}
        >
          Search
        </button>

        {bookFound ? (
          <>
            <label
              className="block text-gray-700 text-sm font-semibold mb-1 mt-4"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={title}
              readOnly
            />
            <button
              onClick={deleteBook}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
            >
              Delete Book
            </button>
          </>
        ) : (
          <p className="text-center text-red-500 mt-4">
            No book found. Please try again.
          </p>
        )}

        <button
          onClick={closeModel}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 mt-4"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModel;
