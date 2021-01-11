function equal(array) {
    let num = 0;
    isEqual = false;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }
        for (let k = i + 1; k < array.length; k++) {
            rightSum += array[k];
        }
        if (leftSum === rightSum) {
            isEqual = true;
            num = i;
            break;
        }
    }
    if (isEqual) {
        if (num === 0) {
            console.log(0);
        } else {
            console.log(num);
        }
    } else {
        console.log('no');
    }
}
equal([1, 2, 3, 3]);