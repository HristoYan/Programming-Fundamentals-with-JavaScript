function solve(array) {
    let newArr = [];
    let allKeys = [];
    for (const line of array) {
        let newLine = JSON.parse(line);
        newArr.push(newLine);
    }
    for (const line of newArr) {
        for (const term of Object.keys(line)) {

            allKeys.push(term);
        }
    }
    let sortedKeys = allKeys.sort((x, y) => x.localeCompare(y));

    for (const term of sortedKeys) {
        for (const line of newArr) {
            if (term == Object.keys(line)) {

                console.log(`Term: ${term} => Definition: ${line[term]}`);

            }
        }
    }

}

solve(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Coffee":"A hot drink."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);