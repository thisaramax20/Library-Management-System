import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { MdAddBox } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import BookFormModel from "./BookFormModel";
import UpdateModel from "./UpdateModel";
import DeleteModel from "./DeleteModel";
const AllBooks = () => {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const triggerModel = () => setModel(!model);
  const [modelUpdate, setModelUpdate] = useState(false);
  const triggerModelUpdate = () => setModelUpdate(!modelUpdate);
  const [modelDelete, setModelDelete] = useState(false);
  const triggerModelDelete = () => setModelDelete(!modelDelete);
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get("/book/get-all");
        if (response?.data) setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBooks();
  }, []);
  return (
    <div>
      <div className="m-5">
        <h1 className="text-4xl font-bold text-center">
          Manage All The Books Here
        </h1>
      </div>
      {model && <BookFormModel closeModel={triggerModel} />}
      {modelUpdate && <UpdateModel closeModel={triggerModelUpdate} />}
      {modelDelete && <DeleteModel closeModel={triggerModelDelete} />}
      <div className="grid grid-cols-1 m-5 md:flex justify-around">
        <div className="bg-slate-200 p-5 rounded-md shadow-md h-96">
          <ul>
            <li className="m-8">
              <input
                type="text"
                placeholder="search"
                className="rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300 p-2"
              />
            </li>
            <li className="m-8">
              <MdAddBox size={30} onClick={triggerModel} /> Add New Book
            </li>
            <li className="m-8">
              <FaEdit size={30} onClick={triggerModelUpdate} /> Edit Books
            </li>
            <li className="m-8">
              <RiDeleteBin4Fill size={30} onClick={triggerModelDelete} /> Delete
              Books
            </li>
          </ul>
        </div>

        <div className="bg-slate-200 p-5 rounded-md shadow-md">
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
      </div>
    </div>
  );
};

export default AllBooks;
