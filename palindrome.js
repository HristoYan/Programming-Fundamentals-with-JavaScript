function polidrome(array) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        let poli = array[i].toString().split('');
        let isPoli = 'true';
        for(let j = 0; j <= poli.length / 2; j++){
            if(poli[j] !== poli[poli.length - 1 - j]) {
                isPoli = 'false'
            }
        }
        result += isPoli + '\n';
        
    }
    console.log(result);
}
polidrome([32,2,232,1010]);