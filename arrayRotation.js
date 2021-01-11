function rotation(arr, num) {

    for (let i = 0;i < num; i++) {
        let element = arr.shift();
        arr.push(element);

    }
    console.log(arr.join(' '));
}
    rotation([2, 4, 15, 31], 5);