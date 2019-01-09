// If Statements

let isOn = true;

if (isOn === true) {
console.log('The light is on!')
}
if(isOn) {
    console.log('The light is on,YAY!')
}


// If Else Statements
let money = false

if (money) {
    console.log('Starbucks')
} else {
    console.log('Make coffee')
}



//How to capitalize the first letter




let weather = 40
if (weather > 70) {
    console.log('Wear a t-shirt')
} else if (weather <= 70 && weather > 50) {
console.log('Wear a light jacket')
} else {
    console.log('Stay inside')
}

let myAge = 20
let young = 'Sorry, you\'r too young to do anything'
let vote = 'Yay! you can vote!'
let drink = 'Yay! You can vote'
let rent = 'Yay! You can rent a car!'
if (myAge >=25) {
    console.log(rent,drink,vote)
} else if (myAge >= 21) {
    console.log(drink,vote)
} else if (myAge >= 18) {
    console.log(vote)
} else {
    console.log(young)
}

