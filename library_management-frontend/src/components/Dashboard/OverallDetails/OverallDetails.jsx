import BriefDetailCard from "./BriefDetailCard";

const details = [
  {
    name: "Total Visitors",
    number: 1223,
  },
  {
    name: "Borrowed Books",
    number: 730,
  },
  {
    name: "Overdue Books",
    number: 201,
  },
];

const OverallDetails = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold">
          Hello, <span className="text-red-600/60">Jack !</span>
        </h1>
        <h4 className="text-2xl mt-3">
          {new Date().getDate()}.{new Date().getMonth() + 1}.
          {new Date().getFullYear()} | {new Date().getHours()}:
          {new Date().getMinutes()}
        </h4>
      </div>

      <div className="grid grid-cols-1 gap-4 md:flex justify-around">
        {details.map((card) => (
          <BriefDetailCard
            name={card.name}
            number={card.number}
            key={card.name}
          />
        ))}
      </div>
    </div>
  );
};

export default OverallDetails;
