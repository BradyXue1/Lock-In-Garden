import React, { useEffect, useState } from 'react';

function Goals() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/goals')
      .then(response => response.json())
      .then(data => setGoals(data))
      .catch(error => console.error('Error fetching goals:', error));
  }, []);

  return (
    <div>
      <h2>My Goals</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            {goal.title} {goal.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Goals;