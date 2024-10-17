import TopChoiceCard from "./TopChoiceCard";

const details = [
  {
    name: "Hobbit",
    author: "JR Tolkin",
  },
  {
    name: "Hobbit",
    author: "JR Tolkin",
  },
  {
    name: "Hobbit",
    author: "JR Tolkin",
  },
  {
    name: "Hobbit",
    author: "JR Tolkin",
  },
  {
    name: "Hobbit",
    author: "JR Tolkin",
  },
  {
    name: "Hobbit",
    author: "JR Tolkin",
  },
];

const TopChoice = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl">Top Choice</h3>
        <div className="grid grid-cols-1 md:flex justify-around">
          {details.map((card) => (
            <TopChoiceCard
              name={card.name}
              author={card.author}
              key={card.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopChoice;
