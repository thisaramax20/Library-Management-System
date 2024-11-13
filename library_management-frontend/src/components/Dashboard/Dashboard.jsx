import AuthorList from "../AuthorList/AuthorList";
import OverdueBookList from "../OverdueBookList/OverdueBookList";
import BookIssue from "./BookIssue/BookIssue";
import BookList from "./BooksList/BookList";
import OverallDetails from "./OverallDetails/OverallDetails";
import TopChoice from "./TopChoices/TopChoice";
import UserList from "./UsersList/UserList";

const Dashboard = () => {
  const authenticated =
    JSON.parse(localStorage.getItem("token"))?.auth === "yes";
  return authenticated ? (
    <div>
      <OverallDetails />
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <UserList />
        <BookList />
      </div>
      <div>
        <TopChoice />
      </div>
      <OverdueBookList />
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <BookIssue />
        <AuthorList />
      </div>
    </div>
  ) : (
    <div>Not Authenticated</div>
  );
};

export default Dashboard;
