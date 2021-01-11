function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let hight = 0;

    for (let i = base; i > 0; i -= 2) {
        hight++;
        gold = 0;
        if (i != 1) {
            stone += (i - 2) * (i - 2);
        }
        if (hight % 5 == 0 && i != 1) {
            lapisLazuli += i * 4 - 4;
        }
        if (hight % 5 != 0 && i != 1) {
            marble += i * 4 - 4;
            if (base % 2 == 0 && i == 2) {
                marble -= 4;
            }
        }
        gold = i * i * increment;
    }
    
    stone *= increment;
    marble *= increment;
    lapisLazuli *= increment;
    hight *= increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(hight)}`);
}
solve(12, 1);