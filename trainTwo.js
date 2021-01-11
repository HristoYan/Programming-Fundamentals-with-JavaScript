function trainTwo(array) {
    let wagons = array.shift().split(' ').map(Number);
    let capacity = Number(array.shift());
    let index = array.length;
    for (let i = 0; i < index; i++) {

        let command = array.shift().split(' ');
        
        if (command.includes('Add')) {
            wagons.push(Number(command[1]));
        } else {
            let adding = Number(command);
            for (let j = 0; j < wagons.length; j++) {
                let newPasangers = adding + wagons[j];
                if (newPasangers <= capacity) {
                    wagons.splice(j, 1, newPasangers);
                    break;
                }
                
            }
        }

    }
    console.log(wagons.join(' '));
}
trainTwo(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);