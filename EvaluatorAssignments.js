function EvaluatorAssignments() {
  const assignments = [
    { id: 1, title: "Java Basics Test", students: 25, deadline: "10 Apr 2026" },
    { id: 2, title: "React Fundamentals", students: 18, deadline: "12 Apr 2026" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Assigned Tests</h1>

      <div className="space-y-4">
        {assignments.map((test) => (
          <div
            key={test.id}
            className="bg-purple-800 p-5 rounded-xl hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">{test.title}</h2>
            <p>👥 Students: {test.students}</p>
            <p>📅 Deadline: {test.deadline}</p>
            <button className="mt-3 bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">
              View Submissions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EvaluatorAssignments;