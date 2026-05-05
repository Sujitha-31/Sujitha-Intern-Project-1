import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-6 grid grid-cols-4 gap-6">

          <Card title="Total Students" value="120" />
          <Card title="Assessments" value="25" />
          <Card title="Completed Tests" value="80" />
          <Card title="Pending Tests" value="40" />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;