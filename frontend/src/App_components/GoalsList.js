import React, { useEffect, useState } from "react";
function GoalsList() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        backgroundColor: "white",
        border: "2px solid #444",
        borderRadius: "10px",
        padding: "10px",
        maxWidth: "250px",
        maxHeight: "300px",     // prevent it from getting too tall
        overflowY: "auto",      // scroll if too many goals
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ margin: "0 0 10px 0" }}> Goals</h2>
      <ul style={{ margin: 0, paddingLeft: "20px" }}>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.title} — {goal.count}/{goal.target}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default GoalsList;