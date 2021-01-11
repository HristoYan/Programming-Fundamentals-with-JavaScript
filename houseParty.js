function party(array) {
    let guestList = [];

    for (let i = 0; i < array.length; i++) {
        let inputList = array[i].split(' ');

        if (inputList[2] == 'going!') {
            if (guestList.includes(inputList[0])) {
                console.log(`${inputList[0]} is already in the list!`);
            } else {

                guestList.push(inputList[0]);
            }
        } else {
            if (guestList.includes(inputList[0])) {

                for (let j = 0; j < guestList.length; j++) {
                    let inList = guestList[j];
                    if (inputList[0] === guestList[j]) {

                        guestList.splice(j, 1);
                    }
                }

            } else {
                console.log(`${inputList[0]} is not in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}
party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);