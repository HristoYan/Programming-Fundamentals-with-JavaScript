function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

  for (const cat of array) {
      let [name, age] = cat.split(' ');
      let myCat = new Cat(name,age);
      myCat.meow();
  }

}

cats(['Mellow 2', 'Tom 5']);