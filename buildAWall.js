function buildWall(array) {
    let numArr = array.map(Number);
    let min = 31;
    let costByDay = [];
    let overAll = 0;
    for (let i = 0; i < array.length; i++) {
        if (numArr[i] < min) {
            min = numArr[i];
        }
    }

    for (let j = min; j < 30; j++) {
        let sum = 0;
        for (let k = 0; k < numArr.length; k++) {
            if (numArr[k] < 30) {
                sum++;
                numArr.splice(k, 1, (numArr[k] + 1));
            }
            
        }
        costByDay.push(sum * 195);
    }
    
    for (const el of costByDay) {
        overAll += el;
    }

    console.log(costByDay.join(', '));
    console.log(`${overAll * 1900} pesos`);
}

buildWall([17, 22, 17, 19, 17]);