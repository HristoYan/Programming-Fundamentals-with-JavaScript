
// по някаква причина 0/100
function train(array) {
    let wagons = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());
    let addingWagon = array.shift().split(' ');

    while (addingWagon[0] === 'Add') {
        wagons.push(Number(addingWagon[1]));
        addingWagon = array.shift().split(' ');
    }

    let passengers = Number(addingWagon);

    for (let i = 0; i <= array.length; i++) {

        for (let j = 0; j < wagons.length; j++) {
            let wagon = wagons[j];
            if (passengers <= (maxCapacity - wagon)) {
                wagon += passengers;
                wagons.splice(j, 1, wagon);
                break;
            }
        }
        passengers = Number(array[i]);
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'Add -12',
'Add 12',
'30',
'10',
'75',
'15',
'60']
);