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
    <div className="my-10">
      <h3 className="text-3xl font-bold my-5 text-center text-gray-800">
        Top Choice
      </h3>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="fade-left"
      >
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
  );
};

export default TopChoice;
