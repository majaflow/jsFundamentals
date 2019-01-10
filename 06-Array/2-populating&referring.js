let food = [`Pecan pie`, 'Shrimp', `Quesadilla`,`Cheese cake`, `Hotdog`]
food.push(`Pizza`);
/*
adds item to array.push(element)
*/
for(f in food) {
    console.log(food[f])
}
food.splice(1,0,`Bananas`)
/*
splice(insert position, position to be removed, item you want in)
*/
console.log(food)
food.splice(4,1)
console.log(food)
food.pop();
console.log(food)