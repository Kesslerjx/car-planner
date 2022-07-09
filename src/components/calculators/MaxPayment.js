import Calculator from "../Calculator";
import Input from "../Input";

function MaxPayment({ values, result, inputChanged }) {
    return (
        <Calculator 
            title="Max Payment"
            inputs={[
                <Input 
                    label='Max Cost'
                    value={values.maxCost}
                    name ='maxCost'
                    onChange={inputChanged}
                />,
                <Input 
                    label='Gas Cost'
                    value={values.gasCost}
                    name ='gasCost'
                    onChange={inputChanged}
                />,
                <Input 
                    label='Insurance Cost'
                    value={values.insCost}
                    name ='insCost'
                    onChange={inputChanged}
                />,
                <Input 
                    label='Maintenance Cost'
                    value={values.manCost}
                    name ='manCost'
                    onChange={inputChanged}
                />,
                <Input 
                    label='Other Cost'
                    value={values.othCost}
                    name ='othCost'
                    onChange={inputChanged}
                />,
            ]}
            result={result}
        />
    )
}

export default MaxPayment;