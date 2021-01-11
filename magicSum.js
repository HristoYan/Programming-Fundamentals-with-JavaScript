function magic(array, num) {
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = i + 1; j < array.length; j++) {
            sum = array[i] + array[j];
            if (array[i] + array[j] === num) {
                console.log(`${array[i]} ${array[j]}`);
            }

        }

    }
}
magic([1, 2, 3, 4, 5, 6],
    6);