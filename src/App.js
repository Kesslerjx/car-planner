import './App.css';
import React, { useEffect, useState } from 'react';
import Planner from './components/Planner';
import Vehicles from './components/Vehicles';
import Home from './components/Home';

function App() {

  const [component, setComponent] = useState('Home');
  
  const getComponent = () => {
    switch(component) {
      default:
        return <Home />;
      case 'Planner':
        return <Planner />;
      case 'Vehicles':
        return <Vehicles />;
    }
  }

  useEffect(() => {
    document.title = component;
  }, [component])

  return (
    <div>
      <header>
        <p>Car Planner</p>
        <div>
          <button className='header-button' onClick={() => setComponent('Home')}>Home</button>
          <button className='header-button' onClick={() => setComponent('Planner')}>Planner</button>
          <button className='header-button' onClick={() => setComponent('Vehicles')}>Vehicles</button>
        </div>
      </header>
      {getComponent()}
    </div>
  );
}

export default App;
