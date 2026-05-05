import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, ClipboardList, Award, Bell, Settings } from "lucide-react";
import { User } from "lucide-react";

function Sidebar() {
  const location = useLocation();
  const role = location.pathname.split("/")[1]; // 🔥 dynamic role

  // 🎯 Role-based menus
  const menuConfig = {

  "admin-dashboard": [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: `/${role}` },
    { name: "Users", icon: <Users size={18} />, path: `/${role}/users` },
    { name: "Assessments", icon: <ClipboardList size={18} />, path: `/${role}/assessments` },
    { name: "Notifications", icon: <Bell size={18} />, path: `/${role}/notifications` },
    { name: "Settings", icon: <Settings size={18} />, path: `/${role}/settings` }, // ✅ FIXED
  ],

  "student-dashboard": [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: `/${role}` },
    { name: "My Courses", icon: <ClipboardList size={18} />, path: `/${role}/courses` },
    { name: "My Scores", icon: <Award size={18} />, path: `/${role}/score` },
    { name: "Notifications", icon: <Bell size={18} />, path: `/${role}/notifications` },
    { name: "Profile", icon: <Settings size={18} />, path: `/${role}/profile` },
    { name: "Settings", icon: <Settings size={18} />, path: `/${role}/settings` }, // ✅ ADDED
    { name: "Edit Profile", icon: <User size={18} />, path: `/${role}/edit-profile` },
  ],

  

  "evaluator-dashboard": [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: `/${role}` },
    { name: "Assigned Tasks", icon: <ClipboardList size={18} />, path: `/${role}/tasks` },
    { name: "Evaluations", icon: <Award size={18} />, path: `/${role}/evaluations` },
    { name: "Notifications", icon: <Bell size={18} />, path: `/${role}/notifications` },
    { name: "Profile", icon: <Settings size={18} />, path: `/${role}/profile` },
    { name: "Settings", icon: <Settings size={18} />, path: `/${role}/settings` }, // ✅ ADDED
    { name: "Edit Profile", icon: <User size={18} />, path: `/${role}/edit-profile` },
  ],
};
   


  const menuItems = menuConfig[role] || [];

  return (
    <div className="w-64 min-h-screen bg-purple-100 p-5">

      <h2 className="text-xl font-bold mb-6 capitalize">
        {role.replace("-", " ")}
      </h2>

      <div className="flex flex-col gap-3">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition
              ${isActive ? "bg-purple-300 font-semibold" : "hover:bg-purple-200"}`}
            >
              {item.icon}
              {item.name}
            </Link>
            
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;