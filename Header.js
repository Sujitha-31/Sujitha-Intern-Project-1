import { Link } from "react-router-dom";

function Header() {

  const role = "student-dashboard"; // later dynamic

  return (
    <header className="bg-indigo-700 text-white shadow-md w-full">
    
      {/* 🔥 FULL WIDTH FIX */}
      <div className="w-full px-6 py-4 flex justify-between items-center">
        
        {/* Title */}
        <h1 className="text-2xl font-bold">
          Unified Assessment Platform
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* 🔔 Notifications */}
          <Link 
            to={`/${role}/notifications`} 
            className="text-xl hover:text-yellow-300"
          >
            🔔
          </Link>

          {/* 👤 Profile */}
          <Link 
            to={`/${role}/profile`} 
            className="text-xl hover:text-yellow-300"
          >
            👤
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Header;