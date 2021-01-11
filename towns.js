function urban(array) {
    class Towns {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
        location() {
            console.log(`{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`);
        }
    }

    for (const towns of array) {
        let [town, latitude, longitude] = towns.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let townLocation = new Towns(town, latitude, longitude);
        townLocation.location();
    }
}

urban(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);