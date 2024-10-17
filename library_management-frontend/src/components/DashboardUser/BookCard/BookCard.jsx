import Button from "../../Button";

const BookCard = ({ name, author, img, genre }) => {
  return (
    <div>
      <div className="rounded-md w-40 h-80 bg-slate-100 shadow-lg shadow-slate-400 p-8">
        <img src={img} alt={name} className="h-20 w-16" />
        <p className="text-sm mt-2">{name}</p>
        <p className="text-sm mt-2">{author}</p>
        <p className="text-sm mt-2">{genre}</p>
        <Button name={"Pre Order"} />
      </div>
    </div>
  );
};

export default BookCard;
