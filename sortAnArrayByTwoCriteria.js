function sort(array) {

    array.sort((x, y) => (x.length - y.length) || (x.localeCompare(y)));
    console.log(array.join('\n'));
}
sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]);