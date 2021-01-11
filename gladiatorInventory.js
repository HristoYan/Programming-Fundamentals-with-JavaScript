function inventory(array) {

    let firstInventory = array.shift().split(' ');
    let loops = array.length;

    for (let i = 0; i < loops; i++) {
        let command = array.shift().split(' ');
        commandOne = command[0]
        switch (commandOne) {
            case 'Buy':
                if (!(firstInventory.includes(command[1]))) {

                    firstInventory.push(command[1]);
                }
                break;
            case 'Trash':
                if (firstInventory.includes(command[1])) {
                    let trashIndex = firstInventory.indexOf(command[1]);
                    firstInventory.splice(trashIndex, 1);
                }
                break;
            case 'Repair':
                if (firstInventory.includes(command[1])) {
                    let repairIndex = firstInventory.indexOf(command[1]);
                    let repaird = firstInventory.splice(repairIndex, 1);
                    firstInventory.push(repaird[0]);
                }
                break;
            case 'Upgrade':
                let upG = command[1].split('-');
                if (firstInventory.includes(upG[0])) {
                    let upgradeIndex = firstInventory.indexOf(upG[0]);
                    let upgraded = upG.join(':');
                    firstInventory.splice((upgradeIndex + 1), 0, upgraded);
                    // let upgradeIndex = firstInventory.indexOf(command[1]);
                    // firstInventory.splice((upgradeIndex + 1), 0, command[1]);
                    // firstInventory.push(repaird);
                }
                break;
        }
    }
    console.log(firstInventory.join(' '));
}

inventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
);