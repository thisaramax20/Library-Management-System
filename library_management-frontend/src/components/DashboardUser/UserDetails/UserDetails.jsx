const UserDetails = ({ name }) => {
  return (
    <div className="flex flex-col items-start p-4 bg-slate-50 rounded-md shadow-md">
      <h1 className="text-5xl font-bold mb-2">
        Hello, <span className="text-red-600">{name}!</span>
      </h1>
      <h4 className="text-2xl text-gray-600">
        {new Date().getDate()}.{new Date().getMonth() + 1}.
        {new Date().getFullYear()} | {new Date().getHours()}:
        {new Date().getMinutes().toString().padStart(2, "0")}
      </h4>
    </div>
  );
};

export default UserDetails;
