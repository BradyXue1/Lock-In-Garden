import React, { useEffect, useState } from "react";

function App() {
  const [plants, setPlants] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    // Fetch plants
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error fetching plants:", err));

    // Fetch goals
    fetch("http://localhost:5000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌱 Plants</h1>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            {plant.name} — watered: {plant.watered}, location: {plant.location}
          </li>
        ))}
      </ul>

      <h1>🎯 Goals</h1>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.title} — completed: {goal.completed}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlantShelf() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  // Create 15 slots
  const slots = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌱 Plant Shelf</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // 5 slots per row
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {slots.map((slotId) => {
          const plant = plants.find((p) => p.location === slotId);
          return (
            <div
              key={slotId}
              style={{
                border: "2px solid #444",
                borderRadius: "10px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: plant ? "#e6ffe6" : "#f0f0f0",
              }}
            >
              {plant ? (
                <div style={{ textAlign: "center" }}>
                  <strong>{plant.name}</strong>
                  <br />
                  💧 {plant.watered}
                </div>
              ) : (
                <span style={{ color: "#888" }}>Empty</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlantShelf;

