import axios from "../../../api/axios";

const BookCard = ({ name, author, img, genre, bookCode, userId }) => {
  async function preOrder() {
    try {
      const response = await axios.post("/pre-order/save", {
        bookCode,
        userId,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div data-aos="fade-left">
      <div className="rounded-md w-60 bg-white shadow-lg transition-transform duration-200 hover:shadow-2xl p-6 flex flex-col items-center">
        <img
          src={img}
          alt={name}
          className="rounded-md h-48 w-32 object-cover mb-4 border-2 border-gray-200 transition-transform duration-200 hover:scale-105"
        />
        <p className="text-2xl font-bold text-gray-800 tracking-tight text-center">
          {name}
        </p>
        <p className="text-lg text-gray-700 mt-1">{author}</p>
        <p className="text-sm text-gray-500 mt-1">{genre}</p>
        <button
          className="mt-4 rounded-md bg-blue-500 text-white p-2 transition-transform duration-200 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={preOrder}
        >
          Pre Order
        </button>
      </div>
    </div>
  );
};

export default BookCard;
