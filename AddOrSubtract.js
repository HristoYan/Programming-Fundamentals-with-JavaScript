function solve(array) {
    let firstSum = 0;
    let secondSum = 0;
    for (const el of array) {
        firstSum += el;
    }
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element % 2 == 0) {
            element += i;
            newArr.push(element);
        } else {
            element -= i;
            newArr.push(element);
        }
                
    }

    for (const iterator of newArr) {
        secondSum += iterator;
    }
    
    console.log(newArr);
    console.log(firstSum);
    console.log(secondSum);
}
solve([-5, 11, 3, 0, 2]);

