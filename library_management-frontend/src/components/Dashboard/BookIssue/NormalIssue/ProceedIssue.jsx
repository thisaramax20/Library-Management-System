import axios from "../../../../api/axios";

const ProceedIssue = ({ user, book }) => {
  async function handleIssue() {
    try {
      const response = await axios.post("/issue-books/save", {
        userId: user.username,
        bookId: book.bookCode,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="flex justify-center">
        <table className="table-auto text-left">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Book ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-3">{user?.id}</td>
              <td className="px-6 py-3">{user?.name}</td>
              <td className="px-6 py-3">{book?.id}</td>
              <td className="px-6 py-3">{book?.title}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button
          className="border-2 px-8 py-3 rounded-md text-white bg-slate-600 hover:bg-slate-900"
          onClick={handleIssue}
        >
          Proceed with Issue
        </button>
      </div>
    </div>
  );
};

export default ProceedIssue;
