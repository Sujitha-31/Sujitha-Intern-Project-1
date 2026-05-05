function StudentResults() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Results</h1>

      <div className="bg-gray-800 p-6 rounded-xl">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th>Test</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>JavaScript</td>
              <td>85%</td>
              <td className="text-green-400">Passed</td>
            </tr>

            <tr>
              <td>React</td>
              <td>78%</td>
              <td className="text-green-400">Passed</td>
            </tr>

            <tr>
              <td>HTML</td>
              <td>-</td>
              <td className="text-yellow-400">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentResults;