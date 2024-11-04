const TopChoiceCard = ({ name, author, src }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="rounded-md bg-white shadow-lg transition-transform duration-200 p-5 flex flex-col items-center hover:shadow-2xl hover:scale-105 transform-gpu">
        <img
          src={src}
          alt={name}
          className="w-24 h-36 rounded-md object-cover mb-3 border-2 border-gray-200 transition-transform duration-200 transform hover:scale-110"
        />
        <p className="text-lg font-semibold text-center text-gray-800">
          {name}
        </p>
        <p className="text-sm text-gray-600 text-center">{author}</p>
      </div>
    </div>
  );
};

export default TopChoiceCard;
