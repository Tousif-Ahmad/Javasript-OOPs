// const user1 = {
//     firstName : "sam",
//     lastName : "uffexx",
//     age : 23,
//     getAgeYear: function (age){
//     return new Date().getFullYear() - user1.age;
// }

// }
// const user2 = {
//     firstName : "khan",
//     lastName : "ahmad",
//     age : 34,
//     getAgeYear: function (age){
//     return new Date().getFullYear() - user2.age;
// }

// }


// FACTORY FUNCTION 

function createUser(firstName, lastName, age){
    const user ={
        firstName : firstName,
        lastName : lastName,
        age : age,

        getAgeYear(){
            return new Date().getFullYear() - user.age;
        }

    }

    return user;

}

let user1 = createUser("sam", "khan", 24);
let user2 = createUser("khan", "Ahmad", 34);