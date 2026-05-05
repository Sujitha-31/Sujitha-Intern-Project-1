import { link }from "react-router-dom" ;
function AdminPage() {
  return (
    <div className="flex h-screen bg-black text-white">

      {/* 🔹 Sidebar */}
      <div className="w-64 bg-gray-900 p-5">
        <h2 className="text-2xl font-bold mb-6 text-indigo-400">
          Admin Panel
        </h2>

        <ul className="space-y-4">
          <li>
            <Link to="/admin" className="hover:text-indigo-400">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/admin/users" className="hover:text-indigo-400">
              Manage Users
            </Link>
          </li>

          <li>
            <Link to="/admin/tests" className="hover:text-indigo-400">
              Manage Tests
            </Link>
          </li>

          <li>
            <Link to="/admin/reports" className="hover:text-indigo-400">
              Reports
            </Link>
          </li>
        </ul>
      </div>

      {/* 🔥 MAIN CONTENT AREA */}
      <div className="flex-1 p-6 overflow-auto">
        <Outlet />   {/* ✅ THIS LINE IS THE KEY */}
      </div>

    </div>
  );
}

export default AdminPage;