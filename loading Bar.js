function bar(num) {
    let loadBar = '';
    for(let i = 10; i <= 100; i += 10) {

        if(i <= num) {
            loadBar += String.fromCharCode(37);
        } else {
            loadBar += String.fromCharCode(46);
        }
    }

    if(num == 100) {
        console.log('100% Complete!');
        console.log(`[${loadBar}]`);
    } else {
        console.log(`${num}% [${loadBar}]`);
        console.log('Still loading...');
    }
}

bar(100);

