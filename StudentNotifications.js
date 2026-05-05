function StudentNotifications() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      <div className="space-y-4">
        <div className="bg-blue-800 p-4 rounded-lg">
          📢 New test assigned: Java Basics
        </div>

        <div className="bg-green-700 p-4 rounded-lg">
          ✅ Your result for React Test is published
        </div>
      </div>
    </div>
  );
}

export default StudentNotifications;