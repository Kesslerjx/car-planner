import { useEffect, useState } from "react";
import Calculator from "./Calculator";
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
        <Calculator 
            title="Max Payment"
            inputs={[
                <input 
                    value={values.maxCost}
                    onChange={(e) => inputChanged(e)}
                    name='maxCost' 
                    type='number'
                ></input>,
                <input 
                    value={values.gasCost}
                    onChange={(e) => inputChanged(e)}
                    name='gasCost'
                    type='number'
                ></input>,
                <input 
                    value={values.insCost}
                    onChange={(e) => inputChanged(e)}
                    name='insCost'
                    type='number'
                ></input>,
                <input 
                    value={values.manCost}
                    onChange={(e) => inputChanged(e)}
                    name='manCost'
                    type='number'
                ></input>,
                <input 
                    value={values.othCost}
                    onChange={(e) => inputChanged(e)}
                    name='othCost'
                    type='number'
                ></input>,
            ]}
            result={results.maxPayment}
        />
      </div>
    );
  }
  
  export default Planner;