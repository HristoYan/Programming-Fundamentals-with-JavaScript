function manipulator(array, arrayOne) {
    let loops = arrayOne.length;
    let isOver = false;
    for (let i = 0; i < loops; i++) {
        let command = arrayOne.shift().split(' ');
        if (isOver) {
            break;
        }

        switch (command[0]) {
            case 'add':
                let x = Number(command[1]);
                let y = Number(command[2]);
                add(x, y);
                break;
            case 'addMany':

                addMany(command);
                break;
            case 'contains':
                contains(Number(command[1]));
                break;
            case 'remove':
                remove(Number(command[1]));
                break;
            case 'shift':
                shift(Number(command[1]));
                break;
            case 'sumPairs':
                let sumed = sumPairs();
                array.splice(0, array.length);
                array = sumed;
                break;
            case 'print':
                console.log(`[ ${array.join(', ')} ]`);
                isOver = true;
                break;
        }

    }

    function add(index, element) {
        array.splice(index, 0, element);
    }

    function addMany(arr) {
        arr.shift();
        
        let ind = Number(arr.shift());
        for (let j = 0; j < arr.length; j++) {
            array.splice(ind + j, 0, Number(arr[j]));

        }
    }

    function contains(x) {
        console.log(array.indexOf(x));
    }

    function remove(x) {
        if (x < 0 || x > array.length) {
            return array;
        } else {

            array.splice(x, 1);
        }
    }

    function shift(x) {

        let rot = array.splice(x, array.length);
        for (let k = 0; k < rot.length; k++) {

            array.splice(k, 0, rot[k]);

        }
    }

    function sumPairs() {
        let sumed = [];
        for (let l = 0; l < array.length; l += 2) {
            if ((l + 1) < array.length) {

                let sum = array[l] + array[l + 1];
                sumed.push(sum);
            } else {
                array[l + 1] = 0;
                let sum = array[l] + array[l + 1];
                sumed.push(sum);
            }
        }
        return sumed;
    }
}

manipulator([2, 2, 4, 2],
    ["add 1 4", "sumPairs", "contains 6", "addMany 3 6 4 5 2 3", "remove 4", "shift 4", "print"]);