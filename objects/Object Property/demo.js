//Reach Object Properties

let person = {
  firstname: "Ertugrul",
  lastname: "Sarihan",
  age: 26,
};

//console.log(person.firstname); //Ertugrul
//console.log(person["firstname"]); //Ertugrul

//Adding new property

person.eyecolor = "Brown";

//or

person["eyecolor"] = "Brown";

//console.log(person.eyecolor); //Brown

Object.defineProperty(person, "show", {
  get: function () {
    return `${this.firstname}  ${this.lastname}`;
  },
});

function superPerson(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
superPerson.prototype.age = 26;

let Ertugrul = new superPerson("Ertugrul", "Sarihan");

//console.log(Ertugrul.__proto__.age); // 26

//console.log(superPerson.prototype.age); // 26

//console.log(Ertugrul.hasOwnProperty("age")); //false
Ertugrul.age = 28;
//console.log(Ertugrul.hasOwnProperty("age")); //true
