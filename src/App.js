import './styles/App.css';
import React, { useEffect, useState } from 'react';
import Planner                        from './components/Planner';
import Vehicles                       from './components/Vehicles';

function App() {

  const [component, setComponent] = useState('Home');
  const [results, setResults]     = useState({
    maxPayment: 0,
    totalPrice: 0,
    grossPrice: 0,
    reqVehicle: 0
  })
  const [values, setValues] = useState({
    maxCost: 0,
    gasCost: 0,
    insCost: 0,
    manCost: 0,
    othCost: 0,
    tax: 0,
    fees: 0,
    rate: 0,
    length: 0,
    downPayment: 0,
    tradeIn: 0,
    amountOwed: 0,
    gallonCost: 0,
    monthlyMiles: 0
  });

  const updateResult = (name, value) => {
    setResults(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  const getComponent = () => {
    switch(component) {
      default:
        return <Planner state={[values, setValues]} results={results} updateResult={updateResult}/>;
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
