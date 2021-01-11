function inRange(a, b) {

    let firstChar = getCode(a);
    let secondChar = getCode(b);

    if(secondChar < firstChar) {
        let temp = firstChar;
        firstChar = secondChar;
        secondChar = temp;
    }

    let solve = printInRange(firstChar, secondChar);
    console.log(solve);

    function getCode(x) {
        let code = x.charCodeAt();

        return code;
    }

    function printInRange(x, y) {
        let simbols = '';
        for(let i = x + 1; i < y; i++) {
            simbols += String.fromCharCode(i) + ' ';
        }
        return simbols;
    }
}
inRange('#', ':');