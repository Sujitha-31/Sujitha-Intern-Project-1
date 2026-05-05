import { Link, Outlet } from "react-router-dom";

function EvaluatorPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-950 to-black text-white">

      {/* 🔹 Sidebar */}
      <div className="w-64 bg-purple-900 p-5">
        <h2 className="text-2xl font-bold mb-8 text-purple-300">
          Evaluator Panel
        </h2>

        <nav className="space-y-4">
          <Link to="/evaluator" className="block hover:text-purple-300">
            Dashboard
          </Link>

          <Link to="/evaluator/assignments" className="block hover:text-purple-300">
            Assigned Tests
          </Link>

          <Link to="/evaluator/submissions" className="block hover:text-purple-300">
            Evaluate Answers
          </Link>

          <Link to="/evaluator/reports" className="block hover:text-purple-300">
            Reports
          </Link>

          {/* ❌ removed logout (as you asked before) */}
        </nav>
      </div>

      {/* 🔥 MAIN CONTENT (VERY IMPORTANT) */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>

    </div>
  );
}

export default EvaluatorPage;