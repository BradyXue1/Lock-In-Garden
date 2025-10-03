import React, { useEffect, useState } from "react";

function GoalsList() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = () => {
    fetch("http://localhost:5000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error fetching goals:", err));
  };

  const incrementGoal = (id) => {
    fetch(`http://localhost:5000/goals/${id}/increment`, { method: "POST" })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals(goals.map((g) => (g.id === id ? updatedGoal : g)));
      });
  };

  const resetGoals = () => {
    fetch("http://localhost:5000/goals/reset", { method: "POST" })
      .then((res) => res.json())
      .then((resetGoals) => setGoals(resetGoals));
  };

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
        maxHeight: "300px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000, // ensure it's on top
      }}
    >
      <h2 style={{ margin: "0 0 10px 0" }}>Goals</h2>

      {/* Scrollable list */}
      <ul
        style={{
          margin: 0,
          paddingRight: "20px",
          overflowY: "auto",
          flexGrow: 1, // take all available vertical space
        }}
      >
        {goals.map((goal) => (
          <li key={goal.id} style={{ marginBottom: "5px" }}>
            {goal.title}: {goal.count}/{goal.target}{" "}
            <button onClick={() => incrementGoal(goal.id)}>+1</button>
          </li>
        ))}
      </ul>

      {/* Reset button pinned at bottom */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={resetGoals} style={{ width: "100%" }}>
          Reset Goals
        </button>
      </div>
    </div>
  );
}

export default GoalsList;
