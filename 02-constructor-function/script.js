// function getBirthYear() {
    
//   return new Date().getFullYear() - this.age;
// }


// function createUser(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;

// }

// let user1 = createUser("sam", "khan", 24);
// let user2 = createUser("khan", "Ahmad", 34);


function createUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

}
createUser.prototype.getBirthYear = function(){
    return new Date().getFullYear() - this.age;
}
let user1 = new createUser("sam", "khan", 24);
let user2 = new createUser("khan", "Ahmad", 34);
