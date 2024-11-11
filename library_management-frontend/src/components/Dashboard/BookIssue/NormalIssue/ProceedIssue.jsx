import axios from "../../../../api/axios";
import Swal from "sweetalert2";

const ProceedIssue = ({ user, book }) => {
  async function handleIssue() {
    try {
      const response = await axios.post("/issue-books/save", {
        userId: user.username,
        bookId: book.bookCode,
      });
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "OK...",
          text: "Book issued successful...!",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while issuing the book. Please try again later.",
      });
    }
  }

  return (
    <div className="flex flex-col items-center shadow-lg shadow-slate-500 rounded-md p-5 my-5 bg-white">
      <div className="flex justify-center w-full mb-5">
        <table className="table-auto text-left w-full max-w-4xl">
          <thead>
            <tr className="bg-slate-300 text-gray-800">
              <th scope="col" className="px-6 py-3 font-semibold">
                User ID
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                User Name
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Book ID
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {user && book ? (
              <tr className="hover:bg-gray-100 transition duration-200">
                <td className="px-6 py-3 border-b">{user.id}</td>
                <td className="px-6 py-3 border-b">{user.name}</td>
                <td className="px-6 py-3 border-b">{book.id}</td>
                <td className="px-6 py-3 border-b">{book.title}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="4" className="text-center px-6 py-3 text-gray-500">
                  No user or book selected.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button
          className="border-2 border-slate-600 px-8 py-3 rounded-md text-white bg-slate-600 hover:bg-slate-800 transition duration-200"
          onClick={handleIssue}
        >
          Proceed with Issue
        </button>
      </div>
    </div>
  );
};

export default ProceedIssue;
