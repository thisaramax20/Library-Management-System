import axios from "../../../api/axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalFineByMonth = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/issue-books/total-fine-by-month");
        if (response.status === 200) setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const information = {
    labels: data.map((item) => item.month).reverse((a, b) => a - b),
    datasets: [
      {
        label: "Total Fine",
        data: data.map((item) => item.fine).reverse((a, b) => a - b),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Fine by Month",
      },
    },
  };
  return (
    <div>
      <Bar options={options} data={information} />
    </div>
  );
};

export default TotalFineByMonth;
