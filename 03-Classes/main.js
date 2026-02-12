// class createUser{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getBirthyear(){
//         return new Date().getFullYear() - this.age;
//     }

//     getullName(){
//         return this.firstName + " " + this.lastName;
//     }

// }

// let user1 = new createUser("sam", "khan", 24);
// let user2 = new createUser("khan", "Ahmad", 34);

// PRIVATE AND PUBLIC FIELDS

// class createUser{
//     #age;
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.#age = age;
//     }
//     // #hi = "hello";

//     static hi = "Hello"
//     getBirthyear(){
//         return new Date().getFullYear() - this.#age;
//     }

//     getullName(){
//         return this.firstName + " " + this.lastName;
//     }

// }

// let user1 = new createUser("sam", "khan", 24);
// let user2 = new createUser("khan", "Ahmad", 34);

// GETTERS AND SETTERS
// const user = {
//     firstName : "Sam",
//     lastName : "khan",
//     get fullName (){
//         console.log("getting.....");
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(val){
//         // console.log("setting...");
//         // console.log(val);

//         const [firstName, lastName] = val.split(" ");
//         // console.log(splitted);
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

// }

// console.log(user.fullName());

// user.fullName = "tousif ahmad"

// PROTOTYPAL INHERITANCE  (EXTEND AND SUPER KEYWORD)

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// const user1 = new User('Aman', 'Mishra', 32)
// const user2 = new User('Anurag', 'Singh', 72)
class Student extends User {
    constructor(firstName, lastName, age, standard){
        super(firstName, lastName, age, standard)
        this.standard = standard;
    }

    study(){
        console.log("studying...");
    }
//   constructor(firstName, lastName, age, standard) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.standard = standard;
//   }
//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(value) {
//     const [firstName, lastName] = value.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
}

class Employee{
    constructor(firstName, lastName, age, employee) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.employee = employee;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const student1 = new Student('Aman', 'Mishra', 32, "BS.c")
const student2 = new User('Anurag', 'Singh')

const employee = new User('Anurag', 'Singh', "BCA", "google")