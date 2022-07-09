import './styles/App.css';
import React, { useEffect, useState } from 'react';
import Planner                        from './components/Planner';
import Vehicles                       from './components/Vehicles';
import Home                           from './components/Home';

function App() {

  const [component, setComponent] = useState('Home');
  const [results, setResults]     = useState({
    maxPayment: 0,
    totalPrice: 0,
    grossPrice: 0,
    reqVehicle: 0
  })

  const updateResult = (name, value) => {
    setResults(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  const getComponent = () => {
    switch(component) {
      default:
        return <Home />;
      case 'Planner':
        return <Planner results={results} updateResult={updateResult}/>;
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
      <main>
        {getComponent()}
      </main>
    </div>
  );
}

export default App;
