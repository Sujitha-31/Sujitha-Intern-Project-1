function StudentDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">My Tests</h2>
          <p className="text-gray-400">Attempt tests</p>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Results</h2>
          <p className="text-gray-400">View scores</p>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="text-gray-400">Edit details</p>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;