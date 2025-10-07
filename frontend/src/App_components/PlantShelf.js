import React from "react";

function PlantShelf({ plants, setPlants }) {
  const waterPlant = (id) => {
    fetch(`http://localhost:5000/plants/${id}/water`, { method: "POST" })
      .then(res => res.json())
      .then(updated => setPlants(plants.map(p => p.id === id ? updated : p)))
      .catch(err => console.error("Error watering plant:", err));
  };

  const resetPlants = () => {
    fetch("http://localhost:5000/plants/reset", { method: "POST" })
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.error("Error resetting plants:", err));
  };

  // Create 15 slots
  const slots = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div style={{
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0",
      width: "100%",
      padding: "30px 0",
    }}>
      {/* Reset Plants button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={resetPlants}>Reset Plants</button>
      </div>

      <div style={{
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(5, 200px)",
        columnGap: "12px",
        rowGap: "12px",
        justifyContent: "center",
        marginTop: "20px",
      }}>
        {slots.map(slotId => {
          const plant = plants.find(p => p.location === slotId);
          return (
            <div key={slotId} style={{
              border: "2px solid #444",
              borderRadius: "10px",
              height: "135px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: plant ? "#e6ffe6" : "#f0f0f0",
            }}>
              {plant ? (
                <div style={{ textAlign: "center" }}>
                  <strong>{plant.name}</strong>
                  <br />💧 {plant.watered}
                  <br />
                  <button
                    onClick={() => waterPlant(plant.id)}
                    disabled={!plant.waterable}
                    style={{
                      backgroundColor: plant.waterable ? "#4CAF50" : "#ccc",
                      cursor: plant.waterable ? "pointer" : "not-allowed",
                      marginTop: "5px",
                    }}
                  >
                    Water
                  </button>
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
