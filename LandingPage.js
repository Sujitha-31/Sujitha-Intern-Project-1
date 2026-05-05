import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Unified Assessment Platform
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              A smart platform to manage students, evaluators, assessments,
              reports, and academic performance in one place.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Get Started
              </Link>
              <Link
                to="/signup"
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300"
              >
                Create Account
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-3 text-indigo-700">For Admin</h2>
              <p className="text-gray-600">
                Manage students, evaluators, reports, and overall academic operations easily.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-3 text-indigo-700">For Students</h2>
              <p className="text-gray-600">
                Access courses, assessments, attendance, performance, and progress reports.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-3 text-indigo-700">For Evaluators</h2>
              <p className="text-gray-600">
                Review student submissions, assign marks, and monitor evaluation tasks efficiently.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;