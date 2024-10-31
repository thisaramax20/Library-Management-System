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
      <div className="rounded-md w-60 h-auto bg-slate-100 shadow-lg shadow-slate-400 p-8">
        <img src={img} alt={name} className="rounded-md h-48 w-32" />
        <p className="text-2xl tracking-tight font-bold mt-2">{name}</p>
        <p className="text-lg mt-2">{author}</p>
        <p className="text-sm mt-2">{genre}</p>
        <button
          className="rounded-md bg-slate-300 p-2 hover:scale-105"
          onClick={preOrder}
        >
          Pre Order
        </button>
      </div>
    </div>
  );
};

export default BookCard;
