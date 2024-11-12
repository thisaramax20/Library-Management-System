import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ name }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center items-start p-4 bg-slate-50 rounded-md shadow-md">
      <div className="flex-grow">
        <h1 className="text-5xl font-bold mb-2">
          Hello, <span className="text-red-600">{name}!</span>
        </h1>
        <h4 className="text-2xl text-gray-600">
          {new Date().getDate()}.{new Date().getMonth() + 1}.
          {new Date().getFullYear()} | {new Date().getHours()}:
          {new Date().getMinutes().toString().padStart(2, "0")}
        </h4>
      </div>

      <RiLogoutBoxLine
        size={50}
        className="cursor-pointer text-red-600 transition-transform duration-200 hover:scale-110"
        onClick={handleLogout}
      />
    </div>
  );
};

export default UserDetails;
