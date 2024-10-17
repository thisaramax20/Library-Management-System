import Button from "../Button";
import BookCard from "./BookCard/BookCard";
import UserDetails from "./UserDetails/UserDetails";

const books = [
  {
    name: "Lord of the rings",
    author: "JR Tolkin",
    img: "",
    genre: "Fantasy",
  },
  {
    name: "Lord of the rings",
    author: "JR Tolkin",
    img: "",
    genre: "Fantasy",
  },
  {
    name: "Lord of the rings",
    author: "JR Tolkin",
    img: "",
    genre: "Fantasy",
  },
  {
    name: "Lord of the rings",
    author: "JR Tolkin",
    img: "",
    genre: "Fantasy",
  },
  {
    name: "Lord of the rings",
    author: "JR Tolkin",
    img: "",
    genre: "Fantasy",
  },
];

const filterData = ["Fantasy", "Education", "Social", "Most Popular"];

const DashboardUser = () => {
  return (
    <div>
      <div>
        <UserDetails />
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {filterData.map((name) => (
            <Button name={name} key={name} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {books.map((card) => (
            <BookCard
              name={card.name}
              author={card.author}
              genre={card.genre}
              img={card.img}
              key={card.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
