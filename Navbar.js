import { Link } from "react-router-dom";

function Navbar() {
  const role = "student-dashboard";

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">

      <h1 className="font-bold text-lg">Dashboard</h1>

      <div className="flex gap-6 items-center">

        <Link to={`/${role}/notifications`}>
          <span className="text-2xl hover:text-blue-500">🔔</span>
        </Link>

        <Link to={`/${role}/profile`} className="flex items-center gap-2">
          <span className="text-2xl">👤</span>
          <span>User</span>
        </Link>

      </div>

    </div>
  );
}

export default Navbar;