function calculator(numOne, operator, numTwo) {
    if (operator == '+') {
        console.log((numOne + numTwo).toFixed(2));
    } else if (operator == '-') {
        console.log((numOne - numTwo).toFixed(2));
    } else if (operator == '*') {
        console.log((numOne * numTwo).toFixed(2));
    } else if (operator == '/') {
        console.log((numOne / numTwo).toFixed(2));
    }

}
calculator(25.5,
    '-',
    3);