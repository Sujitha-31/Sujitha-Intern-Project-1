import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen">

    
      <Header />

      {/* नीचे sidebar + content */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;