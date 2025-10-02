import React, { useEffect, useState } from "react";
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
    <div
      style={{
        position: "fixed",    // sticks to viewport
        bottom: "0",          // docked at bottom
        left: "0",
        right: "0",
        width: "100%",        // full width bar
        padding: "30px 0",    // some breathing room
      }}
    >
      <div
        style={{
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(5, 200px)",
          columnGap: "12px",     
          rowGap: "12px",        
          justifyContent: "center",
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
                height: "135px",
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