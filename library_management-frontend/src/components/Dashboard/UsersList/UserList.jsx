import Button from "../../Button";

const UserList = () => {
  return (
    <div className="bg-slate-100 rounded-md shadow-md shadow-slate-400">
      <div className="flex justify-evenly">
        <h3 className="text-2xl font-bold p-2">Users List</h3>
        <div className="m-2">
          <Button name="Add New User" />
        </div>
      </div>

      <div className="flex justify-around">
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
                Books Issued
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4">001</td>
              <td className="px-6 py-4">Kamal</td>
              <td className="px-6 py-4">08</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end m-5">
        <button className="border-none text-red-500 hover:font-bold">
          See All
        </button>
      </div>
    </div>
  );
};

export default UserList;
