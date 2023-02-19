// write Bio using callback in JavaScript

//this is my task when learn callback in javascript, callback is call another function iner the function
// see example below
const myName = () => {
    console.log("hi, my name is guby"); 
}

const myAge = () => {
    console.log("i'm 12 years old"); 
}

const myAddress = () => {
    console.log("i live in jakarta"); 
}

const myHobbies = () => {
    console.log("i love playing guitar"); 
}


const bioData = (name, age, address, hobbies) => {
    name()
    age()
    address()
    hobbies()
}

bioData(myName, myAge, myAddress, myHobbies)