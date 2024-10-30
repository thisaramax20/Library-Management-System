const TopChoiceCard = ({ name, author, src }) => {
  return (
    <div>
      <div>
        <img
          src={src}
          alt={name}
          className="w-20 h-32 rounded-md object-cover"
        />
        <p>{name}</p>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default TopChoiceCard;
