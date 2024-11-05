import { useEffect, useState } from "react";
import axios from "../../../api/axios";
const categoryList = [
  {
    id: 1,
    name: "Fiction",
  },
  {
    id: 2,
    name: "Education",
  },
  {
    id: 3,
    name: "Social",
  },
];
const BookFormModel = ({ closeModel }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [isbn, setIsbn] = useState("");

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("title", title);
    formData.append("author", author);
    formData.append("category", category);
    formData.append("isbn", isbn);
    try {
      const response = await axios.post("/book/save", formData);
      if (response.status === 201) {
        closeModel();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [authorList, setAuthorList] = useState([]);
  useEffect(() => {
    async function fetchAuthors() {
      try {
        const response = await axios.get("/author/get-all");
        if (response?.data) {
          setAuthorList(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchAuthors();
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add a New Book
        </h2>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-1 mt-4"
            htmlFor="author"
          >
            Author
          </label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="rounded-md border-2 border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>
              Select an author
            </option>
            {authorList &&
              authorList.map((data) => (
                <option key={data.id} value={data.authorId}>
                  {data.name}
                </option>
              ))}
          </select>

          <label
            className="block text-gray-700 text-sm font-semibold mb-1 mt-4"
            htmlFor="image"
          >
            Select Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="file"
            id="image"
            onChange={handleFile}
          />

          <label
            className="block text-gray-700 text-sm font-semibold mb-1 mt-4"
            htmlFor="category"
          >
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-md border-2 border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categoryList.map((data) => (
              <option key={data.id} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>

          <label
            className="block text-gray-700 text-sm font-semibold mb-1 mt-4"
            htmlFor="isbn"
          >
            ISBN
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-transform duration-200 transform hover:scale-105"
            >
              Proceed
            </button>
            <button
              type="button"
              onClick={closeModel}
              className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-md transition-transform duration-200 transform hover:scale-105 ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookFormModel;
