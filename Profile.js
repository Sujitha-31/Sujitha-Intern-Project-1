import { useLocation } from "react-router-dom";

function Profile() {

  // 🔥 Detect role from URL
  const location = useLocation();
  const role = location.pathname.split("/")[1];

  // 🎯 Role-based profile data
  const profileData = {
    "admin-dashboard": {
      name: "John",
      email: "john@gmail.com",
      role: "Admin",
      extra: "Manages platform, users, and assessments",
    },

    "student-dashboard": {
      name: "Sujitha",
      email: "sujitha@gmail.com",
      role: "Student",
      extra: "Enrolled in 6 courses, CGPA: 8.4",
    },

    "evaluator-dashboard": {
      name: "Mary",
      email: "mary@gmail.com",
      role: "Evaluator",
      extra: "Assigned to evaluate 40 papers",
    },
  };

  const user = profileData[role];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {user.role} Profile 👤
      </h2>

      <div className="bg-white p-6 rounded-xl shadow max-w-md">

        <div className="mb-4">
          <p className="text-gray-500">Name</p>
          <p className="font-semibold">{user.name}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Email</p>
          <p className="font-semibold">{user.email}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Role</p>
          <p className="font-semibold">{user.role}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Details</p>
          <p className="font-semibold">{user.extra}</p>
        </div>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Edit Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;