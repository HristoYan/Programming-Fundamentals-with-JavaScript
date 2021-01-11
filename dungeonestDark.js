function dark(array) {
    let health = 100;
    let coins = 0;
    let rooms = array[0].split('|');
    let roomCounter = 0;
    let isAlive = true;
    for (let i = 0; i < rooms.length; i++) {
        let roomNum = rooms[i].split(' ');
        let room = roomNum[0];
        let num = Number(roomNum[1]);

        roomCounter++;

        if(room === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else if (room === 'potion') {
            health += num;
            console.log(`You healed for ${10} hp.`);
            if(health > 100) {
                health = 100;
            }
            console.log(`Current health: ${health} hp.`);
        } else {
            health -= num;
            if(health <= 0) {
                console.log(`You died! Killed by ${room}.`);
                console.log(`Best room: ${roomCounter}`);
                isAlive = false;
                break;
            }
            console.log(`You slayed ${room}.`);
        }
    }
    if(isAlive){
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);

    }
}
dark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);