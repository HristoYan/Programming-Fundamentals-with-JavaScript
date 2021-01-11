function negOrPos(arr) {

    let result = [];

    for (const num of arr) {
        if(num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}
negOrPos([3, -2, 0, -1]);