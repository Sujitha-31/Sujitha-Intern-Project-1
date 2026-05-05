import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function PerformanceChart() {

  const data = {
    labels: ["Math", "Science", "English", "Programming", "AI"],
    datasets: [
      {
        label: "Average Marks",
        data: [75, 82, 68, 90, 85],
        backgroundColor: "rgba(124, 58, 237, 0.7)",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Student Performance</h2>
      <Bar data={data} />
    </div>
  );
}

export default PerformanceChart;