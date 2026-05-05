function EvaluatorDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Evaluator Dashboard</h1>

      {/* 🔹 Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <h2 className="text-gray-400">Assigned Tests</h2>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <h2 className="text-gray-400">Pending Evaluations</h2>
          <p className="text-2xl font-bold mt-2">5</p>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <h2 className="text-gray-400">Completed Reviews</h2>
          <p className="text-2xl font-bold mt-2">20</p>
        </div>
      </div>

      {/* 🔹 Submissions Table */}
      <div className="bg-gray-800 p-5 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Submissions</h2>

        <table className="w-full text-left text-gray-400">
          <thead>
            <tr className="text-white border-b border-gray-700">
              <th className="py-2">Student</th>
              <th>Test</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2">Sujitha</td>
              <td>React Test</td>
              <td className="text-yellow-400">Pending</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">Arun</td>
              <td>Java Test</td>
              <td className="text-green-400">Reviewed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EvaluatorDashboard;