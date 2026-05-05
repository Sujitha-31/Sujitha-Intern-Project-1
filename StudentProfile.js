function StudentProfile() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="bg-gray-800 p-6 rounded-xl space-y-4">
        <div>
          <label className="text-gray-400">Name</label>
          <p className="text-lg">Sujitha</p>
        </div>

        <div>
          <label className="text-gray-400">Email</label>
          <p className="text-lg">sujitha@gmail.com</p>
        </div>

        <div>
          <label className="text-gray-400">Role</label>
          <p className="text-lg">Student</p>
        </div>

        <button className="bg-indigo-600 px-4 py-2 rounded mt-4">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default StudentProfile;