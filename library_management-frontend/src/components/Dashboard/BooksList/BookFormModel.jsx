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
      <div className="fixed bg-slate-300 shadow-lg shadow-slate-400 p-8 rounded-md w-96 h-auto">
        <form>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="author"
          >
            Author
          </label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
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
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="quantity"
          >
            Select Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="file"
            id="image"
            onChange={handleFile}
          />

          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
            htmlFor="isbn"
          >
            ISBN
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-400"
            type="text"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </form>

        <button
          onClick={handleSubmit}
          className="rounded-md bg-slate-300 p-2 hover:scale-105"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default BookFormModel;
