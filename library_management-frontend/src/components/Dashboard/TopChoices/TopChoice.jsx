import TopChoiceCard from "./TopChoiceCard";

const TopChoice = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl">Top Choice</h3>
        <div className="grid grid-cols-1 md:flex justify-around">
          <TopChoiceCard name="Hobbit" author="Lakmal" />
          <TopChoiceCard name="Hobbit" author="Lakmal" />
          <TopChoiceCard name="Hobbit" author="Lakmal" />
          <TopChoiceCard name="Hobbit" author="Lakmal" />
          <TopChoiceCard name="Hobbit" author="Lakmal" />
        </div>
      </div>
    </div>
  );
};

export default TopChoice;
