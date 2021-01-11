function smallest(arr) {
    let orderdArr = arr.sort((a, b) => a - b);
    console.log(orderdArr.slice(0, 2).join(' '));
}

smallest([3, 0, 10, 4, 7, 3]);