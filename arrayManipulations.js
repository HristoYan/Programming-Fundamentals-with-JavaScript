function manipulation(array) {
    
    let arr = array.shift()
                   .split(' ')
                   .map(Number);

    for (let i = 0; i < array.length; i++) {
        let operation = array[i]
                             .split(' ');
        let opr = operation.shift();
        let valueOne = Number(operation.shift());
        let valueTwo = Number(operation.shift());
        switch (opr) {
            case 'Add':
                add(valueOne);
                break;
            case 'Remove':
                remove(valueOne);
                break;
            case 'RemoveAt':
                removeAt(valueOne);
                break;
            case 'Insert':
                Insert(valueOne, valueTwo);
                break;
        }
    }
    console.log(arr.join(' '));

    function add(num) {
        arr.push(num);
    }

    function remove(num) {
        arr = arr.filter(x => x !== num);
    }

    function removeAt(num) {
        arr.splice(num, 1);
    }

    function Insert(num, index) {
        arr.splice(index, 0, num);
    }
}
manipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)
