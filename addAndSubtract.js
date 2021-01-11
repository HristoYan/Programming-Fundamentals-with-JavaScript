function subtract(x, y, z) {
    let result = add(x, y) - z;
    function add(a, b) {
        return a + b;
    }
    return result;
}

console.log(subtract(42, 58, 100));