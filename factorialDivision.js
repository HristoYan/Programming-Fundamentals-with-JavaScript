function factorial(x, y) {

    let xFact = factorialize(x);
    let yFact = factorialize(y);

    function factorialize(a) {

        let aFact = 1;
        for (let i = 1; i <= a; i++) {
            aFact *= i;
        }
        return aFact;
    }

    let result = xFact / yFact;

    console.log(result.toFixed(2));
}

factorial(6, 2);