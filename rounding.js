function solve(num, prec) {
    let result = 0;
    if (prec > 15) {
        prec = 15;
    }
    result = parseFloat(num.toFixed(prec));
    console.log(result);
}
solve (10.5, 3);