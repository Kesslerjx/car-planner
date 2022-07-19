import Calculator from "../Calculator";
import Input      from "../Input";

function GrossPrice({ values, result, inputChanged }) {
    return (
        <Calculator 
            title="Gross Price"
            description='This will show you the price of the vehicle before fees, taxes, etc, based on the total price was calculated previously.
            This is the max price of a vehicle that you can afford / are willing to afford.'
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