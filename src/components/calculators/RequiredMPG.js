import Calculator from "../Calculator";
import Input      from "../Input";

function RequiredMPG({ values, result, inputChanged }) {
    return (
        <Calculator 
            title='Required MPG'
            description='This will show you the MPG required to meet your gas cost based on the amount of miles you drive per month. This is important to consider
            since gas cost will take up a large portion of your total cost.'
            inputs={[
                <Input 
                    label='Gas Cost'
                    value={values.gasCost}
                    disabled={true}
                />,
                <Input 
                    label='Gallon Cost'
                    value={values.gallonCost}
                    name ='gallonCost'
                    onChange={inputChanged}
                />,
                <Input 
                    label='Monthly Miles'
                    value={values.monthlyMiles}
                    name ='monthlyMiles'
                    onChange={inputChanged}
                />,
            ]}
            result={result}
            useSign={false}
            unit={'MPG'}
        />
    )
}

export default RequiredMPG;