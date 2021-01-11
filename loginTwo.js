function solve (input) {
    let index = 0;
    let userName = input[index++];
    let passWord = '';
    let pass = input[index++];
    for (let i = userName.length - 1; i >= 0; i--) {
        passWord += userName[i];
    }
    for (let j = 1; j <= input.length; j++) {
        if (pass === passWord) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            if (j > 3) {
                console.log(`User ${userName} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }
        pass = input[index++];
    }
}
solve(['sunny','rainy','cloudy','sunny','not sunny']);