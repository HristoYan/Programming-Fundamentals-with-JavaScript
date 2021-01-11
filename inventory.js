function inventory(array) {

    let invent = [];
    for (const heros of array) {
        let [hero, level, sort] = heros.split(' /');
        let items = sort.split(',')
            .sort((a, b) => a.localeCompare(b))
            .join(',');
        let currHero = {
            hero,
            level: Number(level),
            items
        };

        invent.push(currHero);
    }
    let newInvent = invent.sort((x, y) => x.level - y.level);
    
    newInvent.forEach(hero => {
        console.log(`Hero: ${hero.hero}\nlevel => ${hero.level}\nitems =>${hero.items}`);
    })

}


inventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);