/*
Arrays
**************
Arrays are containers that hold lists of items
let list = [ `item1`,`item2`, `item3`];
    (1)    (2) (3)
Denoted by []
Has values (`blue`,`green`,`yellow`), sperated with commas
*/



let students = [`Tony`,`Marshall`,`Ray`,23,true,[`Ryan`,`Iesha`,`Amira`]]
console.log(typeof students);
console.log(students instanceof Array); 
/* instanceof checks if variable is an array
*/
console.log(students[6][1])
console.log(`Hello ${students[6][2]} you look nice today`)