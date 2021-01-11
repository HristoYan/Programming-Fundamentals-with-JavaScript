function solve(array) {
    class Songs {
        constructor (typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        theSong() {
            console.log(`${this.name}`);
        }

    }
    
    let numSongs = array.shift();
    let theType = array.pop();

    for (const song of array) {
        let [typeList, name, time] = song.split('_');
        let mySongs = new Songs(typeList, name, time);

        if(typeList === theType) {
            mySongs.theSong();
        }
        if (theType === 'all') {
            mySongs.theSong();
        }
    }

}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);