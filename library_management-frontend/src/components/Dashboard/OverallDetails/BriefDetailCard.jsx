const BriefDetailCard = ({ name, number }) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-md w-80 h-52 bg-slate-100 shadow-lg shadow-slate-400 p-8 transition-transform transform hover:scale-105">
        <h4 className="text-4xl font-bold text-gray-800">{number}</h4>
        <p className="text-2xl mt-2 text-gray-600">{name}</p>
      </div>
    </div>
  );
};

export default BriefDetailCard;
