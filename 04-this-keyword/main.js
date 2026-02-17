// function hi(){
//     console.log(this);
// }

const user = {
    firstName : "sam",
    lastName : "khan",
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let  sam = ()=>{
    console.log(this);
}