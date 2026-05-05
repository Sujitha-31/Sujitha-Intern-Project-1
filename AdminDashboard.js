function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl">Total Users</h2>
          <p className="text-2xl mt-2">120</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl">Total Tests</h2>
          <p className="text-2xl mt-2">45</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl">Reports Generated</h2>
          <p className="text-2xl mt-2">78</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;