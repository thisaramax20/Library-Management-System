import axios from "../../../api/axios";
import { useEffect, useState } from "react";
import BookIssueModel from "./BookIssueModel";
import { Outlet } from "react-router-dom";

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

  return (
    <div>
      <Outlet />
      {model && <BookIssueModel closeModel={triggerModel} />}
      <div
        className={`bg-slate-100 rounded-md shadow-md shadow-slate-400 ${
          model ? "blur-sm" : ""
        }`}
      >
        <div className="flex justify-evenly">
          <h3 className="text-2xl font-bold p-2">Books Issued</h3>
          <div className="m-2">
            <button
              className="rounded-md bg-slate-300 p-2 hover:scale-105"
              onClick={triggerModel}
            >
              Issue a Book
            </button>
          </div>
        </div>

        <div className="flex justify-around">
          <table className="table-auto text-left">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Book
                </th>
                <th scope="col" className="px-6 py-3">
                  Issued on
                </th>
                <th scope="col" className="px-6 py-3">
                  Return date
                </th>
              </tr>
            </thead>

            <tbody>
              {issueBooks.map((book) => (
                <tr key={book.bookId}>
                  <td className="px-6 py-4">{book.userId}</td>
                  <td className="px-6 py-4">{book.bookId}</td>
                  <td className="px-6 py-4">{book.issuedOn}</td>
                  <td className="px-6 py-4">{book.expectedOn}</td>
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
    </div>
  );
};

export default BookIssue;
