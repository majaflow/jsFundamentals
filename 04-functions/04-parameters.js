function pet(animal) {
    console.log(`I have a  ${animal} for a pet.`);
}
pet("rat");

// Write a function that takes two Parameters:
// First Name
// Last Name
// come together in a variable, but inside of the function
// console.log the new variable
// invoke the function

function Fullname(Firstname,Lastname) {
    var Name = `${Firstname} ${Lastname}`
    console.log(`Hello my Name is ${Name}`)
} 
Fullname("Matthew","Flowers")

function calcTax(bill) {
    let total = bill * 1.07
    return total;
}
var dinner = 150;
var myTotal = calcTax(dinner);

console.log(myTotal);