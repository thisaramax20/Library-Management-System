import BooksByCategory from "./BooksByCategory";
import CheckoutCountByCategory from "./CheckoutCountByCategory";
import LoginCountOfUsers from "./LoginCountOfUsers";
import TotalFineByMonth from "./TotalFineByMonth";
import UsersJoin from "./UsersJoin";

const Reports = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">
        View the statistics and Manage your library well
      </h1>
      <div className="grid grid-cols-1 md:md:grid-cols-2 m-5">
        <div
          className="m-5 shadow-lg shadow-slate-600 rounded-md z-50 bg-slate-200 p-5"
          data-aos="fade-right"
        >
          <BooksByCategory />
        </div>
        <div
          className="m-5 shadow-lg shadow-slate-600 rounded-md z-50 bg-slate-200 p-5"
          data-aos="fade-left"
        >
          <CheckoutCountByCategory />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 m-5">
        <div
          className="m-5 shadow-lg shadow-slate-600 rounded-md z-50 bg-slate-200 p-5"
          data-aos="fade-right"
        >
          <TotalFineByMonth />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 m-5">
        <div
          className="m-5 shadow-lg shadow-slate-600 rounded-md z-50 bg-slate-200 p-5"
          data-aos="fade-right"
        >
          <UsersJoin />
        </div>
        <div
          className="m-5 shadow-lg shadow-slate-600 rounded-md z-50 bg-slate-200 p-5"
          data-aos="fade-left"
        >
          <LoginCountOfUsers />
        </div>
      </div>
    </div>
  );
};

export default Reports;
