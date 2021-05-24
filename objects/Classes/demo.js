//Object Creating With Classes

class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  get fullName() {
    return this.firstname + " " + this.lastname;
  }
  set fullName(fullName) {
    let parts = fullName.split(" ");
    this.firstname = parts[0];
    this.lastname = parts[1];
    this.age = Number(parts[2]);
  }
  isAdult() {
    return this.age >= 18;
  }
}

Object.defineProperty(Person.prototype, "fullName", { writable: true }); //Setting Properties

let Person1 = new Person("Ertugrul", "Sarihan", 26);

//console.log(Person1)
//console.log(Person1.fullName) //Ertugrul Sarihan

Person1.fullName = "Salih Sarihan 16 "; // Call set fullName function and update

//console.log(Person1.fullName)  //Salih Sarihan
//console.log(Person1.isAdult()) //False

//İnheritance

class SuperPerson extends Person {
  constructor(firstname, lastname, age) {
    super(firstname, lastname, age);
  }
}

let Furkan = new SuperPerson("Furkan", "Mut", 26);
console.log(Furkan);

