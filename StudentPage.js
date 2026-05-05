import { Link, Outlet } from "react-router-dom";

function StudentPage() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      
      {/* 🔹 Sidebar */}
      <div className="w-64 bg-gray-900 p-5">
        <h2 className="text-2xl font-bold mb-8 text-indigo-400">
          Student Panel
        </h2>

        <nav className="space-y-4">
          <Link to="/student" className="block hover:text-indigo-400">
            Dashboard
          </Link>

          <Link to="/student/tests" className="block hover:text-indigo-400">
            My Tests
          </Link>

          <Link to="/student/results" className="block hover:text-indigo-400">
            Results
          </Link>

          <Link to="/student/profile" className="block hover:text-indigo-400">
            Profile
          </Link>
        </nav>
      </div>

      {/* 🔹 Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>

    </div>
  );
}

export default StudentPage;