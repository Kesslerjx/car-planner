import '../styles/Planner.css'
import { useEffect, useState } from "react";
import { 
    getMaxPayment,
    getTotalPrice,
    getGrossPrice 
}                             from "../modules/calculator-functions";
import MaxPayment              from "./calculators/MaxPayment";
import TotalPrice              from "./calculators/TotalPrice";

function Planner({results, updateResult}) {

    const [values, setValues] = useState({
        maxCost: 0,
        gasCost: 0,
        insCost: 0,
        manCost: 0,
        othCost: 0,
        salesTax: 0,
        fees: 0,
        rate: 0,
        length: 0
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

    useEffect(()=> {
        updateResult('totalPrice', getTotalPrice(
            results.maxPayment, 
            values.rate, 
            values.length
        ))

        // eslint-disable-next-line
    }, [results.maxPayment, values.rate, values.length])

    return (
      <div className="planner">
        <MaxPayment 
            values={{
                maxCost: values.maxCost, 
                gasCost: values.gasCost, 
                insCost: values.insCost, 
                manCost: values.manCost, 
                othCost: values.othCost
            }}
            result={results.maxPayment}
            inputChanged= {inputChanged}
        /> 
        
        <TotalPrice 
            values={{
                maxPayment: results.maxPayment, 
                rate: values.rate, 
                length: values.length
            }}
            result={results.totalPrice}
            inputChanged= {inputChanged}
        />
      </div>
    );
  }
  
  export default Planner;