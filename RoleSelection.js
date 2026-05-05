import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Select Your Role
        </h2>
        <p className="text-gray-500 mb-8">
          Choose a role to continue
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate("/admin-dashboard")}
            className="bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700"
          >
            Admin
          </button>

          <button
            onClick={() => navigate("/student-dashboard")}
            className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
          >
            Student
          </button>

          <button
            onClick={() => navigate("/evaluator-dashboard")}
            className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            Evaluator
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;