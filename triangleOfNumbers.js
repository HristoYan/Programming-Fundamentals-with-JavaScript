function solve(num) {
    for (let i = 1; i <= num; i++) {
        let tri = '';
        for (let j = 1; j <= i; j++) {
            tri += i + ' ';
        }
        console.log(tri);
    }
}
solve(20);