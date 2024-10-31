import BookCard from "./BookCard/BookCard";
import UserDetails from "./UserDetails/UserDetails";
import axios from "../../api/axios";
import { useEffect, useState } from "react";

const filterData = [
  { name: "Fantasy", api: "/book/get-by-category/Fiction" },
  { name: "Education", api: "/book/get-by-category/Education" },
  { name: "Social", api: "/book/get-by-category/Social" },
  { name: "Most Popular", api: "/book/get-top-five" },
];

let sliceBottom = 0;
let sliceTop = 5;

const DashboardUser = () => {
  const [data, setData] = useState([]);
  const [changedFilter, setChangedFilter] = useState(null);
  const handleFilterChange = (filter) => {
    setChangedFilter(filterData.filter((item) => item.name === filter));
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const api = changedFilter ? changedFilter[0].api : "/book/get-first-5";
        const response = await axios.get(api);
        if (response?.data) setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [changedFilter]);
  return (
    <div className="mx-4">
      <div className="my-5">
        <UserDetails />
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 my-5">
          {filterData.map((name) => (
            <button
              className="rounded-md bg-slate-300 p-2 hover:scale-105"
              key={name.name}
              onClick={() => handleFilterChange(name.name)}
            >
              {name.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-4">
          {data.slice(sliceBottom, sliceTop).length != 0 ? (
            data
              .slice(sliceBottom, sliceTop)
              .map((card) => (
                <BookCard
                  name={card.title}
                  author={card.authorName}
                  genre={card.category}
                  img={card.src}
                  key={card.id}
                  bookCode={card.bookCode}
                />
              ))
          ) : (
            <h2 className="text-2xl text-center">End of the list... 🔚</h2>
          )}
        </div>
        <div className="flex justify-end my-4">
          <button
            className="rounded-md bg-slate-300 p-2 hover:scale-105"
            onClick={() => {
              setData(data.slice(sliceBottom + 5, sliceTop + 5));
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
