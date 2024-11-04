import BooksByCategory from "./BooksByCategory";
import CheckoutCountByCategory from "./CheckoutCountByCategory";
import LoginCountOfUsers from "./LoginCountOfUsers";
import TotalFineByMonth from "./TotalFineByMonth";
import UsersJoin from "./UsersJoin";

const Reports = () => {
  return (
    <div className="my-10">
      <h1 className="text-4xl text-center font-bold mb-6">
        View the Statistics and Manage Your Library Effectively
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5">
        <div
          className="shadow-lg rounded-md bg-slate-200 p-5 transition-transform duration-200 hover:shadow-xl hover:scale-105"
          data-aos="fade-right"
        >
          <BooksByCategory />
        </div>
        <div
          className="shadow-lg rounded-md bg-slate-200 p-5 transition-transform duration-200 hover:shadow-xl hover:scale-105"
          data-aos="fade-left"
        >
          <CheckoutCountByCategory />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5">
        <div
          className="shadow-lg rounded-md bg-slate-200 p-5 transition-transform duration-200 hover:shadow-xl hover:scale-105"
          data-aos="fade-right"
        >
          <TotalFineByMonth />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5">
        <div
          className="shadow-lg rounded-md bg-slate-200 p-5 transition-transform duration-200 hover:shadow-xl hover:scale-105"
          data-aos="fade-right"
        >
          <UsersJoin />
        </div>
        <div
          className="shadow-lg rounded-md bg-slate-200 p-5 transition-transform duration-200 hover:shadow-xl hover:scale-105"
          data-aos="fade-left"
        >
          <LoginCountOfUsers />
        </div>
      </div>
    </div>
  );
};

export default Reports;
