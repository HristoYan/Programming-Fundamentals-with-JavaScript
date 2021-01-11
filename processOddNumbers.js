function processOdd(arr) {
    let oddArr = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if(i % 2 !== 0) {
            el *= 2;
            oddArr.push(el);
        }
    }
    oddArr.reverse();
    console.log(oddArr.join(' '));
}

processOdd([3, 0, 10, 4, 7, 3]);