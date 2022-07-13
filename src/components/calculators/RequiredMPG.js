import Calculator from "../Calculator";
import Input      from "../Input";

function RequiredMPG({ values, result, inputChanged }) {
    return (
        <Calculator 
            title='Required MPG'
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