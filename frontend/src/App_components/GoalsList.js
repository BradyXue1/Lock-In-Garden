import React, { useEffect, useState } from "react";

function GoalsList({ fetchPlants }) {
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

  const incrementGoal = async (id) => {
    try {
      await fetch(`http://localhost:5000/goals/${id}/increment`, {
        method: "POST",
      });
      fetchGoals();      // update goal counters
      fetchPlants();     // update plant waterable status
    } catch (err) {
      console.error("Error incrementing goal:", err);
    }
  };

  const resetGoals = async () => {
    try {
      await fetch("http://localhost:5000/goals/reset", { method: "POST" });
      fetchGoals();
      fetchPlants();
    } catch (err) {
      console.error("Error resetting goals:", err);
    }
  };

  return (
    <div style={{
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
      zIndex: 1000,
    }}>
      <h2 style={{ margin: "0 0 10px 0" }}>Goals</h2>
      <ul style={{ margin: 0, paddingRight: "20px", overflowY: "auto", flexGrow: 1 }}>
        {goals.map(goal => (
          <li key={goal.id} style={{ marginBottom: "5px" }}>
            {goal.title}: {goal.count}/{goal.target}{" "}
            <button onClick={() => incrementGoal(goal.id)}>+1</button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "10px" }}>
        <button onClick={resetGoals} style={{ width: "100%" }}>
          Reset Goals
        </button>
      </div>
    </div>
  );
}

export default GoalsList;
