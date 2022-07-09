import { useEffect, useState } from "react";
import Calculator from "./Calculator";
import MaxPayment from "./calculators/MaxPayment";
import { getMaxPayment } from "../modules/calculator-functions";

function Planner({results, updateResult}) {

    const [values, setValues] = useState({
        maxCost: 0,
        gasCost: 0,
        insCost: 0,
        manCost: 0,
        othCost: 0
    });

    const inputChanged = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    useEffect(()=> {
        updateResult('maxPayment', getMaxPayment(
            values.maxCost, 
            values.gasCost, 
            values.insCost, 
            values.manCost, 
            values.othCost
        ))

        // eslint-disable-next-line
    }, [values.maxCost, values.gasCost, values.insCost, values.manCost, values.othCost])

    return (
      <div>
        <MaxPayment 
            values={[values.maxCost, values.gasCost, values.insCost, values.manCost, values.othCost]}
            result={results.maxPayment}
            inputChanged= {inputChanged}
        />
      </div>
    );
  }
  
  export default Planner;