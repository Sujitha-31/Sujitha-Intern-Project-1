function AdminNotifications() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Notifications</h1>

      <div className="space-y-4">
        <div className="bg-purple-800 p-4 rounded-lg">
          👤 New user registered
        </div>

        <div className="bg-red-700 p-4 rounded-lg">
          ⚠️ System alert: Server load high
        </div>
      </div>
    </div>
  );
}

export default AdminNotifications;