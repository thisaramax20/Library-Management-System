import { useState, useEffect } from "react";
import BookFormModel from "./BookFormModel";
import axios from "../../../api/axios";

const BookList = () => {
  const [model, setModel] = useState(false);
  const triggerModel = () => setModel(!model);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/book/get-first-5");

        if (response?.data !== null) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const getAllBooks = async () => {
    try {
      const response = await axios.get("/book/get-all");
      if (response?.data !== null) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {model && <BookFormModel closeModel={triggerModel} />}
      <div
        className={`bg-slate-100 rounded-md shadow-md shadow-slate-400 ${
          model ? "blur-sm" : ""
        }`}
      >
        <div className="flex justify-evenly">
          <h3 className="text-2xl font-bold p-2">Books List</h3>
          <div className="m-2">
            <button
              className="rounded-md bg-slate-300 p-2 hover:scale-105"
              onClick={triggerModel}
            >
              Add New Book
            </button>
          </div>
        </div>

        <div className="flex justify-around">
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
                <th scope="col" className="px-6 py-3">
                  Available
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((book) => (
                <tr key={book.id}>
                  <td className="px-6 py-4">{book.id}</td>
                  <td className="px-6 py-4">{book.title}</td>
                  <td className="px-6 py-4">{book.authorName}</td>
                  <td className="px-6 py-4">{book.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end m-5">
          <button
            className="border-none text-red-500 hover:font-bold"
            onClick={getAllBooks}
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookList;
