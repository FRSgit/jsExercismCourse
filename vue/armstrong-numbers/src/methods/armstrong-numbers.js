export const isArmstrongNumber = number => {
    const numberString = number.toString();
    let sum = 0;
    for (let i = 0, len = numberString.length; i < len; i++) {
        sum += numberString[i] ** len;
    }
    return sum === number;
};