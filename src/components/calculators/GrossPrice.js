import Calculator from "../Calculator";
import Input      from "../Input";

function GrossPrice({ values, result, inputChanged }) {
    return (
        <Calculator 
            title="Gross Price"
            inputs={[
                <Input 
                    label='Loan Amount'
                    value={values.totalPrice}
                    disabled={true}
                />,
                <Input 
                    label='Tax (%)'
                    value={values.tax}
                    name ='tax'
                    onChange={inputChanged}
                />,
                <Input 
                    label='Fees'
                    value={values.fees}
                    name ='fees'
                    onChange={inputChanged}
                />,
                <Input 
                    label='Down Payment'
                    value={values.downPayment}
                    name ='downPayment'
                    onChange={inputChanged}
                />,
                <Input 
                    label='Trade In'
                    value={values.tradeIn}
                    name ='tradeIn'
                    onChange={inputChanged}
                />,
                <Input 
                    label='Amount Owed'
                    value={values.amountOwed}
                    name ='amountOwed'
                    onChange={inputChanged}
                />
            ]}
            result={result}
        />
    )
}

export default GrossPrice;