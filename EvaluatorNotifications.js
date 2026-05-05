function EvaluatorNotifications() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Evaluator Notifications</h1>

      <div className="space-y-4">
        <div className="bg-yellow-700 p-4 rounded-lg">
          📝 New submissions pending for evaluation
        </div>

        <div className="bg-green-700 p-4 rounded-lg">
          ✅ You completed 5 evaluations today
        </div>
      </div>
    </div>
  );
}

export default EvaluatorNotifications;