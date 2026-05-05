function AdminUsers() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      <table className="w-full bg-gray-800 rounded-lg">
        <thead>
          <tr className="text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">Sujitha</td>
            <td className="p-3">Student</td>
            <td className="p-3">sujitha@gmail.com</td>
          </tr>
          <tr>
            <td className="p-3">Arun</td>
            <td className="p-3">Evaluator</td>
            <td className="p-3">arun@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;