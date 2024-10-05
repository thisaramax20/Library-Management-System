const Button = ({ name }) => {
  return (
    <div>
      <button className="rounded-md bg-slate-300 p-2 hover:scale-105">
        {name}
      </button>
    </div>
  );
};

export default Button;
