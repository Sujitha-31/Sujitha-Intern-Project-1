function EvaluatorReports() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Evaluation Reports</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-purple-800 p-5 rounded-xl text-center">
          <h2 className="text-xl">Total Assigned</h2>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

        <div className="bg-green-700 p-5 rounded-xl text-center">
          <h2 className="text-xl">Evaluated</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>

        <div className="bg-yellow-600 p-5 rounded-xl text-center">
          <h2 className="text-xl">Pending</h2>
          <p className="text-3xl font-bold mt-2">2</p>
        </div>

      </div>

      <div className="mt-8 bg-purple-900 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

        <ul className="space-y-2">
          <li>Evaluated Java Basics - Arun Kumar</li>
          <li>Pending React Test - 5 Students</li>
          <li>Report generated for March</li>
        </ul>
      </div>
    </div>
  );
}

export default EvaluatorReports;