import { useEffect, useState } from "react";
import Porsche from '../images/porsche.jpeg';
import '../styles/Vehicles.css';


function Vehicles() {

  return (
    <div className="vehicles">
      <p>Nothing to see here yet, but look at these beautiful cars.</p>
      <div className="placeholder-div">
        <img src={Porsche} className='vehicles-placeholder-image'></img>
      </div>
    </div>
  );
}
  
export default Vehicles;