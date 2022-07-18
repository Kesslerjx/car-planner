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
        <div className='planner-details'>
            <p>
                Use this site to help plan your next vehicle purchase. This page has a few different calculators for you to play around with. 
                Once you've filled out the required information, you can head to the Vehicles page to view vehicles that meet the criteria provided by the calculators.
            </p>
            <h3>Max Payment</h3>
            <p>
                This will help you determine the money you will have left to spend on a car payment based on the other cost you provide it. 
                Max Cost should be set to the max amount that you want to spend per month on vehicle related expenses.
            </p>
            <h3>Total Price</h3>
            <p>
                This will show you the total price of the vehicle after fees, taxes, etc, based on the payment that was calculated previously. 
            </p>
            <h3>Gross Price</h3>
            <p>
                This will show you the price of the vehicle before fees, taxes, etc, based on the total price was calculated previously.
                This is the max price of a vehicle that you can afford / are willing to afford.
            </p>
            <h3>Required MPG</h3>
            <p>
                This will show you the MPG required to meet your gas cost based on the amount of miles you drive per month. This is important to consider
                since gas cost will take up a large portion of your total cost.
            </p>
        </div>
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