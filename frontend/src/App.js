import React, { useState, useEffect } from "react";
import PlantShelf from "./App_components/PlantShelf";
import GoalsList from "./App_components/GoalsList";
import Gambling from "./App_components/Gambling";

function App() {
  const [plants, setPlants] = useState([]);

  const fetchPlants = () => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error fetching plants:", err));
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <>
      <GoalsList fetchPlants={fetchPlants} />
      <PlantShelf plants={plants} setPlants={setPlants} />
      <Gambling />
    </>
  );
}

export default App;
