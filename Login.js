import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Dummy users (frontend only)
  const users = [
    { email: "admin@gmail.com", password: "123", role: "admin" },
    { email: "eval@gmail.com", password: "123", role: "evaluator" },
    { email: "student@gmail.com", password: "123", role: "student" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));

      const roleRoutes = {
        admin: "/admin",
        evaluator: "/evaluator",
        student: "/student"
      };

      navigate(roleRoutes[user.role]);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-600 to-purple-600">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-center text-gray-500 mb-8">Login to continue</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Signup
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;