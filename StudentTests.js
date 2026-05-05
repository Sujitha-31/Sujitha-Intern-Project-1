function StudentTests() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Tests</h1>

      <div className="space-y-4">
        <div className="bg-gray-800 p-5 rounded-xl flex justify-between">
          <span>JavaScript Basics</span>
          <button className="bg-indigo-600 px-4 py-2 rounded">
            Start Test
          </button>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl flex justify-between">
          <span>React Quiz</span>
          <button className="bg-indigo-600 px-4 py-2 rounded">
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentTests;