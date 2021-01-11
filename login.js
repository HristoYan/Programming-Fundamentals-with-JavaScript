function solve(input) {
    let userName = input[0];
    let correctPass = userName.split('').reverse().join('');
    for (let i = 1; i < input.length; i++) {
        if (input[i] === correctPass) {
            console.log(`User ${userName} logged in.`);
        } else {
            if (i > 3) {
                console.log(`User ${userName} blocked!`);
            } else {
            console.log('Incorrect password. Try again.');
            }
        }
    }
}
solve(['Acer','login','go','let me in','recA']);