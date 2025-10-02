import React, { useEffect, useState } from "react";
function Gambling() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/quests")
      .then((res) => res.json())
      .then((data) => setQuests(data))
      .catch((err) => console.error("Error fetching quests:", err));
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "white",
        border: "2px solid #444",
        borderRadius: "10px",
        padding: "10px",
        maxWidth: "250px",
        maxHeight: "300px",     // prevent it from getting too tall
        overflowY: "auto",      // scroll if too many quests
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ margin: "0 0 10px 0" }}> Gambling Corner</h2>
      <ul style={{ margin: 0, paddingRight: "20px" }}>
        {quests.map((quest) => (
          <li key={quest.id}>
            {quest.title} — {quest.count}/{quest.target}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Gambling;