function distinctArr(array) {
    let newArr = array.length;
    for (let i = 0; i <= newArr; i++) {
        let test = array[i]

        for (let j = i + 1; j <= newArr; j++) {
            let testOne = array[j];
            if (test === testOne) {
                array.splice(j, 1);
                    if (test === array[j]) {
                        array.splice(j, 1);
                    }


            }

        }
    }
    console.log(array.join(' '));
}
distinctArr([7, 8, 9, 7, 7, 2, 3, 4, 1, 2]);