let food = [`Pecan pie`,`Shrimp`,`Quesadilla`,`Cheese cake`,`Hotdog`];

food.forEach(f =>{console.log(f);})
/*
Challenge (Go look at MON docs to remind you):
Create a list (with an Array) of movies
Use .forEach() to list my movies
Add another movie
Replace and existing movie with another one
*/
let list = [`batman`,`superman`,`spiderman`,`ironman`]

list.forEach(movie =>{console.log(movie);})
list.push(`Thor`)
list.splice(1,1, `Infinity War`)
console.log(list)