function search(array, arr) {

    let newArr = array.slice(0, arr[0]);
    newArr.splice(0, arr[1]);
    let counter = 0
    //newArr.includes(arr[2]);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === arr[2]) {
            counter++;
        }
    }
    console.log(`Number ${arr[2]} occurs ${counter} times.`);
}
search([5, 2, 3, 4, 3, 1, 6],
    [5, 2, 3]);