import '../styles/Planner.css'
import { useEffect } from "react";
import { 
    getMaxPayment,
    getTotalPrice,
    getGrossPrice,
    getRequiredMPG 
}                   from "../modules/calculator-functions";
import MaxPayment    from "./calculators/MaxPayment";
import TotalPrice    from "./calculators/TotalPrice";
import GrossPrice    from './calculators/GrossPrice';
import RequiredMPG   from './calculators/RequiredMPG';

function Planner({ state, results, updateResult}) {

    const [values, setValues] = state;

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

    useEffect(()=> {
        updateResult('grossPrice', getGrossPrice(
            results.totalPrice, 
            values.tax, 
            values.fees,
            values.downPayment,
            values.tradeIn,
            values.amountOwed 
        ))

        // eslint-disable-next-line
    }, [results.totalPrice, values.tax,  values.fees, values.downPayment, values.tradeIn, values.amountOwed])

    useEffect(()=> {
        updateResult('reqVehicle', getRequiredMPG(
            values.gasCost,
            values.gallonCost,
            values.monthlyMiles
        ))

        // eslint-disable-next-line
    }, [values.gasCost, values.gallonCost, values.monthlyMiles])

    return (
      <div className="planner">
        <div className='calculators'>
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

            <GrossPrice 
                values={{
                    totalPrice: results.totalPrice, 
                    tax: values.tax,
                    fees: values.fees, 
                    downPayment: values.downPayment, 
                    tradeIn: values.tradeIn,  
                    amountOwed: values.amountOwed
                }}
                result={results.grossPrice}
                inputChanged= {inputChanged}
            />

            <RequiredMPG 
                values={{
                    gasCost: values.gasCost,
                    gallonCost: values.gallonCost,
                    monthlyMiles: values.monthlyMiles
                }}
                result={results.reqVehicle}
                inputChanged= {inputChanged}
            />
        </div>
      </div>
    );
  }
  
  export default Planner;