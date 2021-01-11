function solve(num, power) {
    let result = powerNum(num, power);

    function powerNum(num, power) {
        let res = Math.pow(num, power);
        
        return res;
    }
    console.log(result);
}
solve(2, 8);