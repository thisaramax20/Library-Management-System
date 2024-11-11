import axios from "../../../api/axios";
import { useEffect, useState } from "react";
import BookIssueModel from "./BookIssueModel";
import { Outlet } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";

const BookIssue = () => {
  const [model, setModel] = useState(false);
  const triggerModel = () => setModel(!model);
  const [issueBooks, setIssueBooks] = useState([]);

  useEffect(() => {
    async function fetchIssueBooks() {
      try {
        const response = await axios.get("/issue-books/get-ongoing");
        if (response?.data) setIssueBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchIssueBooks();
  }, []);

  function markAsReturned(userId, bookId, issuedOn) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Mark it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post("/issue-books/mark-received", {
            userId,
            bookId,
            issuedOn,
          });
          if (response.statusCode === 200) {
            Swal.fire({
              title: "success",
              text: "Issue has been marked success.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Oops",
            text: "Something went wrong...!",
            icon: "error",
          });
        }
      }
    });
  }
  function deleteIssue(userId, bookId, issuedOn) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post("/issue-books/delete", {
            userId,
            bookId,
            issuedOn,
          });
          if (response.statusCode === 200) {
            Swal.fire({
              title: "success",
              text: "Issue has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Oops",
            text: "Something went wrong...!",
            icon: "error",
          });
        }
      }
    });
  }
  return (
    <div>
      <Outlet />
      {model && <BookIssueModel closeModel={triggerModel} />}
      <div
        className={`bg-slate-100 rounded-md shadow-lg transition-transform duration-200 ${
          model ? "blur-sm" : ""
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h3 className="text-2xl font-bold text-gray-800">Books Issued</h3>
          <button
            className="rounded-md bg-slate-300 px-4 py-2 hover:bg-slate-400 transition-colors duration-200"
            onClick={triggerModel}
          >
            Issue a Book
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3 border-b">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3 border-b">
                  Book ID
                </th>
                <th scope="col" className="px-6 py-3 border-b">
                  Issued On
                </th>
                <th scope="col" className="px-6 py-3 border-b">
                  Return Date
                </th>
                <th scope="col" className="px-6 py-3 border-b">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {issueBooks.map((book) => (
                <tr
                  key={book.bookId}
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="px-6 py-4 border-b">{book.userId}</td>
                  <td className="px-6 py-4 border-b">{book.bookId}</td>
                  <td className="px-6 py-4 border-b">{book.issuedOn}</td>
                  <td className="px-6 py-4 border-b">{book.expectedOn}</td>
                  <td className="px-6 py-4 border-b flex space-x-4">
                    <TiDelete
                      size={30}
                      className="hover:cursor-pointer hover:text-red-700 transition-colors duration-200"
                      onClick={() =>
                        deleteIssue(book.userId, book.bookId, book.issuedOn)
                      }
                    />
                    <TiTick
                      size={30}
                      className="hover:cursor-pointer hover:text-green-700 transition-colors duration-200"
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
    </div>
  );
};

export default BookIssue;
