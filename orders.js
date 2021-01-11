
function order(product, num) {
    let price = calc(product, num);

    function calc(p, n) {
        let total = 0
        switch (p) {
            case 'coffee':
                total = n * 1.5;
                break;
            case 'water':
                total = n * 1;
                break;
            case 'coke':
                total = n * 1.4;
                break;
            case 'snacks':
                total = n * 2;
                break;
        }
        return total;
    }
    console.log(price.toFixed(2));
} 
order("coffee", 2);