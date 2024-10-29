import BriefDetailCard from "./BriefDetailCard";
import axios from "../../../api/axios";
import { useEffect, useState } from "react";

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
  const [data, setData] = useState(details);
  // Fetching data from the API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/issue-books/get-counts");
        if (response?.data !== null) {
          setData([
            {
              name: "Total Visitors",
              number: response.data?.totalVisitors || 0,
            },
            {
              name: "Borrowed Books",
              number: response.data.borrowed || 0,
            },
            {
              name: "Overdue Books",
              number: response.data.overdue || 0,
            },
          ]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
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
        {data.map((card) => (
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
