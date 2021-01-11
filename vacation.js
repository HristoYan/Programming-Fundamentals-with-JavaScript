function solve(group, type, day) {
    let price = 0;
    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                prise = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }
            break;
        case 'Business':
            if (day === 'Friday') {
                prise = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                prise = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }
            break;
    }
    let totalPrice = group * price;
    if (type === 'Students' && group >= 30) {
        totalPrice *= 0.85;
    } 
    if (type === 'Business' && group >= 100) {
        totalPrice -= 10 * price;
    } 
    if (type === 'Regular' && group >= 10 && group <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(40,
    "Students",
    "Saturday");