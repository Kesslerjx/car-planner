
//Gets the maximum payment the user should spend
//If the value is less than 0, return 0
export function getMaxPayment(maxCost, gasCost, insuranceCost, maintCost, otherCost) {
    let result = maxCost - gasCost - insuranceCost - maintCost - otherCost;
    return result > 0 ? result : 0;
}

export function getTotalPrice(payment, rate, length) {
    const i = (rate/100) / 12;
    const n = length * 12;
    const r = ( (payment / i) * (1 - (1/Math.pow(1+i, n))) )
    return isNaN(r) ? 0 : r;
}