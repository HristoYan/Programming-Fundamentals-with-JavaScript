function solve(arrayOne, arrayTwo) {
    class Stock {
        constructor(good, quontity) {
            this.good = good;
            this.quontity = quontity;
        }

        Store() {
            console.log(`${this.good} -> ${this.quontity}`)
        }
    }

    for (let i = 0; i < arrayOne.length; i += 2) {
        let quontity = 0;
        const good = arrayOne[i];
        const quontityOne = Number(arrayOne[i + 1]);

        let goodTwo = '';
        let quontityTwo = 0;
        for (let j = 0; j < arrayTwo.length; j += 2) {
            goodTwo = arrayTwo[j];
            quontityTwo = Number(arrayTwo[j + 1]);

            if (good === goodTwo) {
                quontity = quontityOne + quontityTwo;
                break;
            } else {
                quontity = quontityOne;

            }

        }

        let storedGoods = new Stock(good, quontity);
        storedGoods.Store();

    }

    for (let k = 0; k < arrayTwo.length; k += 2) {
        const good = arrayTwo[k];
        const quontity = arrayTwo[k + 1];
        if (!(arrayOne.includes(good))) {
            let storedGoods = new Stock(good, quontity);
            storedGoods.Store();
        }
    }
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
