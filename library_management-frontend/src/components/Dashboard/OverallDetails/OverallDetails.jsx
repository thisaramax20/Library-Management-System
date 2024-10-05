import BriefDetailCard from "./BriefDetailCard";

const totalVisitors = 1223;
const borrowedBooks = 730;
const overdueBooks = 201;

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
        <BriefDetailCard name="Total Visitors" number={totalVisitors} />
        <BriefDetailCard name="Borrowed Books" number={borrowedBooks} />
        <BriefDetailCard name="Overdue Books" number={overdueBooks} />
      </div>
    </div>
  );
};

export default OverallDetails;
