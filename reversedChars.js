function solve(one, two, three) {
    let four = one + two + three;
    let rev = '';
    for (let i = four.length - 1; i >= 0; i--) {
        rev += four.charAt(i) + ' ';
        
    }
    console.log(rev);
}
solve('A',
    'B',
    'C');