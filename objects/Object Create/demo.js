

//Creating object with variable

let person = {
  name: "Ertugrul",
  suranme: "Sarihan",
  age: 17,
  isAdult: function () {
    return this.age >= 18;
  },
};

//or

let personNew = new Object({
  name: "Ertugrul",
  suranme: "Sarihan",
  age: 17,
  isAdult: function () {
    return this.age >= 18;
  },
});








//Creating object with function

function createPerson(fName, lName, age) {
  let person = {
    name: fName,
    lastname: lName,
    age: age,
    isAdult: function () {
      return this.age >= 18;
    },
  };
  return person;
}

let person1 = createPerson("Ertugrul", "Sarihan", 26);
let person2 = createPerson("Ertugrul", "Sarihan", 26);
/*


//Showing Object Properties Keys

console.log(Object.keys(person1));
//or

for (let property in person1) {
  console.log(property);
}


*/





//Assign

let person3 = {};
Object.assign(person3, person1);
console.log(person3);

let healthStats = {
  height: 170,
  weight: 68,
};

Object.assign(person1, healthStats);




//Functional  Object Create

function createOne(name, surname, age) {
  (this.name = name),
    (this.surname = surname),
    (this.age = age),
    (this.isAdult = function () {
      return this.age >= 21;
    });
}

let erto = new createOne("Ertugrul", "Sarihan", 26);

//Object Create

let newPerson1 = Object.create(Object.prototype, {
  firstname: {
    value: "Ertugrul",
    enumerable: true,
    writable: true,
    configurable: true,
  },
  lastname: {
    value: "Sarihan",
    enumerable: true,
    writable: true,
    configurable: true,
  },
  age: {
    value: 26,
    enumerable: true,
    writable: true,
    configurable: true,
  },
});


