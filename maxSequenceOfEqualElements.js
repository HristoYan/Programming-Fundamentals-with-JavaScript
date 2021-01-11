function solve(array) {
    let longestArr = [];
    for (let i = 0; i < array.length; i++) {
        let testArr = [array[i]];
        for (let j = i +1; j < array.length; j++) {
            if (array[i] === array[j]) {
                testArr.push(array[j]);
            } else {
                break;
            }
            
        }
        if(longestArr.length < testArr.length) {
            longestArr = testArr;
        }
    }
    console.log(longestArr.join(' '));
}
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);