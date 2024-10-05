const TopChoiceCard = ({ name, author }) => {
  return (
    <div>
      <div>
        <img src="" alt="" className="w-20 h-32 rounded-md object-cover" />
        <p>{name}</p>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default TopChoiceCard;
