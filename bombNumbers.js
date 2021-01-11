function bomb(arrayOne, arrayTwo) {
    let loops = arrayOne.length;
    for (let i = 0; i < loops; i++) {
        
        if(arrayOne.includes(arrayTwo[0])) {
            let bobmIndex = arrayOne.indexOf(arrayTwo[0]);
            let cuted = (arrayTwo[1] * 2) + 1;
            let indexCut = bobmIndex - arrayTwo[1];
            if (indexCut < 0) {
                cuted += indexCut
                indexCut = 0;
            }
            arrayOne.splice(indexCut, cuted);
           
            
        }
        if(arrayOne.length === 0) {
            break;
        }
    }
   
    let result = 0;
    for (const el of arrayOne) {
        result += el
    }
    console.log(result);

}
bomb([2, 1, 2, 1, 1, 1, 2, 3, 1, 1],
    [2, 2]);