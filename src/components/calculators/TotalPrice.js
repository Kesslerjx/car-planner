import Calculator from "../Calculator";
import Input      from "../Input";

function TotalPrice({ values, result, inputChanged }) {
    return (
        <Calculator 
            title="Total Price"
            inputs={[
                <Input 
                    label='Max Payment'
                    value={values.maxPayment}
                    disabled={true}
                />,
                <Input 
                    label='Rate (%)'
                    value={values.rate}
                    name ='rate'
                    onChange={inputChanged}
                />,
                <Input 
                    label='Length (years)'
                    value={values.length}
                    name ='length'
                    onChange={inputChanged}
                />
            ]}
            result={result}
        />
    )
}

export default TotalPrice;