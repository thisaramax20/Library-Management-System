const BriefDetailCard = ({ name, number }) => {
  return (
    <div>
      <div className="rounded-md w-80 h-50 bg-slate-100 shadow-lg shadow-slate-400 p-8">
        <h4 className="text-4xl">{number}</h4>
        <p className="text-2xl mt-4">{name}</p>
      </div>
    </div>
  );
};

export default BriefDetailCard;
