//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = number => {
    const numberString = number.toString();
    let sum = 0;
    for (let i = 0, len = numberString.length; i < len; i++) {
        sum += numberString[i] ** len;
    }
    return sum === number;
};