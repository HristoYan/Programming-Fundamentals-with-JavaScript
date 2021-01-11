// function solve(firstArr, secondArr) {

//     for (let i = 0; i < firstArr.length; i++) {
//         let element = firstArr[i];
//         for (let j = 0; j < secondArr.length; j++) {
//             let el = secondArr[j];
//             if (element === el) {
//                 console.log(el);
//             }

//         }

//     }

// }
function solve(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        let element = firstArr[i];
        let isTrue = secondArr.includes(element);
        if (isTrue) {
            console.log(element);
        }

    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);