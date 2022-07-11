
//Gets the maximum payment the user should spend
//If the value is less than 0, return 0
export function getMaxPayment(maxCost, gasCost, insuranceCost, maintCost, otherCost) {
    let result = Number(maxCost) - 
                Number(gasCost) - 
                Number(insuranceCost) - 
                Number(maintCost) - 
                Number(otherCost);
    return result > 0 ? result : 0;
}

//Gets the loan price based on the payment rate and length of loan
//Returns 0 if the value is NaN
export function getTotalPrice(payment, rate, length) {
    const i = (Number(rate)/100) / 12;
    const n = Number(length) * 12;
    const r = ( (Number(payment) / i) * (1 - (1/Math.pow(1+i, n))) )
    return isNaN(r) ? 0 : r;
}

//Gets the gross price of the vehicle based on the total price and other charges
//First it gets the before tax price
//Then it gets the positive or negative equity
//Then it takes the before tax price, and subtracts the other charges
//Returns 0 if the value is NaN
export function getGrossPrice(totalPrice, tax, fees, down, trade, owed) {
    const b = Number(totalPrice) / (1+(Number(tax) / 100));
    const e = Number(trade) - Number(owed);
    const r = b - Number(fees) + Number(down) + e;
    return isNaN(r) ? 0 : r;
}