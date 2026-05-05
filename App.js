import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import RoleSelection from "./pages/RoleSelection";

// STUDENT
import StudentPage from "./pages/StudentPage";
import StudentDashboard from "./pages/StudentDashboard";
import StudentTests from "./pages/StudentTests";
import StudentResults from "./pages/StudentResults";
import StudentProfile from "./pages/StudentProfile";
import StudentNotifications from "./pages/StudentNotifications";

// ADMIN
import AdminPage from "./pages/AdminPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminTests from "./pages/AdminTests";
import AdminReports from "./pages/AdminReports";
import AdminNotifications from "./pages/AdminNotifications";

// EVALUATOR
import EvaluatorPage from "./pages/EvaluatorPage";
import EvaluatorDashboard from "./pages/EvaluatorDashboard";
import EvaluatorAssignments from "./pages/EvaluatorAssignments";
import EvaluatorSubmissions from "./pages/EvaluatorSubmissions";
import EvaluatorReports from "./pages/EvaluatorReports";
import EvaluatorNotifications from "./pages/EvaluatorNotifications";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* COMMON */}
        <Route path="/" element={<Login />} />
        <Route path="/roles" element={<RoleSelection />} />

        {/* STUDENT */}
        <Route path="/student" element={<StudentPage />}>
          <Route index element={<StudentDashboard />} />
          <Route path="tests" element={<StudentTests />} />
          <Route path="results" element={<StudentResults />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="notifications" element={<StudentNotifications />} />
        </Route>

        {/* ADMIN */}
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="tests" element={<AdminTests />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="notifications" element={<AdminNotifications />} />
        </Route>

        {/* EVALUATOR */}
        <Route path="/evaluator" element={<EvaluatorPage />}>
          <Route index element={<EvaluatorDashboard />} />
          <Route path="assignments" element={<EvaluatorAssignments />} />
          <Route path="submissions" element={<EvaluatorSubmissions />} />
          <Route path="reports" element={<EvaluatorReports />} />
          <Route path="notifications" element={<EvaluatorNotifications />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;