import React from 'react';
import Goals from './Goals'; // Your goals list component

function App() {
  return (
    <div className="App">
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* Top left: Goals */}
        <div style={{ flex: 1, alignSelf: 'flex-start' }}>
          <Goals />
        </div>
        {/* Top right: Get more plants */}
        <div style={{ flex: 1, alignSelf: 'flex-start', textAlign: 'right' }}>
          <button>Get More Plants</button>
        </div>
      </div>
      {/* Spacer */}
      <div style={{ height: '300px' }}></div>
      {/* Bottom center: Garden */}
      <div style={{ position: 'fixed', bottom: 40, left: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: '#e0ffe0', padding: '30px 50px', borderRadius: '20px', minWidth: '400px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 60px)', gridTemplateRows: 'repeat(3, 60px)', gap: '16px' }}>
            {[...Array(15)].map((_, i) => (
              <div key={i} style={{ width: '60px', height: '60px', background: '#fff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px #0001' }}>
                {/* Placeholder for flowerpot */}
                <span role="img" aria-label="flowerpot" style={{ fontSize: '2rem' }}>🪴</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
/* let's hope this works again again*/
export default App;