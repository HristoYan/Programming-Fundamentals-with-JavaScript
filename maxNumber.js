function maxNum(arr) {
    let isBigger = true;
    let max = '';
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {

            if(arr[i] <= arr[j]) {
                isBigger = false;
                break;
            } else {
                isBigger = true;
            }
        }
        
        if(isBigger) {
            max += num + ' ';
        }
    }
    console.log(max);
}
maxNum([41, 41, 34, 20]);