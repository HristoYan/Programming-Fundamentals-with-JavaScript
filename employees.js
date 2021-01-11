function solve(array) {
    class Employees {
        constructor(employeeName) {
            this.employeeName = employeeName;
            this.personalNum = employeeName.length;
        }

        personalInfo() {
            console.log(`Name: ${this.employeeName} -- Personal Number: ${this.personalNum}`);
        }
    }
    for (const person of array) {
        
        let myEmployee = new Employees(person);
        myEmployee.personalInfo();
    }
}

solve(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);