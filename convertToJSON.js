function convToJSON(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}
convToJSON('George',
    'Jones',
    'Brown');