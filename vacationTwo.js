function solve(group, type, day) {
    let price = 0;
    let totalPrice = 0;
    if (type == 'Students') {
        if (day == 'Friday') {
            prise = 8.45;
        } else if (day == 'Saturday') {
            price = 9.80;
        } else if (day == 'Sunday') {
            price = 10.46;
        }
        totalPrice = group * price;
        if (group >= 30) {
            totalPrice *= 0.85;
        }
    } else if (type == 'Business') {
        if (day == 'Friday') {
            prise = 10.90;
        } else if (day == 'Saturday') {
            price = 15.60;
        } else if (day == 'Sunday') {
            price = 16;
        }
        totalPrice = group * price;
        if (group >= 100) {
            totalPrice -= 10 * price;
        }
    } else if (type == 'Regular') {
        if (day == 'Friday') {
            prise = 15;
        } else if (day == 'Saturday') {
            price = 20;
        } else if (day == 'Sunday') {
            price = 22.50;
        }
        totalPrice = group * price;

        if (group > 9 && group < 21) {
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(40,
    "Students",
    "Saturday");