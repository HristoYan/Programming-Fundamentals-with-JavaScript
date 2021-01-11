function personalInfo(firstName, lastName, age) {

    // let person = {};
    // person.firstName = firstName;
    // person.lastName = lastName;
    // person.age = age;
    let person = {
        firstName,
        lastName,
        age
    };

    return person;
}
console.log(personalInfo("Peter",
    "Pan",
    "20"));