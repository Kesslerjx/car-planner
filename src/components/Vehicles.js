import { useEffect, useState } from "react";
import { 
  URLS,
  getDataFrom
}  from "../modules/vehicle-data";

function Vehicles() {

  const [manufacturers, setManufacturers] = useState();
  const [makes, setMakes]                 = useState();

  const updateManufacturers = (manufacturers) => {
    setManufacturers(
      manufacturers
        .filter(item  => item.Country === "UNITED STATES (USA)")
        .filter(inUSA => inUSA.Mfr_CommonName !== null)
    );
    getDataFrom(URLS.ModelsForManufacturer(manufacturers[2].Mfr_CommonName), updateMakes);
  }

  const updateMakes = (makes) => {
    setMakes(makes);
  }

  useEffect(()=> {
    getDataFrom(URLS.Manufacturers, updateManufacturers);
  }, [])

  return (
    <div>
      <p>Vehicles</p>
      {console.log(manufacturers)}
      {console.log(makes)}
    </div>
  );
}
  
export default Vehicles;