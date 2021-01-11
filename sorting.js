function sorting(array) {
    let sorted = [];
    let n = array.length;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            array.sort((a, b) => b - a);
            sorted.push(array.shift());
        } else {
            array.sort((a, b) => a - b);
            sorted.push(array.shift());
        }
    }
    console.log(sorted.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);