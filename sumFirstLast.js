function sumFL(arr) {
    let first = Number(arr.shift());
    let second = Number(arr.pop());
    let result = first + second;
    return result;
}
console.log(sumFL(['5', '10']));