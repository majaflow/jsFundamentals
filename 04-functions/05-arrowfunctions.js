//nickname: FAT ARROW FUNCTIONS

//cats(1, 35);

//let fatArrows = (x) => console.log(x)

//fatArrows("This is a function, nothing to see")




// create two functions
// first - take a string parameter, captilize it;
// first - return that string;

// second - string as a parameter, and then lowercase
//console.log result
let score = "Winner"
function upperCase(big) {
    return big.toUpperCase();
}
function lowerCase(small) {
    return small.toLowerCase()
}


console.log(upperCase( lowerCase(score)))