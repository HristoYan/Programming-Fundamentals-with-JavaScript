function solve(a, b, c) {
    let result = '';
    if (a >= 0 && b >= 0 && c >= 0) {
        result = 'Positive';
    } else if (a < 0 && b >= 0 && c >= 0) {
        if(b == 0 || c == 0) {
            result = 'Positive';
        } else {
        result = 'Negative';
        }
    } else if (a >= 0 && b < 0 && c >= 0) {
        if (a == 0 || c == 0) {
            result = 'Positive';
        } else {
            result = 'Negative';
        }
    } else if (a >= 0 && b >= 0 && c < 0) {
        if (a == 0 || b == 0) {
            result = 'Positive';
        } else {
            result = 'Negative';
        }
    } else if (a < 0 && b < 0 && c < 0) {
        result = 'Negative';
    } else if (a < 0 && b < 0 && c >= 0) {
        result = 'Positive';
    } else if (a < 0 && b >= 0 && c < 0) {
        result = 'Positive';
    } else if (a >= 0 && b < 0 && c < 0) {
        result = 'Positive';
    }
    console.log(result);
}
solve(-1,
    0,
    1
);