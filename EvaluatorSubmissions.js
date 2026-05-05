function EvaluatorSubmissions() {
  const submissions = [
    {
      id: 1,
      student: "Arun Kumar",
      test: "Java Basics",
      status: "Pending",
    },
    {
      id: 2,
      student: "Priya Sharma",
      test: "React Fundamentals",
      status: "Evaluated",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Student Submissions</h1>

      <div className="space-y-4">
        {submissions.map((sub) => (
          <div
            key={sub.id}
            className="bg-purple-800 p-5 rounded-xl"
          >
            <h2 className="text-xl font-semibold">{sub.student}</h2>
            <p>📘 Test: {sub.test}</p>
            <p>
              Status:{" "}
              <span
                className={
                  sub.status === "Pending"
                    ? "text-yellow-400"
                    : "text-green-400"
                }
              >
                {sub.status}
              </span>
            </p>

            <div className="mt-3 space-x-3">
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                View Answer
              </button>

              <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">
                Give Marks
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EvaluatorSubmissions;