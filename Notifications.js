import { useLocation } from "react-router-dom";

function Notifications() {

  // 🔥 Detect role from URL
  const location = useLocation();
  const role = location.pathname.split("/")[1];

  // 🎯 Role-based data
  const notificationsData = {
    "admin-dashboard": [
      { msg: "New student registered", time: "10 mins ago" },
      { msg: "Assessment created successfully", time: "1 hour ago" },
      { msg: "Evaluator assigned to Java Test", time: "2 hours ago" },
    ],

    "student-dashboard": [
      { msg: "Your test is scheduled for tomorrow", time: "Just now" },
      { msg: "Result published for DBMS", time: "1 day ago" },
      { msg: "New course added: React JS", time: "2 days ago" },
    ],

    "evaluator-dashboard": [
      { msg: "You have 10 papers to evaluate", time: "30 mins ago" },
      { msg: "New evaluation assigned", time: "2 hours ago" },
      { msg: "Deadline approaching for submissions", time: "Today" },
    ],
  };

  const notifications = notificationsData[role] || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {role.replace("-", " ")} Notifications 🔔
      </h2>

      <div className="space-y-4">

        {notifications.length === 0 ? (
          <p>No notifications available</p>
        ) : (
          notifications.map((note, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow border-l-4 border-blue-500"
            >
              <p className="font-medium">{note.msg}</p>
              <span className="text-sm text-gray-500">{note.time}</span>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Notifications;