import TopChoiceCard from "./TopChoiceCard";
import axios from "../../../api/axios";
import { useEffect, useState } from "react";

const TopChoice = () => {
  const [topChoices, setTopChoices] = useState([]);
  useEffect(() => {
    async function fetchTopChoices() {
      try {
        const response = await axios.get("book/get-top-five");

        if (response?.data !== null) setTopChoices(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTopChoices();
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl">Top Choice</h3>
        <div className="grid grid-cols-1 md:flex justify-around">
          {topChoices.map((card) => (
            <TopChoiceCard
              name={card.title}
              author={card.authorName}
              key={card.id}
              src={card.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopChoice;
