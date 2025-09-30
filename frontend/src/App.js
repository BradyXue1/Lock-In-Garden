function App() { 
  const [plants, setPlants] = useState([]); 
  
  useEffect(() => { 
    fetch("http://127.0.0.1:5000/plants") 
    .then((res) => res.json()) 
    .then((data) => setPlants(data)) 
    .catch((err) => console.error(err)); 
  }, []); 
  
  return ( 
  <div> 
    <h1>My Garden</h1> 
    <ul> 
      {plants.map((plant) => ( 
        <li key={plant.id}> 
        {plant.name} - {plant.watered ? "Watered" : "Needs Water"} 
        </li> 
      ))} 
    </ul> 
  </div> ); 
} 

export default App;