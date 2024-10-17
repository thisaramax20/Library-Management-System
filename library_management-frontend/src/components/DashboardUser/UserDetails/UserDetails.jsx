const UserDetails = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold">
          Hello, <span className="text-red-600/60">Jack !</span>
        </h1>
        <h4 className="text-2xl mt-3">
          {new Date().getDate()}.{new Date().getMonth() + 1}.
          {new Date().getFullYear()} | {new Date().getHours()}:
          {new Date().getMinutes()}
        </h4>
      </div>
    </div>
  );
};

export default UserDetails;
