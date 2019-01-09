



let age = 20;
let young = 'Sorry, you\'r too young to do anything';
let vote = 'Yay! you can vote!';
let drink = 'Yay! You can vote';
let rent = 'Yay! You can rent a car!';

(age >= 25) ? console.log(rent,drink,vote) : 
(age >= 21) ? console.log(drink,vote) :
(age >= 18) ? console.log(vote) : console.log(young)
