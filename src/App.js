import './styles/App.css';
import React, { useEffect, useState } from 'react';
import Planner                        from './components/Planner';
import Vehicles                       from './components/Vehicles';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

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

  return (
    <Router>
      <div>
        <header>
          <p>Car Planner</p>
          <div>
            <Link className='header-button' to='/'>Planner</Link>
            <Link className='header-button' to='/vehicles'>Vehicles</Link>
          </div>
        </header>
        <main>
          <Routes> 
            <Route path='/' element={<Planner state={[values, setValues]} results={results} updateResult={updateResult}/>} />
            <Route path='/vehicles' element={<Vehicles />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
